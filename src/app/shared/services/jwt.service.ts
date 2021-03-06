import { Injectable } from '@angular/core';

@Injectable()
export class JwtService {

  getToken(): string {
    return localStorage.getItem('jwtToken');
  }

  saveToken(token: string) {
    // window.localStorage['jwtToken'] = token;
    localStorage.setItem('jwtToken', token);
  }

  destroyToken() {
    localStorage.removeItem('jwtToken');
  }

}
