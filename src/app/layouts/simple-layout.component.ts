import {Component, OnInit} from "@angular/core";
import {UserService} from "../shared/services/user.service";
@Component({
  selector: 'app-simple-layout',
  templateUrl: './simple-layout.component.html'
})
export class SimpleLayoutComponent implements OnInit {

  constructor(private userService: UserService){

  }

  ngOnInit(): void {
    // this.userService.populate();
  }

}
