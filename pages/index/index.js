const $data = require('../../utils/util.js')
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {

        background: ['http://img63.ddimg.cn/upload_img/00830/1206/FHC_750x315-1583752751.jpg', 'http://img62.ddimg.cn/upload_img/00779/xmj/750x315_wzh_20200304-1583310520.jpg', 'http://img60.ddimg.cn/upload_img/00316/by/750x315-1582798693.jpg'],
    },

    input() {
        wx.navigateTo({
            url: '../index-search/index-search',
            success: function(res) {},
        })
    },
    onLoad: function(options) {
        this.setData({
            friendData: $data.indexData[0].child,
            newData: $data.indexData[1].child
        })

        console.log($data.indexData)

    },
    //   
    go_book_list() {
        wx.navigateTo({
            url: '../book-list/book-list',
            success: function(res) {},
        })
    },
    // 轮播图
    go_book_list_detail_banner() {
        wx.navigateTo({
            url: '../book-list-detail/book-list-detail?id=swipeData',
        })
    },
    //   开学季
    go_book_list_detail() {
        wx.navigateTo({
            url: '../book-list-detail/book-list-detail?id=schoolData',
        })
    },
    // 圈友发布
    go_detail1(e){
        let id = JSON.stringify(e.currentTarget.dataset.item)
        wx.navigateTo({
            url: '../index-detail/index-detail?id=' + id+'&public=true',
        })
    },
    //   详情页
    go_detail(e) {
        console.log(e)
        console.log(e.currentTarget.dataset.item)
        let id = JSON.stringify(e.currentTarget.dataset.item)
        wx.navigateTo({
            url: '../index-detail/index-detail?id=' + id,
        })
    }
})