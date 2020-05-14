Page({
  data: {
    activeName: '0',
  },
  //panel
  onChange(event) {
    this.setData({
      activeName: event.detail
    });
  },
  onLoad: function (options) {
  },
})