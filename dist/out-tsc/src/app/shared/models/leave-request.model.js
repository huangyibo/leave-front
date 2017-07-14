export var LeaveRequest = (function () {
    function LeaveRequest() {
    }
    LeaveRequest.filterRepeat = function (source, dest) {
        source.id = dest.id;
        if (source.start_date === dest.start_date) {
            source.start_date = null;
        }
        else {
            source.start_date = dest.start_date;
        }
        if (source.end_date === dest.end_date) {
            source.end_date = null;
        }
        else {
            source.end_date = dest.end_date;
        }
        if (source.origin_addr === dest.origin_addr) {
            source.origin_addr = null;
        }
        else {
            source.origin_addr = dest.origin_addr;
        }
        if (source.middle_addr === dest.middle_addr) {
            source.middle_addr = null;
        }
        else {
            source.middle_addr = dest.middle_addr;
        }
        if (source.dest_addr === dest.dest_addr) {
            source.dest_addr = null;
        }
        else {
            source.dest_addr = dest.dest_addr;
        }
        if (source.reason === dest.reason) {
            source.reason = null;
        }
        else {
            source.reason = dest.reason;
        }
        if (source.traffic_tool === dest.traffic_tool) {
            source.traffic_tool = null;
        }
        else {
            source.traffic_tool = dest.traffic_tool;
        }
        if (source.phone === dest.phone) {
            source.phone = null;
        }
        else {
            source.phone = dest.phone;
        }
        if (source.pc === dest.pc) {
            source.pc = null;
        }
        else {
            source.pc = dest.pc;
        }
        if (source.leader_id === dest.leader_id) {
            source.leader_id = null;
        }
        else {
            source.leader_id = dest.leader_id;
        }
        if (source.leader_agree === dest.leader_agree) {
            source.leader_agree = null;
        }
        else {
            source.leader_agree = dest.leader_agree;
        }
        if (source.leader_comment === dest.leader_comment) {
            source.leader_comment = null;
        }
        else {
            source.leader_comment = dest.leader_comment;
        }
        if (source.top_leader_id === dest.top_leader_id) {
            source.top_leader_id = null;
        }
        else {
            source.top_leader_id = dest.top_leader_id;
        }
        if (source.top_leader_agree === dest.top_leader_agree) {
            source.top_leader_agree = null;
        }
        else {
            source.top_leader_agree = dest.top_leader_agree;
        }
        if (source.top_leader_comment === dest.top_leader_comment) {
            source.top_leader_comment = null;
        }
        else {
            source.top_leader_comment = dest.top_leader_comment;
        }
        if (source.signed_status === dest.signed_status) {
            source.signed_status = null;
        }
        else {
            source.signed_status = dest.signed_status;
        }
        if (source.fake_status === dest.fake_status) {
            source.fake_status = null;
        }
        else {
            source.fake_status = dest.fake_status;
        }
        return source;
    };
    return LeaveRequest;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/shared/models/leave-request.model.js.map