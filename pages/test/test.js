Page({
  data: {
    var01: '冷风毅然',
    var02: '男'
  },
  onLoad: function () {
    var hjh="黄菊花";
    console.log(this.data.var01);//小程序变量 
    console.log(hjh);//js变量
    //改变变量值
    this.setData({
      var01:'2019'
    })
    console.log(this.data.var01);
  },
  onReady: function () {
    console.log('页面渲染完成')
  }
})
