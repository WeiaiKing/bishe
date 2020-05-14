// pages/user-setting/user-setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // activeNames: ['1']
  },

  onChange(event) {
    this.setData({
      activeNames: event.detail
    });
  },
  onLoad: function (options) {

  },
})