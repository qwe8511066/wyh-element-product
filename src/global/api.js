const api = {
  getList1: 'getList1',
  getList2: 'getList2',
}

const getViewList = [{
  label: '新闻',
  options: [{
    value: 'getNewList1',
    label: '新闻中心'
  }, {
    value: 'getNewList2',
    label: '通告公告'
  }, {
    value: 'getNewList3',
    label: '人才招聘'
  }]
}, {
  label: '活动',
  options: [{
    value: 'getNewList4',
    label: '亲子活动'
  }, {
    value: 'getNewList5',
    label: '游玩活动'
  }, {
    value: 'getNewList6',
    label: '公园活动'
  }]
}, {
  label: '下载',
  options: [{
    value: 'getNewList7',
    label: '图片文档'
  }, {
    value: 'getNewList8',
    label: '视频文档'
  }]
}]

export default {
  api,
  getViewList,
}