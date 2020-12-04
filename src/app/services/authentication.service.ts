import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage'

const token_Key = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticationState = new BehaviorSubject(false);

  constructor(private storage: Storage, private platform: Platform) {
    this.platform.ready().then(() => {
      this.checkToken();
    })
  }

  login() {
    return this.storage.set(token_Key, 'Bearer 123').then(res => {
      this.authenticationState.next(true);
    });
  }
  logout() {
    return this.storage.remove(token_Key).then(() => {
      this.authenticationState.next(false);
    });
  }
  isAuthenticated(): boolean {
    return this.authenticationState.value;
  }
  checkToken() {
    return this.storage.get(token_Key).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    });
  }
}
