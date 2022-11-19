import {LoginProps} from '@models';
import auth from '@react-native-firebase/auth';

class AuthService {
  private static instance: AuthService;
  constructor() {}

  static getInstance(): AuthService {
    AuthService.instance = AuthService.instance || new AuthService();
    return AuthService.instance;
  }

  public login = async ({email, password}: LoginProps): Promise<string> => {
    // await this.setLanguageCode();
    // const {verificationId} = await FirebaseAuthentication.signInWithPhoneNumber({
    //   phoneNumber,
    // });

    // return verificationId;
    console.log(email, password);
    const loginData = await auth().signInWithEmailAndPassword(email, password);

    return loginData.user.uid;
  };

  public getErrorMessage = (errorCode: string): string => {
    switch (errorCode) {
      case 'auth/invalid-phone-number':
        return 'Número de teléfono inválido';
      case 'auth/invalid-verification-code':
        return 'Código de verificación inválido';
      case 'auth/invalid-verification-id':
        return 'ID de verificación inválido';
      case 'auth/missing-verification-code':
        return 'Código de verificación faltante';
      case 'auth/missing-verification-id':
        return 'ID de verificación faltante';
      case 'auth/credential-already-in-use':
        return 'Credenciales ya en uso';
      case 'auth/invalid-credential':
        return 'Credenciales inválidas';
      case 'auth/operation-not-allowed':
        return 'Operación no permitida';
      case 'auth/user-disabled':
        return 'Usuario deshabilitado';
      case 'auth/user-not-found':
        return 'Usuario no encontrado';
      case 'auth/wrong-password':
        return 'Contraseña incorrecta';
      case 'auth/invalid-email':
        return 'Correo electrónico inválido';
      case 'auth/email-already-in-use':
        return 'Correo electrónico ya en uso';
      case 'auth/operation-not-allowed':
        return 'Operación no permitida';
      case 'auth/weak-password':
        return 'Contraseña débil';
      default:
        return 'Something went wrong';
    }
  };

  public logout = async (): Promise<void> => {
    await auth().signOut();
  };
}

export const authService = AuthService.getInstance();
