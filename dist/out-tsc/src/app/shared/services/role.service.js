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
export var RoleService = (function () {
    // private baseUrl = '/role';
    function RoleService(apiService) {
        this.apiService = apiService;
    }
    RoleService.prototype.get = function (roleId) {
        return this.apiService
            .get('/role/' + roleId)
            .map(function (data) {
            return data.role;
        });
    };
    RoleService.prototype.delete = function (roleId) {
        return this.apiService
            .delete('/role/' + roleId);
    };
    RoleService.prototype.save = function (role) {
        // If role id is existed, update role
        if (role.id) {
            return this.apiService
                .put('/role/' + role.id, role)
                .map(function (data) {
                return data.role;
            });
        }
        else {
            return this.apiService
                .post('/role', role)
                .map(function (data) {
                return data.role;
            });
        }
    };
    RoleService.prototype.list = function () {
        return this.apiService
            .get('/role/')
            .map(function (data) {
            return data.roles;
        });
    };
    RoleService.prototype.count = function () {
        return this.apiService
            .get('/role/count')
            .map(function (data) {
            return data.value;
        });
    };
    RoleService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [ApiService])
    ], RoleService);
    return RoleService;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/shared/services/role.service.js.map