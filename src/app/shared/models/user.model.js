"use strict";
var User = (function () {
    function User(data) {
        if (data === void 0) { data = {}; }
        this.id = data.id || null;
        this.officer_id = data.officer_id || null;
        this.user_name = data.user_name || null;
        this.real_name = data.real_name || null;
        this.rank = data.rank || null;
        this.major = data.major || null;
        this.mobil_phone = data.mobil_phone || null;
        this.telephone = data.telephone || null;
        this.department_id = data.depoartment_id || null;
        this.department_name = data.department_name || null;
        this.address = data.address || null;
        this.category = data.category || null;
        this.email = data.email || null;
        this.password = data.password || null;
        this.direct_leader_id = data.direct_leader_id || null;
        this.direct_leader_name = data.direct_leader_name || null;
        this.unit = data.unit || null;
        this.create_time = data.create_time || null;
        this.update_time = data.update_time || null;
        this.role_id = data.role_id || null;
        this.role_name = data.role_name || null;
        this.token = data.token || null;
        this.preferred_lang = data.preferred_lang || null;
        this.header_img = data.header_img || null;
    }
    return User;
}());
exports.User = User;
