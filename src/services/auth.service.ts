import {UserAdapter} from '@adapters';
import {LoginProps, User} from '@models';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

class AuthService {
  private static instance: AuthService;
  constructor() {}

  static getInstance(): AuthService {
    AuthService.instance = AuthService.instance || new AuthService();
    return AuthService.instance;
  }

  public login = async ({email, password}: LoginProps): Promise<User> => {
    return UserAdapter((await auth().signInWithEmailAndPassword(email, password)).user);
  };

  public getCurrentUser = async (): Promise<FirebaseAuthTypes.User | null> => {
    return await auth().currentUser;
  };

  public getIdtoken = async (): Promise<string> => {
    return (await auth().currentUser?.getIdToken()) || '';
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
        return 'Usuario o Contraseña incorrecta';
      case 'auth/wrong-password':
        return 'Usuario o Contraseña incorrecta';
      case 'auth/invalid-email':
        return 'Correo electrónico inválido';
      case 'auth/email-already-in-use':
        return 'Correo electrónico ya en uso';
      case 'auth/operation-not-allowed':
        return 'Operación no permitida';
      case 'auth/weak-password':
        return 'Contraseña débil';
      case 'auth/too-many-requests':
        return 'Demasiados intentos, intente más tarde';
      default:
        return 'Something went wrong';
    }
  };

  public logout = async (): Promise<void> => {
    await auth().signOut();
  };
}

export const authService = AuthService.getInstance();
