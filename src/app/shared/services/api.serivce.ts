import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Headers, Http, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {JwtService} from './jwt.service';

@Injectable()
export class ApiService {

  constructor(private http: Http,
              private jwtService: JwtService) {
  }

  private setHeader(): Headers {
    let headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    if (this.jwtService.getToken()) {
      headersConfig['Authorization'] = `Token ${this.jwtService.getToken()}`;
      headersConfig['token'] = this.jwtService.getToken();
      headersConfig['X-Auth-Token'] = this.jwtService.getToken();
    }

    return new Headers(headersConfig);
  }

  private formatErrors(error: any) {
    return Observable.throw(error.json());
  }

  get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, {headers: this.setHeader(), search: params})
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(`${environment.api_url}${path}`,
      JSON.stringify(body),
      {headers: this.setHeader()})
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      {headers: this.setHeader()})
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  delete(path: string): Observable<any> {
    return this.http.delete(
      `${environment.api_url}${path}`,
      {headers: this.setHeader()}
    )
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }
}
