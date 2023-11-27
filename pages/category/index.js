// pages/goods/list.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      btData: [  
          { id: 1, name: '默认' },  
          { id: 2, name: '销量'},  
          { id: 3, name: '评论数'},  
          { id: 4, name: '价格'},  
      ] , 
      listData: [  
          { id: 1, name: '黑色全球限量版时尚小皮包', image: '/images/shop1.jpg', price: '999.99' },  
          { id: 2, name: '红色新年款时尚小皮包', image: '/images/shop2.jpg', price: '159.9' },  
          { id: 3, name: '黑色全球限量版时尚小皮包', image: '/images/shop3.jpg', price: '666.66' },  
          { id: 4, name: '黑色全球限量版时尚小皮包', image: '/images/shop5.jpg', price: '888.88' },  
          { id: 1, name: '黑色全球限量版时尚小皮包', image: '/images/shop1.jpg', price: '999.99' },  
          { id: 2, name: '红色新年款时尚小皮包', image: '/images/shop2.jpg', price: '159.9' },  
          { id: 3, name: '黑色全球限量版时尚小皮包', image: '/images/shop3.jpg', price: '666.66' },  
          { id: 4, name: '黑色全球限量版时尚小皮包', image: '/images/shop5.jpg', price: '888.88' },  
          { id: 1, name: '黑色全球限量版时尚小皮包', image: '/images/shop1.jpg', price: '999.99' },  
          { id: 2, name: '红色新年款时尚小皮包', image: '/images/shop2.jpg', price: '159.9' },  
          { id: 3, name: '黑色全球限量版时尚小皮包', image: '/images/shop3.jpg', price: '666.66' },  
          { id: 4, name: '黑色全球限量版时尚小皮包', image: '/images/shop5.jpg', price: '888.88' },  
        ],
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