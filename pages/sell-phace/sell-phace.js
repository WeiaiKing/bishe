
Page({
  data: {
    open_icon: true,
    open_icon_poor: true,
    open_icon_good: true,
  },
  onLoad: function () {
  },
  //  打开下拉good
  openGood: function () {
    this.setData({
      open_icon_good: true
    })
  },
  // 关闭下拉good
  open_icon_good: function () {
    this.setData({
      open_icon_good: false
    })
  },
  //  打开下拉poor
  openPoor: function () {
    this.setData({
      open_icon_poor: true
    })
  },
  // 关闭下拉poor
  open_icon_poor: function () {
    this.setData({
      open_icon_poor: false
    })
  },
  //  打开下拉
  open: function() {
      this.setData({
        open_icon: true
      })
  },
  // 关闭下拉
  open_icon: function() {
    this.setData({
      open_icon:false
    })
  },
 
  previewImage: function(e) {
    wx.previewImage({
      current: '/images/poor/bu1.png',
      urls: ['/images/poor/bu1.png']
    })
  },
})