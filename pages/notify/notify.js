//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    navTab: ["通知", "启动游戏", "开黑广场"],
    currentNavtab: "0"
  },
  onLoad: function () {

  },
  switchTab: function(e){
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  }
})
