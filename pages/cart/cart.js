const $api = require("../../utils/api.js")
Page({
    data: {
        total: 0,
        select_num: 1,
        checked: false,
    },
    onLoad() {
        let cart_list = wx.getStorageSync('cardlist');
        cart_list.forEach(item => {
            if (item.checked) {
                this.setData({
                    total: parseFloat(this.data.total) + parseFloat(item.price) - 4.00
                })
            }
        })
    },
    onShow() {
        let cart_list = wx.getStorageSync('cardlist');
        this.setData({
            cart_list
        })
    },
    // 选择数量
    selectNum(e) {
        this.setData({
            select_num: e.detail,
        })
        if (this.data.checked) {
            this.setData({
                total: e.currentTarget.dataset.price * e.detail
            })
        }
        console.log(e.detail);
    },
    // check
    selectChange(e) {
        // 判断是否选中
        console.log(typeof(e.currentTarget.dataset.checkedid[0]))
        console.log(e.currentTarget.dataset.checkedid[0])
        console.log(e.currentTarget.dataset.checkedid[1])
        let cart_list = wx.getStorageSync('cardlist')
        cart_list.forEach(item => {
            if (item.id == e.currentTarget.dataset.checkedid[1]) {
                item.checked = !item.checked
                if (item.checked) {
                    this.setData({
                        total: parseFloat(this.data.total) + parseFloat(e.currentTarget.dataset.checkedid[0])
                    })
                } else {
                    this.setData({
                        total: parseFloat(this.data.total) - parseFloat(e.currentTarget.dataset.checkedid[0])
                    })
                }
            }
        })
        this.setData({
            cart_list
        })
        wx.setStorageSync("cardlist", cart_list)
    },
    goPay() {
        let cart_list = wx.getStorageSync('cardlist');
        if (cart_list.some(item => item.checked == true)) {
            let book_buy = []
            cart_list.forEach(item => {
                if (item.checked) {
                    book_buy.push(item)
                }
            })
            wx.setStorageSync("book_buy", book_buy)
            wx.navigateTo({
                url: '/pages/index-detail-buy/index-detail-buy?total=' + this.data.total,
                success: function(res) {},
            })
        } else {
            wx.showToast({
                title: '请选择需要购买的书籍',
                icon: 'none',
                // image: '/images/1.png',
                duration: 2000
            })
        }
    },
    goDetail(e) {

        let id = JSON.stringify(e.currentTarget.dataset.item)
        wx.navigateTo({
            url: '/pages/index-detail/index-detail?id=' + id,

        })
    }
})