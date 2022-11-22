import {User} from '@models';
import firestore from '@react-native-firebase/firestore';
import {Unsubscribe} from '@reduxjs/toolkit';
import {UserEmptyState} from '@store/user/user.state';
import {BehaviorSubject, Observable, of} from 'rxjs';

class UserService {
  private user$: BehaviorSubject<User> = new BehaviorSubject<User>(UserEmptyState.userData as User);
  private userUnsubscribe!: Unsubscribe;
  private static instance: UserService;
  constructor() {}

  static getInstance(): UserService {
    UserService.instance = UserService.instance || new UserService();
    return UserService.instance;
  }

  public getProfile(): Observable<any> {
    return of('');
  }

  public getUserInRealTime(uid: string): Observable<User> {
    this.userUnsubscribe = firestore()
      .collection('users')
      .doc(uid)
      .onSnapshot(
        documentSnapshot => {
          this.setUser(documentSnapshot.data() as User);
        },
        error => {
          console.log(error);
        },
      );

    return this.getUser();
  }

  public setUser(user: User): void {
    this.user$.next(user);
  }

  public getUser(): Observable<User> {
    return this.user$.asObservable();
  }

  public getUserUnsubscribe(): Unsubscribe {
    return this.userUnsubscribe;
  }

  public unsubscribeUser(): void {
    this.userUnsubscribe ? this.userUnsubscribe() : null;
  }
}

export const userService = UserService.getInstance();
