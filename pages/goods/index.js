// pages/goods/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [
        { 
            id: 1,
            name: 'Apple iPhone 7 (A1660) 32G 玫瑰金色 移动联通电信4G手机', 
            price:500,
            image:[
                '/images/5857528e586c2.jpg',
                '/images/585752b28cd0c.jpg',
                '/images/585752b296363.jpg'
            ]
        }  
      ],
      indicatorDots: true, //是否显示面板指示点
      //autoplay: true, //是否自动切换
      //interval: 3000, //自动切换时间间隔
      duration: 500, //滑动动画时长
      currentId: 'item1', // 当前选中元素的标识符 
  },
  handleClick: function(event) {  
    const id = event.currentTarget.dataset.id; // 获取点击元素的标识符  
    this.setData({  
      currentId: id, // 设置当前选中元素的标识符  
    });  
  },   
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

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