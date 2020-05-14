const $api = require("../../utils/api.js")
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        week: '周一(4月13日)',
        time: '10:00-11:00',
        confirm:true
    },
    selctWeek(e) {
        this.setData({
            week: e.currentTarget.dataset.week
        })
    },
    selectTime(e) {
        console.log(e)
        this.setData({
            time: e.currentTarget.dataset.time
        })
    },
    time_confirm() {
        this.setData({
            popup: false
        });
    },
    onClose() {
        this.setData({
            popup: false
        });
    },
    // 选择时间
    popup() {
        this.setData({
            popup: true
        });
    },
    wxPay() {
       this.setData({
           confirm:false
       })
    },
    //返回卖书页面
    returnSell() {

        // wx.switchTab({
        //     url: '../index/index',
        //     success: function (e) {
        //         var page = getCurrentPages().pop();
        //         if (page == undefined || page == null) return;
        //         page.onLoad();
        //     }
        // }) 

        wx.navigateBack({
            delta: 2,
            success: function (e) {
                var page = getCurrentPages().pop();
                if (page == undefined || page == null) return;
                page.onLoad();
            }
        })
    },
    onLoad: function (options) {
        // 获取图书信息
        console.log(wx.getStorageSync('scan_book'))
        this.setData({
            scan_book: wx.getStorageSync('scan_book')
        })
        let modelmes = wx.getStorageSync('modelmes');
        let isIphoneX = app.globalData.isIphoneX;
        this.setData({
            isIphoneX: isIphoneX
        })
        // 地址列表
        $api.address.address_list({
            token: wx.getStorageSync('token'),
        }).then((e) => {
            this.setData({
                address_list: e.data.target[0]
            })
            console.log(this.data.address_list)
        })
        // 状态的改变
        $api.cart.order_status({
            token: wx.getStorageSync('token'),
            order_id: 1, // 订单id
            change: 6,
        }).then((e) => {
            console.log('order_create', e)
        })
    },
    onShow: function () {
        var pages = getCurrentPages();//获取当前页面js里面的pages里的所有信息。
        var currPage = pages[pages.length - 1]; //
        //prevPage 是获取上一个页面的js里面的pages的所有信息。-1当前页面 -2 是上一个页面，-3是上上个页面以此类推。
        console.log(currPage)
        // 地址列表
        $api.address.address_list({
            token: wx.getStorageSync('token'),
        }).then((e) => {
            this.setData({
                address_list: e.data.target[currPage.__data__.mydata.id - 1]
            })
            console.log(this.data.address_list)
        })
        console.log(currPage.__data__.mydata.id)
    }
})