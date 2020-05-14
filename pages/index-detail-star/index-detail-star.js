// pages/index-detail-star/index-detail-star.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        star: 0,
        disabled: true,
        confirm:true
    },
    //star
    onChange(event) {
        this.setData({
            disabled: false,
            star: event.detail
        });
    },
    onLoad: function(options) {
        this.setData({
            id: options.id,
            detail: JSON.parse(options.id)
        })
        console.log(JSON.parse(options.id))
    },
    // 确定
    confirm() {
        this.setData({
            confirm:false
        })
    }

})