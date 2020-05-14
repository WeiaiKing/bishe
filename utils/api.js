// utils/api.js
const app = getApp()
const $http = require('./http.js')


// 后台用户接口
const user = {
  //获取token
  login: (code, iv, data) => $http.post('/api/user/login', {
    code,
    iv,
    data
  }).then(res => res.data),
  //获取用户信息
  userInfo: (params) => $http.get('/api/user/self', {
    token: params.token
  }).then(res => res.data),
  //消息列表
  message: (params) => $http.get('/api/message/list', {
    token: params.token
  }).then(res => res.data)
}

// 等级接口
const rink = {
  // 一级分类列表
  first: () => $http.get('/api/type/list', {}).then(res => res.data),
  // 二级分类列表
  second: (params) => $http.get('/api/profession/list', {
    id: params.id,
  }).then(res => res.data),

}
// 商品接口
const commodity = {
  // 商品列表
  commodity_list: (params) => $http.get('/api/commodity/list', {
    id: params.id,
  }).then(res => res.data),
  // 商品列表详情
  commodity_detail: (params) => $http.get('/api/commodity/detail', {
    id: params.id,
  }).then(res => res.data),
}
// 地址接口
const address = {
  // 地址创建
  address_create: (params) => $http.post('/api/address/create', {
    token: params.token,
    province: params.province, // 省
    city: params.city, // 市
    district: params.district, // 区
    content: params.content, // 详细地址
    name: params.name, // 姓名
    phone: params.phone, // 电话

  }).then(res => res.data),
  // 地址列表
  address_list: (params) => $http.get('/api/address/list', {
    token: params.token
  }).then(res => res.data),
}
// 购物车接口
const cart = {
  // 加入购物车
  cart_add: (params) => $http.post('/api/cart/create', {
    token:params.token,
    commodity_id: params.commodity_id, // 商品id
    type_id: params.type_id, // 规格id
    number: params.number, // 数量
  }).then(res => res.data),
  // 购物车列表
  cart_list: (params) => $http.get('/api/cart/list', {
    token: params.token,
  }).then(res => res.data),
  // 创建订单
  order_create: (params) => $http.post('/api/order/create', {
    token:params.token,
    address_id: params.address_id, // 地址id
    commodity_id: params.commodity_id, // 商品id
    price: params.price, // 价格（以分为单位）

  }).then(res => res.data),
  // 订单状态改变
  order_status: (params) => $http.post('/api/order/status', {
    token: params.token,
    order_id: params.order_id, // 订单id
    change: params.change, // 状态 1:拒绝支付 2:取消订单 3: 待配送 4: 待收货 5: 已完成 6: 支付
  }).then(res => res.data),

}
module.exports = {
  user,
  rink,
  cart,
  commodity,
  address
}