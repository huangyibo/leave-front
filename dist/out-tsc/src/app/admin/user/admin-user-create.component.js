var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BreadcrumbService } from "../../shared/services/breadcrumb.service";
import { Component } from "@angular/core";
import { User } from "../../shared/models/user.model";
import { Errors } from "../../shared/models/errors.model";
import { Page } from "../../shared/models/page.model";
import { ToasterService, ToasterConfig } from "angular2-toaster";
import { UserService } from "../../shared/services/user.service";
export var AdminUserCreateComponent = (function () {
    function AdminUserCreateComponent(breadcrumbService, userService, toasterService) {
        this.breadcrumbService = breadcrumbService;
        this.userService = userService;
        this.errors = new Errors();
        this.isLoading = false;
        this.submitingUser = new User();
        this.editingUser = new User();
        this.editingUserIndex = 0;
        this.isSubmiting = false;
        this.currentUser = new User();
        this.page = new Page();
        this.currentPage = 1;
        this.rowCount = 0;
        this.toasterconfig = new ToasterConfig({
            showCloseButton: true,
            tapToDismiss: false,
            timeout: 3000
        });
        this.toasterService = toasterService;
    }
    AdminUserCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        // settings the header for about
        this.breadcrumbService.set({
            header: '用户管理',
            display: true,
            levels: [
                {
                    icon: 'dashboard',
                    link: ['/'],
                    title: '主页'
                },
                {
                    icon: 'clock-o',
                    link: ['/admin/user/create'],
                    title: '用户管理'
                }
            ]
        });
        this.userService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
        this.page = new Page();
        this.page.current_page = 1;
        this.page.has_pre_page = false;
        this.page.has_next_page = false;
        this.getPage(1);
    };
    AdminUserCreateComponent.prototype.ngOnDestroy = function () {
        this.breadcrumbService.clear();
    };
    AdminUserCreateComponent.prototype.editLeave = function (leaveId) {
        var _this = this;
        this.users.subscribe(function (data) {
            if (data) {
                data.forEach(function (value, index) {
                    if (value.id === leaveId) {
                        _this.editingUser = value;
                        _this.editingUserIndex = index;
                        return;
                    }
                });
            }
        });
    };
    AdminUserCreateComponent.prototype.updateLeave = function () {
        var _this = this;
        this.isSubmiting = true;
        this.submitingUser = User.filterRepeat(this.editingUser, this.submitingUser);
        this.userService.save(this.submitingUser).subscribe(function (user) {
            _this.users = _this.users.map(function (data) {
                _this.submitingUser = data[_this.editingUserIndex];
                data[_this.editingUserIndex] = user;
                return data;
            });
            _this.isSubmiting = false;
            $('#user-create').modal('hide');
            _this.popToast('success', null, '用户信息更新成功');
        }, function (err) {
            _this.isSubmiting = false;
            _this.popToast('error', null, err.message);
        });
    };
    AdminUserCreateComponent.prototype.getPage = function (page_no) {
        var _this = this;
        this.isLoading = true;
        this.users = this.userService.list(page_no, 10)
            .do(function (data) {
            if (data != null) {
                _this.page = data;
                _this.currentPage = (data.current_page == null) ? 1 : data.current_page;
                _this.rowCount = (data.row_count == null) ? 1 : data.row_count;
            }
            else {
                _this.currentPage = 1;
                _this.rowCount = 0;
            }
        })
            .map(function (data) {
            if (data) {
                return data.list;
            }
            else {
                return [];
            }
        });
    };
    AdminUserCreateComponent.prototype.revokeLeave = function (userId) {
        var _this = this;
        this.userService.delete(userId).subscribe(function (data) {
            _this.getPage(_this.page.current_page);
            _this.popToast('success', null, '用户信息删除成功');
        }, function (err) {
            _this.popToast('error', null, (err.message == null) ? '网络不稳定，用户信息删除失败' : err.message);
        });
    };
    AdminUserCreateComponent.prototype.popToast = function (type, title, body) {
        var toast = {
            type: type,
            title: title,
            body: body
        };
        this.toasterService.pop(toast);
    };
    AdminUserCreateComponent = __decorate([
        Component({
            selector: 'admin-user-create',
            templateUrl: './admin-user-create.component.html',
            styleUrls: ['./admin-user-create.component.css']
        }), 
        __metadata('design:paramtypes', [BreadcrumbService, UserService, ToasterService])
    ], AdminUserCreateComponent);
    return AdminUserCreateComponent;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/admin/user/admin-user-create.component.js.map