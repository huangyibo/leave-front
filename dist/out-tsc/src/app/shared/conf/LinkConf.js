export var LinkConf = (function () {
    function LinkConf() {
    }
    LinkConf.links = {
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
                'sublinks': [
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
                'sublinks': [
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
                'sublinks': [
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
                'sublinks': [
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
    LinkConf.ROLE_OFFICER = 'OFFICER';
    LinkConf.ROLE_LEADER = 'LEADER';
    LinkConf.ROLE_TOP_LEADER = 'TOP_LEADER';
    LinkConf.ROLE_ADMIN = 'ADMIN';
    return LinkConf;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/shared/conf/LinkConf.js.map