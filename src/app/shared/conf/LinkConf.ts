export class LinkConf {
  public static links: {[key: string]: any} = {
    OFFICER: [
      {
        'title': '主页',
        'icon': 'dashboard',
        'link': ['/'],
        'external': false
      },
      {
        'title': '请假状态查询',
        'icon': 'usd',
        'link': ['/officer/leave-request/list'],
        'external': false
      },
      {
        'title': '历史请假记录',
        'icon': 'usd',
        'link': ['/officer/leave-request/history'],
        'external': false
      }
    ],
    LEADER: [
      {
        'title': '主页',
        'icon': 'dashboard',
        'link': ['/'],
        'external': false
      },
      {
        'title': '个人请假管理',
        'icon': 'link',
        'sublinks':[
          {
            'title': '请假申请',
            'icon': 'usd',
            'link': ['/leader/leave-request'],
            'external': false
          },
          {
            'title': '请假状态查询',
            'icon': 'usd',
            'link': ['/leader/leave-request/list'],
            'external': false
          },
          {
            'title': '历史请假记录',
            'icon': 'usd',
            'link': ['/leader/leave-request/history'],
            'external': false
          }
        ]
      },
      {
        'title': '个人请假管理',
        'icon': 'link',
        'sublinks':[
          {
            'title': '科室请假审批',
            'icon': 'usd',
            'link': ['/leader/leave-request/officer-leave-list'],
            'external': false
          },
          {
            'title': '科室请假报表统计',
            'icon': 'usd',
            'link': ['/leader/leave-request/report'],
            'external': false
          }
        ]
      }

    ],
    TOP_LEADER: [
      {
        'title': '主页',
        'icon': 'dashboard',
        'link': ['/'],
        'external': false
      },
      {
        'title': '请假审批管理',
        'icon': 'link',
        'sublinks':[
          {
            'title': '科室干部请假审批',
            'icon': 'usd',
            'link': ['/top-leader/leave-request/review/leader'],
            'external': false
          },
          {
            'title': '学员请假审批',
            'icon': 'usd',
            'link': ['/top-leader/leave-request/review/officer'],
            'external': false
          }
        ]
      },
      {
        'title': '销假管理',
        'icon': 'link',
        'sublinks':[
          {
            'title': '科室干部销假',
            'icon': 'usd',
            'link': ['/top-leader/leave-request/resume/leader'],
            'external': false
          },
          {
            'title': '学员销假',
            'icon': 'usd',
            'link': ['/top-leader/leave-request/resume/officer'],
            'external': false
          }
        ]
      },
      {
        'title': '请假报表统计',
        'icon': 'usd',
        'link': ['/top-leader/leave-request/report'],
        'external': false
      }
    ],
    ADMIN: [
      {
        'title': 'Home',
        'icon': 'dashboard',
        'link': ['/'],
        'external': false
      },
      {
        'title': '管理员列表',
        'icon': 'usd',
        'link': ['/admin/list'],
        'external': false
      },
      {
        'title': '科室部门管理',
        'icon': 'usd',
        'link': ['/admin/department/list'],
        'external': false
      },
      {
        'title': '用户管理',
        'icon': 'usd',
        'link': ['/admin/user/create'],
        'external': false
      }
    ]
  };
  public static ROLE_OFFICER: string = 'OFFICER';
  public static ROLE_LEADER: string = 'LEADER';
  public static ROLE_TOP_LEADER: string = 'TOP_LEADER';
  public static ROLE_ADMIN: string = 'ADMIN';
}
