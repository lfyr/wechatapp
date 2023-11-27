Page({
  data: {
    imgUrls: [
      '/images/0da8eb94-0159-4700-a6a5-bc007da5a853.jpg',
      '/images/61647775-f5d0-4cfe-b84f-96060eb8e2e3.jpg',
      '/images/efa1dc7b-1375-4876-acae-e344cae7d55c.jpg'
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔
    duration: 500, //滑动动画时长
    products: [  
        { id: 1, name: '黑色全球限量版时尚小皮包', image: '/images/shop1.jpg', price: '999.99' },  
        { id: 2, name: '红色新年款时尚小皮包', image: '/images/shop2.jpg', price: '159.9' },  
        { id: 3, name: '黑色全球限量版时尚小皮包', image: '/images/shop3.jpg', price: '666.66' },  
        { id: 4, name: '黑色全球限量版时尚小皮包', image: '/images/shop5.jpg', price: '888.88' },  
      ] ,
    category: [  
        { id: 1, name: '热门', image: '/images/icon_rm.png' },  
        { id: 2, name: '精品', image: '/images/icon_tm.png'},  
        { id: 3, name: '新品', image: '/images/theme.png' },  
        { id: 4, name: '品牌', image: '/images/icon_pp.png'},  
    ]  
  },
})


