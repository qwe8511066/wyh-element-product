module.exports = [
  // user login
  {
    url: '/getMenu',
    type: 'get',
    response: config => {
      const value = [
        {
          component: 'layout/index',
          path: '/staticData',
          name: '列表通用组件',
          title: '列表通用组件',
          redirect: '/listComponets/staticData',
          children: [
            {
              path: '/listComponets/staticData',
              name: '静态列表',
              component: 'views/listComponets/staticData/index',
              title: '静态列表', icon: 'el-icon-s-help'
            },

            {
              path: '/listComponets/requestData',
              name: '接口表单(post 按钮权限)',
              component: 'views/listComponets/requestData/index',
              title: '接口表单(post 按钮权限)', icon: 'el-icon-s-help',
              permissionButtons: [
                {
                  label: '新增',
                  icon: 'el-icon-edit'
                },
                {
                  label: '删除',
                  icon: 'el-icon-delete'
                },
              ]
            },
            {
              path: '/listComponets/requestData3',
              name: '接口表单(get 按钮权限)',
              component: 'views/listComponets/requestData3/index',
              title: '接口表单(get 按钮权限)', icon: 'el-icon-s-help',
              permissionButtons: [
                {
                  label: '编辑',
                  icon: 'el-icon-edit'
                },
              ],
            },
            {
              path: '/listComponets/requestData1',
              name: '接口返回对象不一致表单',
              component: 'views/listComponets/requestData1/index',
              title: '接口返回对象不一致的表单', icon: 'el-icon-s-help'
            },
            {
              path: '/listComponets/requestData2',
              name: '接口PageSize不一致表单',
              component: 'views/listComponets/requestData2/index',
              title: '接口PageSize不一致的表单', icon: 'el-icon-s-help'
            },
            {
              path: '/listComponets/customColumn',
              name: '自定义列(按钮权限)',
              component: 'views/listComponets/customColumn/index',
              title: '自定义列(按钮权限)', icon: 'el-icon-s-help',
              permissionButtons: [
                {
                  label: '新增',
                  icon: 'el-icon-folder-add'
                },
                {
                  label: '编辑',
                  icon: 'el-icon-edit'
                },
                {
                  label: '查看',
                  icon: 'el-icon-view'
                },
                {
                  label: '删除',
                  icon: 'el-icon-delete'
                },
              ],
            },
            {
              path: '/listComponets/columnJudgment',
              name: '列的判断',
              component: 'views/listComponets/columnJudgment/index',
              title: '根据字段隐藏或显示列', icon: 'el-icon-s-help'
            },
            {
              path: '/listComponets/setListTable',
              name: '设置和获取list',
              component: 'views/listComponets/setListTable/index',
              title: '设置和获取list', icon: 'el-icon-s-help'
            }, {
              path: '/listComponets/complexData',
              name: '复杂自定义表单',
              component: 'views/listComponets/complexData/index',
              title: '复杂自定义表单', icon: 'el-icon-s-help'
            },
            {
              path: '/listComponets/rowUpdate',
              name: '行编辑',
              component: 'views/listComponets/rowUpdate/index',
              title: '行编辑', icon: 'el-icon-s-help',
              permissionButtons: [
                {
                  label: '编辑',
                  icon: 'el-icon-edit'
                },
              ],
            },
            {
              path: '/listComponets/rowUpdate1',
              name: '行编辑(动态数据)',
              component: 'views/listComponets/rowUpdate1/index',
              title: '行编辑(动态数据)', icon: 'el-icon-s-help',
              permissionButtons: [
                {
                  label: '编辑',
                  icon: 'el-icon-edit'
                },
              ],
            }, {
              path: '/listComponets/radioData',
              name: '单选表单',
              component: 'views/listComponets/radioData/index',
              title: '单选表单', icon: 'el-icon-s-help'
            }, {
              path: '/listComponets/checkData',
              name: '多选列表更新不清空已选',
              component: 'views/listComponets/checkData/index',
              title: '多选列表更新不清空已选', icon: 'el-icon-s-help'
            },
            {
              path: '/listComponets/checkData1',
              name: '多选列表更新清空已选',
              component: 'views/listComponets/checkData1/index',
              title: '多选列表更新清空已选', icon: 'el-icon-s-help'
            }, {
              path: '/listComponets/resetMyPages',
              name: '重置myPages',
              component: 'views/listComponets/resetMyPages/index',
              title: '重置myPages', icon: 'el-icon-s-help'
            }, {
              path: '/listComponets/autoSearchData',
              name: 'myPages变了自动搜索列表',
              component: 'views/listComponets/autoSearchData/index',
              title: 'myPages变了自动搜索列表', icon: 'el-icon-s-help'
            }, {
              path: '/listComponets/maxheightData',
              name: '流动高度列表',
              component: 'views/listComponets/maxheightData/index',
              title: '流动高度列表', icon: 'el-icon-s-help'
            },

            {
              path: '/listComponets/thetreeData',
              name: '树形列表分页的',
              component: 'views/listComponets/thetreeData/index',
              title: '树形列表分页的', icon: 'el-icon-s-help'
            }, {
              path: '/listComponets/thetreeData1',
              name: '树形列表不带分页的',
              component: 'views/listComponets/thetreeData1/index',
              title: '树形列表不带分页的', icon: 'el-icon-s-help'
            }, {
              path: '/listComponets/multiLevelHeader',
              name: '多级表头',
              component: 'views/listComponets/multiLevelHeader/index',
              title: '多级表头', icon: 'el-icon-s-help'
            }, {
              path: '/listComponets/dynamicallyMergeTables',
              name: '动态合并表格',
              component: 'views/listComponets/dynamicallyMergeTables/index',
              title: '动态合并表格', icon: 'el-icon-s-help'
            },
            {
              path: '/listComponets/manuallyMergeTables',
              name: '手动合并表格',
              component: 'views/listComponets/manuallyMergeTables/index',
              title: '手动合并表格', icon: 'el-icon-s-help'
            }, {
              path: '/listComponets/totalAtTheEndOfTheTable',
              name: '表尾合计',
              component: 'views/listComponets/totalAtTheEndOfTheTable/index',
              title: '表尾合计', icon: 'el-icon-s-help'
            },
          ]
        },

        {
          path: '/formTemplate',
          component: 'layout/index',
          redirect: '/formTemplate/customizeForm',
          title: '表单模板',
          name: '表单模板',
          icon: 'el-icon-s-help',
          children: [{
            path: '/formTemplate/customizeForm',
            name: '表单列表',
            component: 'views/formTemplate/customizeForm/index',
            title: '表单列表', icon: 'el-icon-s-help',
            permissionButtons: [
              {
                label: '编辑',
                icon: 'el-icon-edit'
              },
            ],
          },
          {
            path: '/formTemplate/customizeForm/customForm/:id',
            name: '自定义表单',
            component: 'views/formTemplate/customizeForm/customForm/index',
            title: '自定义表单', icon: 'el-icon-s-help',
            hidden: true,
            activeMenu: '/formTemplate/customizeForm'
          },
          {
            path: '/formTemplate/customizePage',
            name: '页面列表',
            component: 'views/formTemplate/customizePage/index',
            title: '页面列表', icon: 'el-icon-s-help',
            permissionButtons: [
              {
                label: '自定义页面',
              },
              {
                label: '编辑',
                icon: 'el-icon-edit'
              },
            ],
          },
          {
            path: '/formTemplate/customizePage/customPage/:id',
            name: '自定义页面',
            component: 'views/formTemplate/customizePage/customPage/index',
            title: '自定义页面', icon: 'el-icon-s-help',
            hidden: true,
            activeMenu: '/formTemplate/customizePage'
          },
          ]
        },

        {
          path: '/dashboard',
          component: 'layout/index',
          redirect: '/dashboard/analysis',
          title: '仪表盘',
          name: '仪表盘',
          icon: 'el-icon-s-help',
          children: [{
            path: '/dashboard/analysis',
            name: '分析页',
            component: 'views/dashboard/analysis/index',
            title: '分析页', icon: 'el-icon-s-help',
          },
          {
            path: '/dashboard/bigScreen',
            name: '大屏页',
            component: 'views/dashboard/bigScreen/index',
            title: '大屏页', icon: 'el-icon-s-help',
            //大屏：屏蔽头部和左侧菜单
            isBigScreen: true,
          },
          ]
        },

        {
          name: '外部链接',
          component: 'views/dashboard/analysis/index',
          title: '外部链接', icon: 'el-icon-s-help',
          path: "https://baidu.com",
        },

        {
          path: '/businessComponets',
          component: 'layout/index',
          redirect: '/businessComponets/dialogWyhElementChooseTabs',
          title: '业务组件',
          name: '业务组件',
          icon: 'el-icon-s-help',
          children: [{
            path: '/businessComponets/dialogWyhElementChooseTabs',
            name: '列表选人(选项卡)',
            component: 'views/businessComponets/dialogWyhElementChooseTabs/index',
            title: '列表选人(选项卡)', icon: 'el-icon-s-help'
          },
          {
            path: '/businessComponets/dialogWyhElementChoose',
            name: '列表选人(多选)',
            component: 'views/businessComponets/dialogWyhElementChoose/index',
            title: '列表选人(多选)', icon: 'el-icon-s-help'
          },
          {
            path: '/businessComponets/dialogWyhElementChooseRadio',
            name: '列表选人(单选)',
            component: 'views/businessComponets/dialogWyhElementChooseRadio/index',
            title: '列表选人(单选)', icon: 'el-icon-s-help'
          },
          {
            path: '/businessComponets/dialogWyhElementChooseSelect',
            name: '下拉框单/多选人',
            component: 'views/businessComponets/dialogWyhElementChooseSelect/index',
            title: '下拉框单/多选人', icon: 'el-icon-s-help'
          },
          ]
        },

        {
          path: '/test',
          name: '测试界面',
          component: 'layout/index',
          redirect: '/test/testPage',
          title: '测试界面',
          children: [
            {
              path: '/test/testPage',
              name: '测试界面-001',
              component: 'views/test/testPage/index',
              title: '测试界面-001',
            }
          ]
        },

      ]
      return {
        code: 20000,
        data: value
      }
    }
  },
]
