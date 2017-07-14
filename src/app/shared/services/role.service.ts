import {Injectable} from "@angular/core";
import {ApiService} from "./api.serivce";
import {Observable} from "rxjs";
import {Role} from "../models/role.model";

@Injectable()
export class RoleService {
  // private baseUrl = '/role';

  constructor(
    private apiService: ApiService
  ){ }

  get(roleId): Observable<Role> {
      return this.apiService
        .get('/role/' + roleId)
        .map(data => {
          return data.role;
        });
  }

  delete(roleId){
      return this.apiService
        .delete('/role/' + roleId);
  }

  save(role: Role): Observable<Role>{
    // If role id is existed, update role
    if (role.id){
      return this.apiService
        .put('/role/' + role.id, role)
        .map(data => {
          return data.role;
        });
    } else { // otherwise, create new role
      return this.apiService
        .post('/role', role )
        .map(data => {
          return data.role;
        });
    }
  }

  list(): Observable<[Role]> {
    return this.apiService
      .get('/role/')
      .map(data => {
        return data.roles;
      });
  }

  count(): Observable<number> {
    return this.apiService
      .get('/role/count')
      .map(data => {
        return data.value;
      })
  }

}
