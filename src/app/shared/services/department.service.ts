import {Injectable} from "@angular/core";
import {ApiService} from "./api.serivce";
import {Observable} from "rxjs";
import {Department} from "../models/department.model";
import {Message} from "../models/message.model";

@Injectable()
export class DepartmentService {
  constructor(private apiService: ApiService) {
  }

  get(departmentId): Observable<Department> {
    return this.apiService.get('/department/' + departmentId)
      .map(data => {
        return data.department;
      });
  }

  delete(departmentId) {
    return this.apiService.delete('/department/' + departmentId);
  }

  save(department: Department): Observable<Department> {
    // If department id is existed, we update department
    if (department.id) {
      return this.apiService
        .put('/department/' + department.id, department)
        .map(data => {
          return data.department;
        });
    } else { // otherwise, create new department.
      return this.apiService
        .post('/department', department)
        .map(data => {
          return data.department;
        });
    }
  }

  list(): Observable<[Department]>{
    return this.apiService
      .get('/department/')
      .map(data => {
        return data.departments;
      });
  }

  count(): Observable<number> {
    return this.apiService
      .get('/department/count')
      .map(data => {
        return data.value;
      });
  }

}
