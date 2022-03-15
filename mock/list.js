const Mock = require('mockjs')

module.exports = [
  {
    url: '/getList1',
    type: 'post',
    response: (config) => {
      const { page, pageSize } = config.body
      const list = []
      const index = page * pageSize
      for (let i = 0; i < pageSize; i++) {
        list.push({
          user: {
            id: index + i,
            name: "@cname",
            "type|1-5": 5,
            "date": "@datetime",//随机生成日期时间
            'status|1': "@boolean",
            img: Mock.Random.image('50x50')
          }
        })
      }
      return {
        code: 20000,
        data: {
          totalCount: 1000,
          list: list
        }
      }
    }
  },

  {
    url: '/getList6',
    type: 'post',
    response: (config) => {
      const { page, pageSize } = config.body
      const list = []
      const index = page * pageSize
      for (let i = 0; i < pageSize; i++) {
        list.push({
          id: index + i,
          name: '表单' + i,
        })
      }
      return {
        code: 20000,
        data: {
          totalCount: 1000,
          list: list
        }
      }
    }
  },

  {
    url: '/getList7',
    type: 'post',
    response: (config) => {
      const { page, pageSize } = config.body
      const list = []
      const index = page * pageSize
      for (let i = 0; i < pageSize; i++) {
        list.push({
          id: index + i,
          name: '页面' + i,
        })
      }
      return {
        code: 20000,
        data: {
          totalCount: 1000,
          list: list
        }
      }
    }
  },

  {
    url: '/getList2',
    type: 'post',
    response: (config) => {
      const { page, pageSize } = config.body
      const list = []
      const index = page * pageSize
      for (let i = 0; i < pageSize; i++) {
        list.push({
          user: {
            id: index + i,
            name: "@cname",
            "type|1-5": 5,
            "date": "@datetime",//随机生成日期时间
            'status|1': "@boolean",
            img: Mock.Random.image('50x50')
          }
        })
      }
      return {
        code: 20000,
        data: {
          test1: {
            test12: {
              data: list
            },
            total: 1000,
          }
        }
      }
    }
  },

  {
    url: '/getList3',
    type: 'post',
    response: (config) => {
      const { page } = config.body
      const newPage = page.test.newPage;
      const limit = page.limit
      const list = []
      const index = newPage * limit
      for (let i = 0; i < limit; i++) {
        list.push({
          user: {
            id: index + i,
            name: "@cname",
            "type|1-5": 5,
            "date": "@datetime",//随机生成日期时间
            'status|1': "@boolean",
            img: Mock.Random.image('50x50')
          }
        })
      }
      return {
        code: 20000,
        data: {
          totalCount: 1000,
          list: list
        }
      }
    }
  },
  {
    url: '/getList4',
    type: 'get',
    response: (config) => {
      console.log(config.query)
      const { page, pageSize } = config.query
      const list = []
      const index = page * pageSize
      for (let i = 0; i < pageSize; i++) {
        list.push({
          user: {
            id: index + i,
            name: "@cname",
            "type|1-5": 5,
            "date": "@datetime",//随机生成日期时间
            'status|1': "@boolean",
            img: Mock.Random.image('50x50')
          }
        })
      }
      return {
        code: 20000,
        data: {
          totalCount: 1000,
          list: list
        }
      }
    }
  },

  {
    url: '/getList5',
    type: 'post',
    response: (config) => {
      const { pageSize, page } = config.body
      const list = []
      const index = page * pageSize
      for (let i = 0; i < pageSize; i++) {
        list.push({
          name: "@cname",
          'type|1': "@boolean",
          "date": "@datetime",//随机生成日期时间
          "status|1-5": 5,
          'number|1-1000': 1000,
        })
      }

      return {
        code: 20000,
        data: {
          totalCount: 1000,
          list: list
        }
      }
    }
  },
  {
    url: '/getList',
    type: 'post',
    response: (config) => {
      const { pageSize, page } = config.body
      const list = []
      const index = page * pageSize
      for (let i = 0; i < pageSize; i++) {
        list.push({
          name: index + i,
          'status|1': "@boolean",
          "date": "@datetime",//随机生成日期时间

          "type|1-5": 5,

          'unitPrice1|1-1000': 1000,
          'unitPrice2|1-1000': 1000,
          'unitPrice3|1-1000': 1000,
          'unitPrice4|1-1000': 1000,
          'unitPrice5|1-1000': 1000,
        })
      }

      return {
        code: 20000,
        data: {
          totalCount: 1000,
          list: list
        }
      }
    }
  },
  {
    url: '/getThetree',
    type: 'post',
    response: (config) => {
      const { pageSize, page } = config.body
      const list = []
      const index = page * pageSize
      for (let i = 0; i < pageSize; i++) {
        list.push({
          id: index + i,
          name: "@cname",
          "type|1-5": 5,
          "date": "@datetime",//随机生成日期时间
          'status|1': "@boolean",
          img: Mock.Random.image('50x50'),
          children: [
            {
              "date": "@datetime",//随机生成日期时间
              id: Mock.Random.id(),
              name: "@cname",

              children: [
                {
                  "date": "@datetime",//随机生成日期时间
                  id: Mock.Random.id(),
                  name: "@cname",
                }
              ]
            }
          ]
        })
      }
      return {
        code: 20000,
        data: {
          totalCount: 1000,
          list: list
        }
      }
    }
  },
  {
    url: '/getNewList1',
    type: 'post',
    response: (config) => {
      const { pageSize, page } = config.body
      const _pageSize = pageSize ? pageSize : 1;
      const list = []
      const index = page * _pageSize
      for (let i = 0; i < _pageSize; i++) {
        list.push(
          {
            id: i,
            name: "@cname" + '新闻中心',
            title: '新闻中心' + i,
            "date": "@datetime",//随机生成日期时间
            img: Mock.Random.image('50x50'),
          }
        )
      }
      return {
        code: 20000,
        data: {
          totalCount: 1000,
          list: list
        }
      }
    }
  },
  {
    url: '/getNewList2',
    type: 'post',
    response: (config) => {
      const { pageSize, page } = config.body
      const _pageSize = pageSize ? pageSize : 1;
      const list = []
      const index = page * _pageSize
      for (let i = 0; i < _pageSize; i++) {
        list.push(
          {
            id: i,
            name: "@cname" + '通告公告',
            title: '通告公告' + i,
            "date": "@datetime",//随机生成日期时间
            img: Mock.Random.image('50x50'),
          }
        )
      }
      return {
        code: 20000,
        data: {
          totalCount: 1000,
          list: list
        }
      }
    }
  },
  {
    url: '/getNewList3',
    type: 'post',
    response: (config) => {
      const { pageSize, page } = config.body
      const _pageSize = pageSize ? pageSize : 1;
      const list = []
      const index = page * _pageSize
      for (let i = 0; i < _pageSize; i++) {
        list.push(
          {
            id: i,
            name: "@cname" + '人才招聘',
            title: '人才招聘' + i,
            "date": "@datetime",//随机生成日期时间
            img: Mock.Random.image('50x50'),
          }
        )
      }
      return {
        code: 20000,
        data: {
          totalCount: 1000,
          list: list
        }
      }
    }
  },
  {
    url: '/getNewList4',
    type: 'post',
    response: (config) => {
      const { pageSize, page } = config.body
      const _pageSize = pageSize ? pageSize : 1;
      const list = []
      const index = page * _pageSize
      for (let i = 0; i < _pageSize; i++) {
        list.push(
          {
            id: i,
            name: "@cname" + '亲子活动',
            title: '亲子活动' + i,
            "date": "@datetime",//随机生成日期时间
            img: Mock.Random.image('50x50'),
          }
        )
      }
      return {
        code: 20000,
        data: {
          totalCount: 1000,
          list: list
        }
      }
    }
  },
  {
    url: '/getNewList5',
    type: 'post',
    response: (config) => {
      const { pageSize, page } = config.body
      const _pageSize = pageSize ? pageSize : 1;
      const list = []
      const index = page * _pageSize
      for (let i = 0; i < _pageSize; i++) {
        list.push(
          {
            id: i,
            name: "@cname" + '游玩活动',
            title: '游玩活动' + i,
            "date": "@datetime",//随机生成日期时间
            img: Mock.Random.image('50x50'),
          }
        )
      }
      return {
        code: 20000,
        data: {
          totalCount: 1000,
          list: list
        }
      }
    }
  },
  {
    url: '/getNewList6',
    type: 'post',
    response: (config) => {
      const { pageSize, page } = config.body
      const _pageSize = pageSize ? pageSize : 1;
      const list = []
      const index = page * _pageSize
      for (let i = 0; i < _pageSize; i++) {
        list.push(
          {
            id: i,
            name: "@cname" + '公园活动',
            title: '公园活动' + i,
            "date": "@datetime",//随机生成日期时间
            img: Mock.Random.image('50x50'),
          }
        )
      }
      return {
        code: 20000,
        data: {
          totalCount: 1000,
          list: list
        }
      }
    }
  }

]
