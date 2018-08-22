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
  place: function () {
    var pigs = [
      {
        'pig_id':24,
      },
    ]
    wx.request({
      url: 'https://m.septfarm.com/api/pig/place',
      method: 'POST',
      data: {
        'consign': 1,
        'name':'爱迪生',
        'mobile':'13176545673',
        'partition':'整猪分割',
        'pigs': pigs,
      },
      header: {
        'content-type': 'application/json',
        'token': wx.getStorageSync('token'),
      },
      success: function (res) {
        console.log(res);
      }
    })
  },

  pay: function () {
    wx.request({
      url: 'https://m.septfarm.com/api/pay/pre_order',
      method: 'POST',
      data: {
        'id': 8,
        'type':3,
      },
      header: {
        'content-type': 'application/json',
        'token': wx.getStorageSync('token'),
      },
      success: function (res) {
        console.log(res.data);
        wx.requestPayment({
          'timeStamp': res.data.timeStamp,
          'nonceStr': res.data.nonceStr,
          'package': res.data.package,
          'signType': 'MD5',
          'paySign': res.data.paySign,
          'success': function (res) {
            console.log(res);
          },
          'fail': function (res) {
            console.log(res);
          }
        })
      }
    })
  },

  refund: function () {
    var that = this;
    wx.login({
      success: function (res) {
        wx.request({
          url: 'https://m.septfarm.com/api/pay/refund',
          method: 'POST',
          data: { "order_id": 8 },
          header: {
            'content-type': 'application/json',
            'token': wx.getStorageSync('token'),
          },
          success: function (res) {
            console.log(res.data);
            wx.setStorageSync('token', res.data.token);
          }
        })
      }
    });
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