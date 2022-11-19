import AsyncStorage from '@react-native-async-storage/async-storage';

class LocalStorageService {
  private static instance: LocalStorageService;

  static getInstance(): LocalStorageService {
    LocalStorageService.instance = LocalStorageService.instance || new LocalStorageService();
    return LocalStorageService.instance;
  }

  public async setItem(key: string, value: any): Promise<void> {
    const item = typeof value === 'object' ? JSON.stringify(value) : value;
    await AsyncStorage.setItem(key, item);
  }

  public async getItem<T = any>(key: string): Promise<T> {
    const item = (await AsyncStorage.getItem(key)) as string;
    return this.isJSon(item) ? JSON.parse(item) : item;
  }

  public async clear(): Promise<void> {
    await AsyncStorage.clear();
  }

  private isJSon = (str: any): boolean => {
    try {
      const parsed = JSON.parse(str);
      if (parsed && typeof parsed === 'object') {
        return true;
      }
    } catch {
      return false;
    }

    return false;
  };
}

export const localStorageService = LocalStorageService.getInstance();
