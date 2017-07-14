import {DateFormatter} from "@angular/common/src/pipes/intl";
import DateTimeFormat = Intl.DateTimeFormat;
export class DateUtils{
  public static formatDate(value: any): string{
    if(value){
      let date = value instanceof Date ? value : new Date();
      return DateFormatter.format(date, 'pt', 'yyyy-MM-dd');
    }
  }

  public static formatDateTime(value: any): string{
    if(value){
      let date = value instanceof Date ? value : new Date();
      return DateFormatter.format(date, 'pt', 'yyyy-MM-dd HH:mm:ss');
    }
  }

}
