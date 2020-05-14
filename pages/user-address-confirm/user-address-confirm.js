const $api = require("../../utils/api.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onShow(){
      this.setData({
          address_list: wx.getStorageSync('address')
      })
  },
  onLoad: function(options) {
      
    // 地址列表
    // $api.address.address_list({
    //   token: wx.getStorageSync('token'),
    // }).then((e) => {
    //   this.setData({
    //     address_list: e.data.target
    //   })
    //   console.log(this.data.address_list)
    // })
  },
  goback(e) {
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2]; //上一个页面
    //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
    prevPage.setData({
      mydata: { id: e.currentTarget.dataset.id}
    })
    wx.navigateBack({
      delta: 1,
    })
  }
})