Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  getCode: function () {
    wx.login({
      success: function (res) {
        console.log('code为' + res.code);
      }
    });
  },

  getToken:function(){
    var that = this;
    wx.login({
      success: function (res) {
        wx.request({
          url:'http://farm.com/api/token/user',
          method:'POST',
          data:{"code":res.code},
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {
            console.log(res.data);
            wx.setStorageSync('token', res.data.token);
          }
        })
      }
    });
  },

  goPlace:function(){
    wx.navigateTo({
      url: '../pay/pay',
    })
  },
  
  goTemplate:function(){
    wx.navigateTo({
      url: '../template/index'
    })
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})