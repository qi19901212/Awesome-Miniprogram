// pages/codeSegment/codeSegment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    segments: [{
      id: 'marquee',
      name: '跑马灯'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  openItem: function(e) {
    var id=e.currentTarget.dataset.id
    console.log("Id===", e)
      wx.navigateTo({
        url: id +'/'+id,
      })
  }
})