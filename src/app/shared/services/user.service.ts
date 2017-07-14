import { Injectable } from "@angular/core";
import {BehaviorSubject, ReplaySubject, Observable} from "rxjs";
import { User } from "../models/user.model";
import { ApiService } from "./api.serivce";
import { Http } from "@angular/http";
import { JwtService } from "./jwt.service";
import {UserFilter} from "../models/user-filter.model";
import {Page} from "../models/page.model";

@Injectable()
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>(new User());
  public currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(private apiService: ApiService,
              private http: Http,
              private jwtService: JwtService) {
  }

  // Verify JWT in local storage with server & load user's info.
  // This runs once on application startup.
  populate() {
    // If JWT detected, attempt to get & store user's info
    if (this.jwtService.getToken()){
      this.apiService.get('/token/user')
        .subscribe(
          data => this.setAuth(data.user),
          err => this.purgeAuth()
        );
    } else {
      // Remove any potential remnants of previous auth states
      this.purgeAuth();
    }

  }

  setAuth(user: User) {
    // set default header img
    user.header_img = "public/assets/img/user1-128x128.jpg";
    // Save JWT sent from server in local storage
    this.jwtService.saveToken(user.token);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
    // Set current user data into observable
    this.currentUserSubject.next(user);
  }

  purgeAuth() {
    // Remove JWT from local storage
    this.jwtService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject.next(new User());
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
  }

  attemptAuth(type, user: User): Observable<User> {
    let route = (type === 'login') ? '/login' : '';
    return this.apiService.post('/token/user' + route, user)
      .map(
        data => {
          this.setAuth(data.user);
          return data.user;
        }
      );
  }

  // Get Current Logined User
  getCurrentUser(): User {
    return this.currentUserSubject.getValue();
  }

  // Update the user on the server (real_name, password, email, etc)
  update(user: User): Observable<User> {
    let userId = this.getCurrentUser().id;
    return this.apiService
      .put('/user/' + userId, user)
      .map(data => {
        // Update the currentUser observable
        this.currentUserSubject.next(data.user);
        return data.user;
      })
  }

  // Create the user on the server
  save(user: User): Observable<User> {
    if (user.id){
      return this.update(user);
    } else {
      return this.apiService
        .post('/user', user)
        .map(data => {
          // Update the currentUser observable
          this.currentUserSubject.next(data.user);
          return data.user;
        })
    }
  }

  list(page_no: number, limit: number, userFilter?: UserFilter): Observable<Page<User>>{
    let options = Page.generateUrlOptions(page_no, limit);
    return this.apiService
      .post('/user/list'+options, userFilter)
      .map(data => {
        return data;
      });
  }

  // Delete an user on the server by ID
  delete(userId: number): Observable<any> {
    return this.apiService
      .delete('/user/' + userId)
      .map(data => {
        // return response message
        return data;
      });
  }

  // Logout current user
  logout() {
    this.apiService
      .get('/token/user/logout');

  }

}
