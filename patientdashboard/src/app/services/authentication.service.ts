import { Injectable } from '@angular/core';

@Injectable()
export class AutheticationService {
    constructor() {
    }
    getAuth() {
        const auth = sessionStorage.getItem('auth.credentials');
        return auth;
    }
}
