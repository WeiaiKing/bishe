//index.js
//获取应用实例
const app = getApp()
// 扫码卖书列表
let scan_list = [];
Page({
    data: {
        public:true,
        result: '',
        open: 1,
        open_icon: 1,

    },
    //  打开下拉
    open: function(e) {
        console.log(e.target.dataset.id)
        if (e.target.dataset.id == 1) {
            this.setData({
                open: 0
            })
        } else {
            this.setData({
                open: 1
            })
        }
        console.log("触发了")
    },
    // 关闭下拉
    open_icon: function(e) {
        console.log(e.target.dataset.id)
        if (e.target.dataset.id == 1) {
            this.setData({
                open_icon: 0
            })
        } else {
            this.setData({
                open_icon: 1
            })
        }
        console.log("触发了")
    },
    onLoad: function() {
        this.setData({
            result: '',
            public:true
        });
    },
    onShow(){
        
    },
    // 扫码卖书列表
    getScancode: function() {
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
                            public: false,
                            scan_list
                        })
                    }
                })
            }
        })

    },
    goPublic() {
        wx.navigateTo({
            url: '../sell-public/sell-public',
            success: function(res) {},
        })
    },
    goPhace() {
        wx.navigateTo({
            url: '../sell-phace/sell-phace',
            success: function(res) {},
        })
    },
    gobuy() {
        wx.navigateTo({
            url: '../sell-buy/sell-buy',
            success: function (res) { },
        })
    }


})