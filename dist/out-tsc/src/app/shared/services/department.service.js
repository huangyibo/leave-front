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
import { ApiService } from "./api.serivce";
export var DepartmentService = (function () {
    function DepartmentService(apiService) {
        this.apiService = apiService;
    }
    DepartmentService.prototype.get = function (departmentId) {
        return this.apiService.get('/department/' + departmentId)
            .map(function (data) {
            return data.department;
        });
    };
    DepartmentService.prototype.delete = function (departmentId) {
        return this.apiService.delete('/department/' + departmentId);
    };
    DepartmentService.prototype.save = function (department) {
        // If department id is existed, we update department
        if (department.id) {
            return this.apiService
                .put('/department/' + department.id, department)
                .map(function (data) {
                return data.department;
            });
        }
        else {
            return this.apiService
                .post('/department', department)
                .map(function (data) {
                return data.department;
            });
        }
    };
    DepartmentService.prototype.list = function () {
        return this.apiService
            .get('/department/')
            .map(function (data) {
            return data.departments;
        });
    };
    DepartmentService.prototype.count = function () {
        return this.apiService
            .get('/department/count')
            .map(function (data) {
            return data.value;
        });
    };
    DepartmentService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [ApiService])
    ], DepartmentService);
    return DepartmentService;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/shared/services/department.service.js.map