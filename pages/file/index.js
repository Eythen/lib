// pages/file/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths: '',  
  },

  image:function(){
    var that = this;
    wx.chooseImage({
      success: function(res) {
        // console.log(res);
        that.setData({
          tempFilePaths: res.tempFilePaths
        })  
      },
    })
  },

  look: function (e){
    // console.log(e.currentTarget.dataset.src);
    wx.previewImage({
      urls: [e.currentTarget.dataset.src[0]],
    })
  },

  upload:function(){
    wx.chooseImage({
      success: function(res) {
        var tempFilePaths = res.tempFilePaths;
        wx.uploadFile({
          url: 'http://farm.com/api/base/file',
          filePath: tempFilePaths[0],
          name: 'file',
          success: function (res) {
            console.log(res);
          }
        })
      },
    })
  },

  down:function(e){
    console.log(e.currentTarget.dataset.src);
    wx.downloadFile({
      url: e.currentTarget.dataset.src,
      success:function(res){
        console.log(res);
        wx.saveFile({
          tempFilePath: res.tempFilePath,
          success:function(res){
            console.log(res);
          }
        })
      }
    })
    // const downloadTask = wx.downloadFile({
    //   url: 'http://sw.bos.baidu.com/sw-search-sp/software/4ea1aa9dfac30/QQ_mac_6.2.1.dmg', //仅为示例，并非真实的资源
    //   success: function (res) {
    //     console.log(res);
    //   },
    //   fail:function(res){
    //     console.log(res);
    //   }
    // })
    // downloadTask.onProgressUpdate((res) => {
    //   console.log('下载进度', res.progress)
    //   console.log('已经下载的数据长度', res.totalBytesWritten)
    //   console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
    // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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