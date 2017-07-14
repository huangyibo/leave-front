export var Page = (function () {
    function Page() {
        this.page_size = 10; // 每页多少条数据
        this.current_page = 1; // 当前页
        this.has_next_page = false; // 当前页是否有下一页
        this.has_pre_page = false; // 当前页是否有上一页
    }
    Page.generateUrlOptions = function (page_no, limit) {
        if (page_no === null || page_no <= 0) {
            page_no = 1;
        }
        if (limit === null || page_no <= 0) {
            limit = 10;
        }
        var options = "?page_no=" + page_no + "&limit=" + limit;
        return options;
    };
    Page.generateUrlOptionWithCategory = function (category, page_no, limit) {
        var isExistedCategory = false;
        if (category) {
            Page.ReviewCategory.forEach(function (value, index) {
                if (category.toUpperCase() === value) {
                    isExistedCategory = true;
                }
            });
        }
        var options = isExistedCategory ? (Page.generateUrlOptions(page_no, limit) + '&category=' + category) : Page.generateUrlOptions(page_no, limit);
        return options;
    };
    Page.ReviewCategory = ['ALL', 'OFFICER', 'LEADER'];
    return Page;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/shared/models/page.model.js.map