// pages/user-order/user-order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  go_user_order_detail(){
    wx.navigateTo({
      url: '../user-order-detail/user-order-detail',
      success: function(res) {},
     
    })
  }
})