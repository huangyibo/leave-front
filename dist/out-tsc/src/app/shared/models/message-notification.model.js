export var MessageNotification = (function () {
    function MessageNotification(data) {
        if (data === void 0) { data = {}; }
        this.content = data.content || '';
        this.title = data.title || '';
        this.type = data.type || '';
        this.author = data.author || null;
        this.destination = data.destination || null;
        this.date = data.date || Date.now();
    }
    return MessageNotification;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/shared/models/message-notification.model.js.map