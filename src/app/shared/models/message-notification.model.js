"use strict";
var MessageNotification = (function () {
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
exports.MessageNotification = MessageNotification;
