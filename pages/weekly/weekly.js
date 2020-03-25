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
  },
  /**
   * 5.附注:介绍其它几个生命周期函数的使用
   * onShow方法:当页面每一次显示的时候都会调用一次(每次页面从隐藏到显示状态都会被调用)
   * onReady方法:当页面初始渲染完成后调用
   * onHide方法:当页面每次隐藏的时候调用一次
   * onUnload方法:当页面被关闭或卸载的时候被调用
   */
  onShow:function(){

  },
  onReady:function(){

  },
  onHide:function(){

  },
  onUnload:function(){

  },
  /**
   * 2.新增实例代码f1的定义,读取内部状态变量值没有问题
   */
  f1: function (event) {
    // console.log(this.data.count)
    //通过对内部状态直接赋值的方式,不能让对应的框架更新视图部分,本身内部被写入了,但是绑定了内部变量的视图部分并没有真正的更新,这样的方式很容易数据不一致
    //在小程序中对内部状态数据进行更新，不能采用直接赋值写入的方式，
    this.data.count = this.data.count + 1
  }
})
/**假如博主三周推荐的是这三部电影， */