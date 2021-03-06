Page({
  data: {
    //为每一个电影新增id
    weeklyMovieList: [
      {
        name: "教父",
        comment: "最精彩的剧本,最真实的黑帮电影",
        imagePath: "/images/jf.jpg",
        isHighlyRecommended: true,
        id: 1291841,
      },
      //将其他电影的id修改正确
      {
        name: "泰坦尼克号",
        comment: "失去的才是永恒的",
        imagePath: "/images/titanic.jpg",
        isHighlyRecommended: false,
        id: 1292722,
      },
      {
        name: "这个杀手不太冷",
        comment: "小萝莉与怪叔叔纯真浪漫的爱情故事",
        imagePath: "/images/zgssbtl.jpg",
        isHighlyRecommended: false,
        id: 1295644,
      }
    ],
    count: 123,
    score: 61
    //3.然后在页面的页面对象data中添加内部状态变量的定义并初始化为0
    //此处的currentIndex定义可以省略掉,可以直接在this.setData方法中定义
    // currentIndex:0
  },
  //4.使用onLoad方法对currentIndex真正初始化为数组最后一个序号
  onLoad: function (options) {
    this.setData({
      //此处定义即可
      currentIndex: this.data.weeklyMovieList.length - 1
    })
  },
  //返回每周触发事件函数f0完成
  f0: function (event) {
    this.setData({
      currentIndex: this.data.weeklyMovieList.length - 1
    })
  },
  /**
   * 5.附注:介绍其它几个生命周期函数的使用
   * onShow方法:当页面每一次显示的时候都会调用一次(每次页面从隐藏到显示状态都会被调用)
   * onReady方法:当页面初始渲染完成后调用
   * onHide方法:当页面每次隐藏的时候调用一次
   * onUnload方法:当页面被关闭或卸载的时候被调用
   */
  // onShow:function(){

  // },
  // onReady:function(){

  // },
  // onHide:function(){

  // },
  // onUnload:function(){

  // },
  /**
   * 2.新增实例代码f1的定义,读取内部状态变量值没有问题
   * 
   */
  f1: function (event) {
    // console.log(this.data.count)
    //通过对内部状态直接赋值的方式,不能让对应的框架更新视图部分,本身内部被写入了,但是绑定了内部变量的视图部分并没有真正的更新,这样的方式很容易数据不一致
    //在小程序中对内部状态数据进行更新，不能采用直接赋值写入的方式，
    // this.data.count = this.data.count + 1
    //3.通过this.SetData的方式进行更新成功
    this.setData({
      count: this.data.count + 1,
      //使用this.setData对局部数据进行更新
      "weeklyMovieList[2].name": "这个杀手不太冷2"
    })
  },
  //f2事件函数:实现从当前也跳转到目标详情页
  f2: function (event) {
    //保存获取到的movieId
    var movieId = event.currentTarget.dataset.movieId
    // console.log(movieId),
    //打印event.currentTarget
    // console.log(event.currentTarget),
    wx.navigateTo({
      //如何在这个事件处理函数中找到此次页面跳转，需要指定的ID取值
      //实现点击跳转显示对应电影的详细信息
      //希望detail页被打开时,自身能够知道在对应的完整的url中，被指定的ID参数是多少？
      url: '/pages/detail/detail?id=' + movieId,
    })
  },
  //添加onShareAppMessage方法的定义实现转发按钮_默认转发生成应用消息上标题为该小程序名称
  onShareAppMessage:function() {
    //定制"每周推荐"标题
    return {
      title:"每周推荐"
    }
  }
})
/**假如博主三周推荐的是这三部电影， */