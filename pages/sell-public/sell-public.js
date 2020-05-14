//index.js
//获取应用实例
const app = getApp()
// 扫码卖书列表
let scan_list = [];
Page({
    data: {
        comfirm: true,
        result: '',
        option1: [{
                text: '品相良好',
                value: 0
            },
            {
                text: '品相中等',
                value: 1
            },

        ],
        value1: 0,
    },
    onLoad: function() {
        wx.scanCode({
            success: (res) => {
                console.log(res);
                var result = res.result;
                this.setData({
                    result: result,
                });
                wx.request({
                    url: "https://api.douban.com/v2/book/isbn/" + result + '?apikey=0b2bdeda43b5688921839c8ecb20399b',
                    method: 'get',
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: (res) => {
                        scan_list.push(res.data)
                        wx.setStorage({
                            key: 'scan_book',
                            data: scan_list,
                        })
                        this.setData({
                            scan_list
                        })
                    }
                })
            }
        })
    },
    //返回卖书页面
    returnSell() {
        wx.navigateBack({
            delta: 1,
        })
    },
    next() {
        wx.navigateTo({
            url: '../sell-buy/sell-buy',
            success: function(res) {},
        })
        // this.setData({
        //   comfirm:false,
        // })
    },
    goPhace() {
        wx.navigateTo({
            url: '../sell-phace/sell-phace',
            success: function(res) {},
        })
    }

})