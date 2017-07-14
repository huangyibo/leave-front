import {Input, Component, Output, OnInit} from "@angular/core";
import {Error} from "./models/error.model";
import {Errors} from "./models/errors.model";

@Component({
  selector: 'list-errors',
  templateUrl: './list-errors.component.html',
  styleUrls: ['./list-errors.component.css']
})
export class ListErrorsComponent{

  formattedErrors: Array<string> = [];

  @Input()
  set errors(errorList: Errors) {
    this.formattedErrors = [];
    console.info(errorList.errors["error"]);
    if (errorList.errors) {
      for (let field in errorList.errors) {
        console.info("ListErrors: " + field + "=>" + errorList.errors[field]);
        this.formattedErrors.push(`${errorList.errors[field]}`);
      }
    }
  };

  @Output()
  get errorList() {
    if(this.formattedErrors  && this.formattedErrors.length > 0)
      return this.formattedErrors;
  }

}
