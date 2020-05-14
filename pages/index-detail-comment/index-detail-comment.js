// pages/index-detail-comment/index-detail-comment.js
Page({
    data: {

        zan_img: '/images/zan1.png',

    },

    // 点赞
    changeImg(e) {
        console.log(e)
        if (e.currentTarget.dataset.url == '/images/zan2.png') {
            this.setData({
                zan_img: '/images/zan1.png'
            })
        } else {
            this.setData({
                zan_img: '/images/zan2.png'
            })
        }
    },
    //show dialog
    showDialog() {
        this.setData({
            show: true
        })
    },
    getUserInfo(event) {
        wx.showToast({
            title: '留言成功',
        })
        console.log(event.detail);
    },
    onClose() {
        this.setData({
            close: false
        });
    },
    onLoad: function(options) {
        this.setData({
            id: options.id,
            detail: JSON.parse(options.id)
        })
        console.log(JSON.parse(options.id))
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})