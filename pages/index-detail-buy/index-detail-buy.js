const $api = require("../../utils/api.js")
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        week: '周一(5月4日)',
        time: '10:00-11:00',
        otal_price: '',
        show: false
    },
    // 支付关闭框
    onClose1() {
        this.setData({
            show: false
        });
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
    // 支付提示
    password() {
        //支付接口
        wx.requestPayment(

            wx.showModal({
                title: '提示',
                content: '需要完善商户ID,才能进行此功能，请耐心等候！',
                success(res) {
                    if (res.confirm) {
                        console.log('用户点击确定')
                    } else if (res.cancel) {
                        console.log('用户点击取消')
                    }
                }
            })

        )

    },
    // 微信支付
    wxPay() {
        wx.showLoading({
            title: '加载中',
        })

        setTimeout(() => {
            wx.hideLoading()
            this.setData({
                price: this.data.total_price,
                show: true
            })
        }, 1200)

        // wx.navigateTo({
        //     url: '../wxpay/wxpay?price=' + this.data.total_price,
        // })
        // this.setData({
        //     confirm: false
        // });
    },
    onLoad: function(options) {
        let modelmes = wx.getStorageSync('modelmes');
        let isIphoneX = app.globalData.isIphoneX;
        this.setData({
            isIphoneX: isIphoneX
        })
        // 传值
        console.log(options.total)
        if (options.total) {
            this.setData({
                total_price: options.total
            })
        } else {
            let total_price = '';
            wx.getStorageSync("book_buy").forEach(res => {
                total_price = total_price + res.price
            })
            this.setData({
                total_price: parseFloat(total_price)
            })
        }

        this.setData({
            book: wx.getStorageSync("book_buy")
        })

        // 地址列表
        // $api.address.address_list({
        //     token: wx.getStorageSync('token'),
        // }).then((e) => {
        //     this.setData({
        //         address_list: e.data.target[0]
        //     })
        //     console.log(this.data.address_list)
        // })
        if (wx.getStorageSync("address")) {
            this.setData({
                address_list: wx.getStorageSync("address")[0]
            })
        } else {
            wx.showToast({
                icon: 'none',
                title: '请选择地址',
            })
        }


    },
    onShow: function() {
        var pages = getCurrentPages(); //获取当前页面js里面的pages里的所有信息。
        var currPage = pages[pages.length - 1]; //
        //prevPage 是获取上一个页面的js里面的pages的所有信息。-1当前页面 -2 是上一个页面，-3是上上个页面以此类推。
        console.log(currPage)
        // 地址列表
        // $api.address.address_list({
        //     token: wx.getStorageSync('token'),
        // }).then((e) => {
        //     this.setData({
        //         address_list: e.data.target[currPage.__data__.mydata.id - 1]
        //     })
        //     console.log(this.data.address_list)
        // })
        this.setData({
            address_list: currPage.__data__.mydata.id
        })
        console.log(currPage.__data__.mydata.id)
    }
})