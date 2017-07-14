import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import './china_address.json';
@Injectable()
export class CitySelectService {

  constructor(private http: Http) { }

  getAddress(){
    return this.http.request('assets/js/china_address.json').map( res => res.json() );
  }

}
