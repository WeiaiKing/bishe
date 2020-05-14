//获取应用实例
const app = getApp()

Page({
    data: {
        show: false, //是否弹框（授权）
    },
    onAuth2: function(e) {
        console.log(e)
        if (e.detail.errMsg === "getUserInfo:fail auth deny") {
            console.log('eee')
        } else {
            wx.setStorageSync('userInfo', e.detail.userInfo)
            this.onClose()
            this.setData({
                userInfo: e.detail.userInfo
            })
        }
    },
    onClose() {
        this.setData({
            show: false
        });
    },
    onLoad: function() {

    },
    onShow() {

        if (wx.getStorageSync('userInfo')) {
            this.setData({
                userInfo: wx.getStorageSync('userInfo'),
                show: false,
            })
        } else {
            this.setData({
                show: true,
            })
        }
    }
})