import {Observable} from "rxjs";
export class UserType{
  value: string = null;
  name: string;

  constructor(){
    this.value = null;
    this.name = '全部';
  }

  public static listUserType(): Observable<[UserType]>{
    return Observable.of([
      {
        value: "ALL",
        name: '全部'
      },
      {
        value: 'LEADER',
        name: '科室领导'
      },
      {
        value: 'OFFICER',
        name: '学员'
      }
    ]).map(data=> data);
  }

}
