var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { TranslateService } from 'ng2-translate';
import { UserService } from "./user.service";
var langs = ['zh', 'en', 'fr', 'ru', 'he'];
var langmatch = /zh|en|fr|ru|he/;
export var LocaleTranslateService = (function () {
    function LocaleTranslateService(userService, translate) {
        var _this = this;
        this.userService = userService;
        this.translate = translate;
        this.lang = 'zh';
        translate.addLangs(langs);
        // this language will be used as a Default when a translation is not found in the current language
        translate.setDefaultLang('zh');
        this.userService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
            // the lang to use, if the lang is not available, it will use the current loader to get them\
            var browserLang = _this.translate.getBrowserLang();
            var browserCultureLang = _this.translate.getBrowserCultureLang();
            console.log('Detected browser language: "' + browserCultureLang + '"');
            // check if current User has a Preferred Language set, and it differs from his browser lang
            var useLang = 'zh';
            var prefLang = (_this.currentUser) ? _this.currentUser.preferred_lang : null;
            if (!prefLang) {
                useLang = browserLang.match(langmatch) ? browserLang : 'zh';
            }
            else {
                console.log('Detected User preferred language: "' + prefLang + '"');
                useLang = prefLang.match(langmatch) ? prefLang : 'zh';
            }
            _this.translate.use(useLang);
            console.log('Translation language has been set to: "' + useLang + '"');
        });
    }
    LocaleTranslateService.prototype.ngOnInit = function () {
    };
    LocaleTranslateService.prototype.getTranslate = function () {
        return this.translate;
    };
    LocaleTranslateService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [UserService, TranslateService])
    ], LocaleTranslateService);
    return LocaleTranslateService;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/shared/services/translate.service.js.map