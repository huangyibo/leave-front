export class LeaveRequestFilter {
  review_status: boolean;         // 请假审核状态
  sign_status: boolean;           // 请假签到状态
  fake_status: boolean;           // 销假状态
  apply_time_range_start: Date;   // 申请请假时间范围：开始时间
  apply_time_range_end: Date;     // 申请请假时间范围：结束时间
  leave_start_date: Date;         // 请假时间区间：开始时间
  leave_end_date: Date;           // 请假时间区间：结束时间
  category: string;               // 'ALL’ 'OFFICER' LEADER' 人员类型
  department_id: number = null;          // 科室部门ID
  user_name: string;              // 姓名检索

  constructor(){
    this.department_id = null;
    this.category = "ALL";
  }
}
