Page({
  data:{
    weeklyMovieList:[
    {
      name:"教父",
      comment:"最精彩的剧本,最真实的黑帮电影",
      imagePath:"/images/jf.jpg",
      isHighlyRecommended:true

    },
    {
      name:"泰坦尼克号",
      comment:"失去的才是永恒的",
      imagePath:"/images/titanic.jpg",
      isHighlyRecommended:false
    },
    {
      name:"这个杀手不太冷",
      comment:"小萝莉与怪叔叔纯真浪漫的爱情故事",
      imagePath:"/images/zgssbtl.jpg",
      isHighlyRecommended:false
    }
  ],
    count:123,
    score:61,
    //3.然后在页面的页面对象data中添加内部状态变量的定义并初始化为0
    currentIndex:0
  },
  //4.使用onLoad方法对currentIndex真正初始化为数组最后一个序号
  onLoad:function (options){
    this.setData({
      currentIndex:this.data.weeklyMovieList.length-1
    })
  }
})
/**假如博主三周推荐的是这三部电影， */