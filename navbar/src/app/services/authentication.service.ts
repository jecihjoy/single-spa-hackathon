import { Injectable } from '@angular/core';
import {take} from 'rxjs/operators';

import { SessionStorageService } from './session-storage.service';
import { SessionService } from './session.service';

@Injectable()
export class AuthenticationService {

  constructor(
    private sessionStorageService: SessionStorageService,
    private sessionService: SessionService) { }

  public authenticate(username: string, password: string) {

    const credentials = {
      username: username,
      password: password
    };
    console.log("auth method", username, password, credentials);


    const request = this.sessionService.getSession(credentials);
    console.log("auth request", request);

    request
      .pipe(take(1)).subscribe(
      (response: any) => {

        const data = response;

        if (data.authenticated) {
          console.log("if authenticated");

          this.setCredentials(username, password);

          // store logged in user details in session storage
          const user = data.user;
          this.storeUser(user);
        }else{
        console.log("not if authenticated");
        }
      });

    return request;
  }

  public logOut() {

    const response = this.sessionService.deleteSession();

    response.pipe(
      take(1)).subscribe(
      (res: Response) => {

        this.clearSessionCache();
      },
      (error: Error) => {

        this.clearSessionCache();
      });

    return response;
  }

  public clearSessionCache() {
    this.clearLoginAlertCookies();
    this.clearCredentials();
    this.clearUserDetails();
  }
  // This will clear motd alert cookies set  at every log in
  public clearLoginAlertCookies() {

      const cookieKey = 'motdLoginCookie';
  }

  private setCredentials(username: string, password: string) {

    const base64 = btoa(username + ':' + password);
    this.sessionStorageService.setItem(Constants.CREDENTIALS_KEY, base64);
  }

  private clearCredentials() {

    this.sessionStorageService.remove(Constants.CREDENTIALS_KEY);
  }

  private storeUser(user: any) {
    this.sessionStorageService.setObject(Constants.USER_KEY, user);
  }

  private clearUserDetails() {
    this.sessionStorageService.remove(Constants.USER_KEY);
  }
}

export class Constants {

  public static readonly CREDENTIALS_KEY = 'auth.credentials';

  public static readonly USER_KEY = 'user';
}
