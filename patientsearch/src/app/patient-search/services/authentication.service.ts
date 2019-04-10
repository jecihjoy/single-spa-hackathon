import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
  constructor() {
  }
  getAuth() {
    const auth = sessionStorage.getItem('auth.credentials');
    return auth;
  }
}
