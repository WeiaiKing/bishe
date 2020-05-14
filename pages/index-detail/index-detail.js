const {about} = require("../../utils/util.js")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        id: '', //对应商品id
        zan_img: '/images/zan1.png',
        activeNames: ['0'],
        select: 1,
        cartNum: '',
        id: '',
        public: false
    },
    // select
    select(e) {
        console.log(e)
        this.setData({
            select: e.currentTarget.dataset.id
        })
    },
    //panel
    onChange(event) {
        this.setData({
            activeNames: event.detail
        });
    },
    // 记步数
    onStepNum(event) {
        console.log(event.detail);
    },
    //add_cart
    add_cart: function() {
        this.setData({
            add_cart: true
        });
    },
    add_buy: function() {
        this.setData({
            select: 1,
            add_buy: true
        });
    },

    add_cart_cloce() {

        this.setData({
            add_cart: false
        });
    },
    add_buy_cloce() {
        this.setData({
            add_buy: false
        });

    },
    cart_confirm() {
        let cardlist = wx.getStorageSync("cardlist")
        if (cardlist == '') {
            cardlist = []
        }
        cardlist.push(JSON.parse(this.data.id))
        wx.setStorageSync("cardlist", cardlist)
        wx.showToast({
            title: '添加成功',
            icon: 'success',
            duration: 2000
        })
        this.setData({
            cartNum: this.data.cartNum + 1,
            add_cart: false
        });
        // 添加购物车
        // $api.cart.cart_add({
        //     token: wx.getStorageSync('token'),
        //     commodity_id: this.data.id, // 商品id
        //     type_id: 1, // 规格id
        //     number: 1, // 数量
        // }).then((e) => {
        //     wx.showToast({
        //         title: '添加成功',
        //         icon: 'success',
        //         duration: 2000
        //     })
        //     this.setData({
        //         cartNum: this.data.cartNum + 1,
        //         add_cart: false
        //     });
        //     console.log('cart_add', e)
        // })
    },
    buy_confirm() {
        let book = [JSON.parse(this.data.id)]
        wx.setStorageSync("book_buy", book)
        wx.navigateTo({
            url: '../index-detail-buy/index-detail-buy',
            success: function(res) {},
        })
    },
    //   评分
    goStar() {
        wx.navigateTo({
            url: '../index-detail-star/index-detail-star?id=' + this.data.id,
            success: function(res) {},
        })
    },
    //   评论
    goComment() {
        wx.navigateTo({
            url: '../index-detail-comment/index-detail-comment?id=' + this.data.id,
            success: function(res) {},
        })
    },
    // 点赞
    changeImg(e) {
        console.log(e)
        if (e.currentTarget.dataset.url == '/images/zan2.png') {
            this.setData({
                zan_img: '/images/zan1.png',
            })
        } else {
            this.setData({
                zan_img: '/images/zan2.png',

            })
        }

    },
    //   详情页
    go_detail(e) {
        console.log(e)
        console.log(e.currentTarget.dataset.item)
        let id = JSON.stringify(e.currentTarget.dataset.item)
        wx.redirectTo({
            url: '../index-detail/index-detail?id=' + id,
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        console.log(about)
        if (options.public) {
            this.setData({
                public:true
            })
        }
        console.log(options.id)
        this.setData({
            aboutData: about,
            id: options.id,
            cartNum: wx.getStorageSync("cardlist").length,
            detail: JSON.parse(options.id)
        })
    },
})