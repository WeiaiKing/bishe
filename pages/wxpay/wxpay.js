// pages/wxpay/wxpay.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        show: true
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            price:options.price
        })
        console.log(options)
    },
    onClose() {
        this.setData({ show: false });
    }
})