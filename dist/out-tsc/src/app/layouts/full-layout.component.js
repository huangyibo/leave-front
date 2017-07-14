var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { MessageService } from "../shared/services/message.service";
import { LoggerService } from "../shared/services/logger.service";
import { ToasterConfig, ToasterService } from "angular2-toaster";
import { LocaleTranslateService } from "../shared/services/translate.service";
import { UserService } from "../shared/services/user.service";
import { Router } from "@angular/router";
import { LinkConf } from "../shared/conf/LinkConf";
import { JwtService } from "../shared/services/jwt.service";
export var FullLayoutComponent = (function () {
    function FullLayoutComponent(router, userService, msgService, jwtService, toasterService, localeTranslate) {
        this.router = router;
        this.userService = userService;
        this.msgService = msgService;
        this.jwtService = jwtService;
        this.toasterService = toasterService;
        this.localeTranslate = localeTranslate;
        this.title = 'app works!';
        this.mylinks = [];
        this.toasterConfig = new ToasterConfig({
            newestOnTop: true,
            showCloseButton: true,
            tapToDismiss: false
        });
        this.translate = localeTranslate.getTranslate();
        this.logger = new LoggerService(localeTranslate);
    }
    FullLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.isAuthenticated.subscribe(function (authenticated) {
            _this.isAuthenticated = authenticated;
            if (_this.isAuthenticated) {
                _this.userService.currentUser.subscribe(function (user) {
                    _this.currentUser = user;
                    console.log(user.real_name);
                    _this.setMyLinks(_this.currentUser.category);
                    // this.setHomeTo(this.isAuthenticated);
                });
            }
            else {
                _this.setAuthLoginTo();
            }
        });
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
    };
    FullLayoutComponent.prototype.setHomeTo = function (isAuth) {
        // If user is not authenticated, redirect to login
        if (!isAuth) {
            this.router.navigateByUrl('/auth/login');
        }
    };
    FullLayoutComponent.prototype.setAuthLoginTo = function () {
        this.router.navigateByUrl('/auth/login');
    };
    // define here your own links menu structure
    FullLayoutComponent.prototype.setMyLinks = function (category) {
        this.mylinks = LinkConf.links[category];
    };
    FullLayoutComponent = __decorate([
        Component({
            selector: 'app-dashboard',
            templateUrl: './full-layout.component.html',
            styleUrls: ['./full-layout.component.css'],
            providers: [
                MessageService
            ]
        }), 
        __metadata('design:paramtypes', [Router, UserService, MessageService, JwtService, ToasterService, LocaleTranslateService])
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/layouts/full-layout.component.js.map