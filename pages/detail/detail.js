//调用Page函数为detail页面注册页面对象
Page({
    //获取detail页在初始化时获取本次打开被指定的页面参数id
    onLoad:function(option) {
        // console.log(option.id)
        //通过this.setData将获取的页面id保存到内部数据变量mid中
        this.setData({
            mid:option.id
        })
    }
})