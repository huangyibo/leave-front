import {OnInit, Injectable} from "@angular/core";
import {TranslateService} from 'ng2-translate';
import {UserService} from "./user.service";
import {User} from "../models/user.model";

const langs = ['zh', 'en', 'fr', 'ru', 'he'];
const langmatch = /zh|en|fr|ru|he/;

@Injectable()
export class LocaleTranslateService implements OnInit {
  private lang: string = 'zh';
  private currentUser: User;

  constructor(private userService: UserService,
              private translate: TranslateService) {
    translate.addLangs( langs );
    // this language will be used as a Default when a translation is not found in the current language
    translate.setDefaultLang('zh');

    this.userService.currentUser.subscribe((user: User) => {
      this.currentUser = user;

      // the lang to use, if the lang is not available, it will use the current loader to get them\
      let browserLang = this.translate.getBrowserLang();
      let browserCultureLang = this.translate.getBrowserCultureLang();
      console.log('Detected browser language: "' + browserCultureLang + '"');

      // check if current User has a Preferred Language set, and it differs from his browser lang
      let useLang = 'zh';
      let prefLang = (this.currentUser) ? this.currentUser.preferred_lang : null;
      if (!prefLang) {
        useLang = browserLang.match(langmatch) ? browserLang : 'zh';
      } else {
        console.log('Detected User preferred language: "' + prefLang + '"');
        useLang = prefLang.match(langmatch) ? prefLang : 'zh';
      }
      this.translate.use(useLang);
      console.log('Translation language has been set to: "' + useLang + '"');

    });

  }

  ngOnInit(): void {
  }

  public getTranslate(): TranslateService {
    return this.translate;
  }

}
