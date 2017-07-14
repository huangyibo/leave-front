import { Observable } from "rxjs";
export var UserType = (function () {
    function UserType() {
        this.value = null;
        this.value = null;
        this.name = '全部';
    }
    UserType.listUserType = function () {
        return Observable.of([
            {
                value: "ALL",
                name: '全部'
            },
            {
                value: 'LEADER',
                name: '科室领导'
            },
            {
                value: 'OFFICER',
                name: '学员'
            }
        ]).map(function (data) { return data; });
    };
    return UserType;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/shared/models/user-type.model.js.map