const $api = require("../../utils/api.js")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        book_list: [{
                text: 'jingguanData',
                name: "经管学院",
                id: 9,
                url: '/images/university/jinguan.jpg'
            },
            {
                text:'haiyunData',
                name: "海运学院",
                id: 2,
                url: '/images/university/haiyun.jpg'
            },
            {
                text:'liData',
                name: "理学院",
                id: 12,
                url: '/images/university/li.jpg'

            },
            {
                text:'jiangongData',
                name: "建工学院",
                id: 13,
                url: '/images/university/jiangong.jpg'

            },
            {
                text:'shipinData',
                name: "食品学院",
                id: 5,
                url: '/images/university/shipin.jpg'
            },
            {
                text:'dianxinData',
                name: "电信学院",
                id: 6,
                url: '/images/university/dianxin.jpg'
            },
            {
                text:'zihuanData',
                name: "资环学院",
                id: 7,
                url: '/images/university/zihuan.jpg'
            },
            {
                text: 'renwenData',
                name: "人文学院",
                id: 8,
                url: '/images/university/renwen.jpg'
            },

            {
                text:'haiyangData',
                name: "海洋学院",
                id: 1,
                url: '/images/university/haiyang.jpg'

            },
            {
                text:'jiaoyuData',
                name: "教育学院",
                id: 10,
                url: '/images/university/jiaoyu.jpg'
            },
            {
                text:'taosheData',
                name: "陶设学院",
                id: 11
            },
            {
                text:'jichuanData',
                name: "机船学院",
                id: 3,
                // url: '/images/university/jinguan.jpg'
            },
            {
                text:'shihuaData',
                name: "石化学院",
                id: 4,
                url: '/images/university/shihua.jpg'
            },
            {
                text:'guowaiData',
                name: "国外院",
                id: 14
            },
            {
                text:'makesiData',
                name: "马克思主义学院",
                id: 15
            },
        ],

    },
    onChange(e) {
        console.log(e.detail)
        if (e.detail == 0) {
            wx.switchTab({
                url: '../index/index',
                success: function(res) {},
            })
        } else if (e.detail == 1) {
            wx.switchTab({
                url: '../sell/sell',
                success: function(res) {},
            })
        } else if (e.detail == 2) {
            wx.switchTab({
                url: '../cart/cart',
                success: function(res) {},
            })
        } else {
            wx.switchTab({
                url: '../user/user',
                success: function(res) {},
            })
        }

    },
    go_book_detail(e) {
        console.log("kk")
        wx.navigateTo({
            url: '../book-list-detail/book-list-detail?id=' + e.currentTarget.dataset.id,
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },
})