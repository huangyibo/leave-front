import {Injectable} from "@angular/core";
import {LocaleTranslateService} from "./translate.service";
import {environment} from "../../../environments/environment";
@Injectable()
export class LoggerService {

  constructor(private translate: LocaleTranslateService) {
    // TODO
  }

  public log( component: string, msg?: string, il8nRef?: string, data?: string[]) {
    if (!environment.silent){
      if (il8nRef) {
        let params: {} = {};
        if (data) {
          params = (data[0]) ? { 0: data[0]} : params;
          params = ( data[1] ) ? { 0: data[0], 1: data[1] } : params;
          params = ( data[2] ) ? { 0: data[0], 1: data[1], 2: data[2] } : params;
        }
        this.translate.getTranslate().get(il8nRef, params).subscribe(( res: string) => {
          console.log( component + ': ' + res)
        });
      } else {
        console.log( component + ': ' + msg);
      }
    }
  }

}
