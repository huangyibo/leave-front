
import {Injectable} from "@angular/core";
import {JwtService} from "./jwt.service";

@Injectable()
export class AdminJwtService extends JwtService{
  getToken(): string {
    return window.localStorage['adminJwtToken'];
  }

  saveToken(token: string) {
    window.localStorage['adminJwtToken'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('adminJwtToken');
  }
}
