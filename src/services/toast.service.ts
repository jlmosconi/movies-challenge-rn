import Toast from 'react-native-toast-message';

interface ToastOptions {
  type?: 'success' | 'error' | 'info';
  position?: 'top' | 'bottom';
  title?: string;
  message?: string;
  visibilityTime?: number;
  autoHide?: boolean;
  topOffset?: number;
  bottomOffset?: number;
  onShow?: () => void;
  onHide?: () => void;
  onPress?: () => void;
}

class ToastService {
  private static instance: ToastService;

  static getInstance(): ToastService {
    ToastService.instance = ToastService.instance || new ToastService();
    return ToastService.instance;
  }

  public show = ({
    type = 'success',
    position = 'bottom',
    title,
    message,
    visibilityTime = 4000,
    autoHide = true,
    topOffset = 30,
    bottomOffset = 40,
    onShow,
    onHide,
    onPress,
  }: ToastOptions): void => {
    Toast.show({
      type,
      position,
      text1: title || type === 'success' ? 'Exito' : type === 'error' ? 'Error' : 'Info',
      text2: message,
      visibilityTime,
      autoHide,
      topOffset,
      bottomOffset,
      onShow,
      onHide,
      onPress,
    });
  };
}

export const toastService = ToastService.getInstance();
