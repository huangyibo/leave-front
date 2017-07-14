import {Injectable} from "@angular/core";
import {ApiService} from "./api.serivce";
import {Observable} from "rxjs";
import {LeaveRequest} from "../models/leave-request.model";
import {LeaveRequestFilter} from "../models/leave-request-filter.model";
import {Page} from "../models/page.model";

@Injectable()
export class LeaveRequestService {
  constructor(private apiService: ApiService) {
  }

  get(leaveRequestId): Observable<LeaveRequest> {
    return this.apiService
      .get('/leave-request/' + leaveRequestId)
      .map(data => {
        return data.leave_request;
      });
  }

  delete(leaveRequestId){
    return this.apiService
      .delete('/leave-request' + leaveRequestId);
  }

  save(leaveRequest: LeaveRequest): Observable<LeaveRequest>{
    if (leaveRequest.id){
      return this.apiService
        .put('/leave-request/' + leaveRequest.id, leaveRequest)
        .map(data => {
          return data.leave_request;
        });
    } else {
      return this.apiService
        .post('/leave-request', leaveRequest)
        .map(data => {
          return data.leave_request;
        });
    }
  }

  list(): Observable<[LeaveRequest]>{
    return this.apiService
      .get('/leave-request/')
      .map(data => {
        return data.leave_requests;
      });
  }

  count(): Observable<number> {
    return this.apiService
      .get('/leave-request/count')
      .map(data => {
        return data.value;
      });
  }

  reportLeaveRequests(page_no: number, limit: number, leaveRequestFilter?: LeaveRequestFilter): Observable<Page<LeaveRequest>> {
    let options = Page.generateUrlOptions(page_no, limit);
    if(leaveRequestFilter==null || leaveRequestFilter.category ==null){
      leaveRequestFilter = new LeaveRequestFilter();
      leaveRequestFilter.category = "ALL";
    }
    return this.apiService
      .post('/leave-request/report'+options, leaveRequestFilter)
      .map(data => {
        return data;
      });
  }

  resumeLeaveRequests(page_no: number, limit: number, category?: string): Observable<Page<LeaveRequest>> {
    let options = Page.generateUrlOptionWithCategory(category, page_no, limit);
    return this.apiService
      .get("/leave-request/resume"+options)
      .map(data => {
        return data;
      });
  }

  reviewLeaveRequests(page_no: number, limit: number, category?: string): Observable<Page<LeaveRequest>> {
    let options = Page.generateUrlOptionWithCategory(category, page_no, limit);
    return this.apiService
      .get("/leave-request/review"+options)
      .map(data => {
        return data;
      });
  }

  signLeaveRequests(page_no: number, limit: number): Observable<Page<LeaveRequest>> {
    let options = Page.generateUrlOptions(page_no, limit);
    return this.apiService
      .get("/leave-request/sign"+options)
      .map(data => {
        return data;
      });
  }

  signLeaveRequestByID(leave_request_id: number): Observable<String>{
    return this.apiService
      .put("/leave-request/"+leave_request_id+"/sign")
      .map(data => {
        return data;
      });
  }

  historyLeaveRequests(page_no: number, limit: number): Observable<Page<LeaveRequest>> {
    let options = Page.generateUrlOptions(page_no, limit);
    return this.apiService
      .get("/leave-request/history"+options)
      .map(data => {
        return data;
      });
  }

  currentLeaveRequests(page_no: number, limit: number): Observable<Page<LeaveRequest>> {
    let options = Page.generateUrlOptions(page_no, limit);
    return this.apiService
      .get("/leave-request/current"+options)
      .map(data => {
        return data;
      });
  }

}
