const $data = require("../../utils/util.js")
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    //indexBar
    onPageScroll(event) {
        this.setData({
            scrollTop: event.scrollTop
        });
    },
    //   详情页
    go_detail(e) {
        console.log(e.currentTarget.dataset.item)
        let id = JSON.stringify(e.currentTarget.dataset.item)
        wx.navigateTo({
            url: '../index-detail/index-detail?id=' + id,
        })
    },
    onLoad: function(options) {
        let id = options.id
        console.log(id)
        this.setData({
            book_list: $data[id]
        });
        console.log($data[id])
    },
})