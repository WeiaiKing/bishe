Page({
    data: {

    },
    onLoad: function(options) {

    },
    go_address_editor(e) {
        console.log(e.currentTarget.dataset.item)
        let id = JSON.stringify(e.currentTarget.dataset.item)
        wx.navigateTo({
            url: '../user-address-editor/user-address-editor?id='+id,
        })
    },
    onShow: function() {
        this.setData({
            address_list: wx.getStorageSync('address')
        })
    }
})