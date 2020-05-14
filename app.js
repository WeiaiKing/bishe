App({
  onLaunch: function () {
    wx.getSystemInfo({
      success: res => {
        let modelmes = res.model;
        if (modelmes.search('iPhone X') != -1) {
          this.globalData.isIphoneX = true
        }
        wx.setStorageSync('modelmes', modelmes)
      }
    })
  },
  globalData: {}
})