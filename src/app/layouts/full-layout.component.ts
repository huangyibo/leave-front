import {Component, OnInit} from "@angular/core";
import {MessageService} from "../shared/services/message.service";
// import {MessageNotification} from "../shared/models/message-notification.model";
import {User} from "../shared/models/user.model";
import {LoggerService} from "../shared/services/logger.service";
import {ToasterConfig, ToasterService} from "angular2-toaster";
import {LocaleTranslateService} from "../shared/services/translate.service";
import {UserService} from "../shared/services/user.service";
import {TranslateService} from "ng2-translate";
import {Router} from "@angular/router";
import {LinkConf} from "../shared/conf/LinkConf";
import {JwtService} from "../shared/services/jwt.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.css'],
  providers: [
    MessageService
  ]
})
export class FullLayoutComponent implements OnInit {
  title = 'app works!';
  toasterConfig: ToasterConfig;
  logger: LoggerService;
  mylinks: Array<any> = [];
  translate: TranslateService;

  currentUser: User;
  isAuthenticated: boolean;

  constructor(
              private router: Router,
              private userService: UserService,
              private msgService: MessageService,
              private jwtService: JwtService,
              private toasterService: ToasterService,
              private localeTranslate: LocaleTranslateService) {
    this.toasterConfig = new ToasterConfig({
      newestOnTop: true,
      showCloseButton: true,
      tapToDismiss: false
    });
    this.translate = localeTranslate.getTranslate();
    this.logger = new LoggerService(localeTranslate);
  }

  ngOnInit(): void {

    this.userService.isAuthenticated.subscribe(
      (authenticated) => {
        this.isAuthenticated = authenticated;
        if(this.isAuthenticated){
          this.userService.currentUser.subscribe(
            (user) => {
              this.currentUser = user;
              console.log(user.real_name);
              this.setMyLinks(this.currentUser.category);
              // this.setHomeTo(this.isAuthenticated);
            }
          );
        }else{
          this.setAuthLoginTo();
        }
      }
    );



    /*// defining some test users
    let user1 = new User({
      header_img: 'public/assets/img/user1-128x128.jpg',
      email: 'bobo.huang@intel.com',
      real_name: '奕云天',
      token: 'fdagdsaafdsafdewtrq123'
    });

    let user2 = new User({
      header_img: 'public/assets/img/user2-160x160.jpg',
      email: 'bobo.huang@intel.com',
      real_name: '奕云天'
    });*/
    //sending a test message
    /*this.msgService.addMessage(new MessageNotification({
      author: user2,
      content: 'Hello World',
      destination: user1,
      title: 'Hello World'
    }));*/
  }

  setHomeTo(isAuth: boolean){
    // If user is not authenticated, redirect to login
    if (!isAuth){
      this.router.navigateByUrl('/auth/login');
    }
  }

  setAuthLoginTo(){
    this.router.navigateByUrl('/auth/login')
  }

  // define here your own links menu structure
  setMyLinks(category: string){
    this.mylinks = LinkConf.links[category];
  }

}
