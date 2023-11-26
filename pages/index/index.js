// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoplay: false,
    duration: 300,
    swiperList: [
      "https://app-images.kiwa-tech.com/app/collection/image/b7f2fc1a8af34911b3c391e5331ba0a2-750-480.jpeg",
      "https://app-images.kiwa-tech.com/app/collection/image/641da19cf25248d2ae87733be21b6477-750-480.jpeg"
    ]
  },

  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  navToLogin() {
    wx.navigateTo({
      url: '../login/login',
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})