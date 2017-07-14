import {Injectable} from "@angular/core";
import {BehaviorSubject, ReplaySubject, Observable} from "rxjs";
import {ApiService} from "./api.serivce";
import {Http} from "@angular/http";
import {Admin} from "../models/admin.model";
import {AdminJwtService} from "./admin-jwt.service";

@Injectable()
export class AdminService {
  private currentAdminSubject = new BehaviorSubject<Admin>(new Admin());
  public currentAdmin = this.currentAdminSubject.asObservable().distinctUntilChanged();

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(private apiService: ApiService,
              private http: Http,
              private adminJwtService: AdminJwtService) {
  }

  // Verify JWT in local storage with server & load user's info.
  // This runs once on application startup.
  populate() {
    // If JWT detected, attempt to get & store user's info
    if (this.adminJwtService.getToken()) {
      this.apiService.get('/token/admin')
        .subscribe(
          data => this.setAuth(data.admin),
          err => this.purgeAuth()
        );
    } else {
      // Remove any potential remnants of previous auth states
      this.purgeAuth();
    }
  }

  setAuth(admin: Admin) {
    // Save JWT sent from server in local storage
    this.adminJwtService.saveToken(admin.token);
    // Set current admin data into observable
    this.currentAdminSubject.next(admin);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    // Remove JWT from local storage
    this.adminJwtService.destroyToken();
    // Set current admin to an empty object
    this.currentAdminSubject.next(new Admin());
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
  }

  attemptAuth(type, admin:Admin): Observable<Admin> {
    let route = (type === 'login') ? '/login' : '';
    return this.apiService.post('/token/admin' + route, admin)
      .map(
        data => {
          this.setAuth(data.admin);
          return data.admin;
        }
      );
  }

  // Get current logined admin
  getCurrentAdmin(): Admin {
    return this.currentAdminSubject.getValue();
  }

  // Update the admin on the server (level, email, etc)
  update(admin: Admin): Observable<Admin>{
    let adminId = this.getCurrentAdmin().id;
    return this.apiService
      .put('/admin/' + adminId, admin)
      .map(data => {
        // Update the current Admin observable
        this.currentAdminSubject.next(data.admin);
        return data.admin;
      });
  }

  // save the admin on the server
  save(admin: Admin): Observable<Admin> {
    this.invalidate();
    if (admin.id){
      return this.apiService
        .put('/admin/' + admin.id, admin)
        .map(data => {
          return data.admin;
        });
    } else {
      return this.apiService
        .post('/admin', admin)
        .map(data => {
          return data.admin;
        });
    }
  }

  // Delete an admin on the server.
  delete(adminId: number): Observable<any> {
    this.invalidate();
    return this.apiService.delete('/admin/' + adminId).map(
      data => {
        // return response message
        return data;
      }
    );
  }

  // Logout the current admin on the server.
  logout() {
    return this.apiService.get('/token/admin/logout');
  }

  private invalidate(){
    let currentAdmin = this.getCurrentAdmin();
    if (currentAdmin.level === 'two'){
      return Observable.throw(new Error('该管理员权限不满足!'));
    }
  }
}
