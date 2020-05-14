// const $api = require("../../../utils/api.js")
Page({
    data: {
        checked: true,
        isconfirm_build: true,
        region: ['', '', ''],
        customItem: '全部',
        name:'',
        phone:'',
        content:''
        
    },
    onLoad: function(options) {
        console.log(options.id)
        this.setData({
            id: options.id,
            name: JSON.parse(options.id).name,
            phone: JSON.parse(options.id).phone,
            content: JSON.parse(options.id).content,
            // modify: JSON.parse(options.id),
            region: [JSON.parse(options.id).province, JSON.parse(options.id).city, JSON.parse(options.id).district]
        })
    },
    // 返回指定页面
    return_index: function() {
        wx.navigateBack({
            delta: 1,
        })
    },
    onChange({
        detail
    }) {
        // 需要手动对 checked 状态进行更新
        this.setData({
            checked: detail
        });
    },
    //点击确认创建招聘
    confirm_build: function () {
        if (this.data.content && this.data.name && this.data.phone) {
            const addressdata = {
                province: this.data.region[0], // 省
                city: this.data.region[1], // 市
                district: this.data.region[2], // 区
                content: this.data.content, // 详细地址
                name: this.data.name, // 姓名
                phone: this.data.phone, // 电话
            }
            if (wx.getStorageSync('address')) {
                let addressStorage = wx.getStorageSync('address')
                console.log(addressStorage)
                addressStorage.push(addressdata)
                wx.setStorageSync('address', addressStorage)
            } else {
                let address = []
                address.push(addressdata)
                wx.setStorageSync('address', address)
            }
            this.setData({
                isconfirm_build: false
            })
        } else {
            wx.showToast({
                icon: "none",
                title: '检查是否填写正确哦',
            })
        }
    },
    // 获取地址
    bindRegionChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            region: e.detail.value
        })
    },
    //name
    get_name: function(e) {
        console.log(e.detail.value)
        this.setData({
            name: e.detail.value
        })
    },
    //phone
    get_phone: function(e) {
        console.log(e.detail.value)
        this.setData({
            phone: e.detail.value
        })
    },
    //content
    get_content: function(e) {
        console.log(e.detail.value)
        this.setData({
            content: e.detail.value
        })
    },
})