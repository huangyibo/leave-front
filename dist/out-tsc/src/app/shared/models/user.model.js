export var User = (function () {
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
        this.role = data.role || 'USER';
        this.token = data.token || null;
        this.preferred_lang = data.preferred_lang || null;
        this.header_img = data.header_img || null;
    }
    User.filterRepeat = function (source, dest) {
        source.id = dest.id;
        if (source.officer_id === dest.officer_id) {
            source.officer_id = null;
        }
        else {
            source.officer_id = dest.officer_id;
        }
        if (source.user_name === dest.user_name) {
            source.user_name = null;
        }
        else {
            source.user_name = dest.user_name;
        }
        if (source.real_name === dest.real_name) {
            source.real_name = null;
        }
        else {
            source.real_name = dest.real_name;
        }
        if (source.rank === dest.rank) {
            source.rank = null;
        }
        else {
            source.rank = dest.rank;
        }
        if (source.major === dest.major) {
            source.major = null;
        }
        else {
            source.major = dest.major;
        }
        if (source.mobil_phone === dest.mobil_phone) {
            source.mobil_phone = null;
        }
        else {
            source.mobil_phone = dest.mobil_phone;
        }
        if (source.telephone === dest.telephone) {
            source.telephone = null;
        }
        else {
            source.telephone = dest.telephone;
        }
        if (source.department_id === dest.department_id) {
            source.department_id = null;
        }
        else {
            source.department_id = dest.department_id;
        }
        if (source.address === dest.address) {
            source.address = null;
        }
        else {
            source.address = dest.address;
        }
        if (source.category === dest.category) {
            source.category = null;
        }
        else {
            source.category = dest.category;
        }
        if (source.email === dest.email) {
            source.email = null;
        }
        else {
            source.email = dest.email;
        }
        if (source.password === dest.password) {
            source.password = null;
        }
        else {
            source.password = dest.password;
        }
        if (source.direct_leader_id === dest.direct_leader_id) {
            source.direct_leader_id = null;
        }
        else {
            source.direct_leader_id = dest.direct_leader_id;
        }
        if (source.unit === dest.unit) {
            source.unit = null;
        }
        else {
            source.unit = dest.unit;
        }
        if (source.role_id === dest.role_id) {
            source.role_id = null;
        }
        else {
            source.role_id = dest.role_id;
        }
        if (source.role === dest.role) {
            source.role = null;
        }
        else {
            source.role = dest.role;
        }
        if (source.create_time === dest.create_time) {
            source.create_time = null;
        }
        else {
            source.create_time = dest.create_time;
        }
        if (source.update_time === dest.update_time) {
            source.update_time = null;
        }
        else {
            source.update_time = dest.update_time;
        }
        if (source.header_img === dest.header_img) {
            source.header_img = null;
        }
        else {
            source.header_img = dest.header_img;
        }
        return source;
    };
    return User;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/shared/models/user.model.js.map