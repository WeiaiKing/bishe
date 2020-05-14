// pages/index-search/index-search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  // 搜索内容
  bindInput(e) {
    this.setData({
      value: e.detail.value,
    })
  },
  search(){
      wx.showToast({
          icon:'none',
          title: '阿欧，搜索不到哦',
      })
      
  },

  //取消搜索
  closeSearch() {
    this.setData({
      value: '',
    })
  },
})