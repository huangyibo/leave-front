import {Component, OnInit} from "@angular/core";
import {Errors} from "../shared/models/errors.model";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../shared/services/user.service";
import {User} from "../shared/models/user.model";
@Component({
  selector: 'auth-page',
  templateUrl: "./auth.component.html",
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authType: String = '';
  isLoginUrl: boolean = null;
  title: String = '';
  buttonName: String = '';
  errors: Errors = new Errors();
  isSubmitting: boolean = false;
  // authForm: FormGroup;
  user: User = new User();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit(): void {


    this.route.url.subscribe(data => {
      // Get the last piece of the URL (it's either 'login' or 'register')
      this.authType = data[data.length - 1].path;
      // Set a tile for the page accordingly
      this.title = (this.authType === 'login') ? "用户登录" : "用户注册";
      this.buttonName = (this.authType === 'login') ? "登录" : "注册";
      this.isLoginUrl = (this.authType === 'login');

    });
  }

  submitForm() {
    this.isSubmitting = true;
    this.errors = new Errors();
    if (this.isLoginUrl) {
      this.userService
        .attemptAuth(this.authType, this.user)
        .subscribe(
          data => this.router.navigateByUrl('/'),
          err => {
            console.log(err.message);
            this.errors.errors['error'] = err.message;
            this.isSubmitting = false;
          }
        );
    }
    else {
      this.userService
        .save(this.user)
        .subscribe(
          data => this.router.navigateByUrl('/login'),
          err => {
            this.errors.errors['error'] = err.message;
            this.isSubmitting = false;
          }
        );
    }


  }

}
