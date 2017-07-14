"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var message_service_1 = require("../shared/services/message.service");
var message_notification_model_1 = require("../shared/models/message-notification.model");
var user_model_1 = require("../shared/models/user.model");
var logger_service_1 = require("../shared/services/logger.service");
var angular2_toaster_1 = require("angular2-toaster");
var FullLayoutComponent = (function () {
    function FullLayoutComponent(userService, msgService, toasterService, localeTranslate) {
        this.userService = userService;
        this.msgService = msgService;
        this.toasterService = toasterService;
        this.localeTranslate = localeTranslate;
        this.title = 'app works!';
        this.mylinks = [];
        this.toasterConfig = new angular2_toaster_1.ToasterConfig({
            newestOnTop: true,
            showCloseButton: true,
            tapToDismiss: false
        });
        this.translate = localeTranslate.getTranslate();
        this.logger = new logger_service_1.LoggerService(localeTranslate);
    }
    FullLayoutComponent.prototype.ngOnInit = function () {
        this.userService.populate();
        var ie = this.detectIE();
        if (!ie) {
            window.dispatchEvent(new Event('resize'));
        }
        else {
            // solution for IE
            var event_1 = document.createEvent('Event');
            event_1.initEvent('resize', false, true);
            window.dispatchEvent(event_1);
        }
        // defining some test users
        var user1 = new user_model_1.User({
            header_img: 'public/assets/img/user1-128x128.jpg',
            email: 'bobo.huang@intel.com',
            real_name: '奕云天',
            token: 'fdagdsaafdsafdewtrq123'
        });
        var user2 = new user_model_1.User({
            header_img: 'public/assets/img/user2-160x160.jpg',
            email: 'bobo.huang@intel.com',
            real_name: '奕云天'
        });
        // define here your own links menu structure
        this.mylinks = [
            {
                'title': 'Home',
                'icon': 'dashboard',
                'link': ['/'],
                'external': false
            },
            {
                'title': 'About',
                'icon': 'inbox',
                'link': ['/about'],
                'external': false
            },
            {
                'title': '申请请假',
                'icon': 'inbox',
                'link': ['/pages/leave-request'],
                'external': false
            },
            {
                'title': 'Sub menu',
                'icon': 'link',
                'sublinks': [
                    {
                        'title': 'Page 2',
                        'link': ['/page/2'],
                        'external': false
                    },
                    {
                        'title': 'Page 3',
                        'link': ['/page/3'],
                        'external': false
                    }
                ]
            }
        ];
        //sending a test message
        this.msgService.addMessage(new message_notification_model_1.MessageNotification({
            author: user2,
            content: 'Hello World',
            destination: user1,
            title: 'Hello World'
        }));
        this.userService.setAuth(user1);
    };
    FullLayoutComponent.prototype.detectIE = function () {
        var ua = window.navigator.userAgent;
        /*Test values; Uncomment to check result …
         IE 10
         ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
         IE 11
         ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
         IE 12 / Spartan
         ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
         Edge (IE 12+)
         ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)
         Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';*/
        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }
        // other browser
        return false;
    };
    FullLayoutComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './full-layout.component.html',
            providers: [
                message_service_1.MessageService
            ]
        })
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());
exports.FullLayoutComponent = FullLayoutComponent;
