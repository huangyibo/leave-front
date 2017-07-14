import { DateFormatter } from "@angular/common/src/pipes/intl";
export var DateUtils = (function () {
    function DateUtils() {
    }
    DateUtils.formatDate = function (value) {
        if (value) {
            var date = value instanceof Date ? value : new Date();
            return DateFormatter.format(date, 'pt', 'yyyy-MM-dd');
        }
    };
    DateUtils.formatDateTime = function (value) {
        if (value) {
            var date = value instanceof Date ? value : new Date();
            return DateFormatter.format(date, 'pt', 'yyyy-MM-dd HH:mm:ss');
        }
    };
    return DateUtils;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/shared/utils/date.utils.js.map