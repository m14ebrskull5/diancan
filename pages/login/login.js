// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    check: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },


  bindgetphonenumber(e) {
    console.log(e)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  check() {
    this.setData({
      check: !this.data.check
    })
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