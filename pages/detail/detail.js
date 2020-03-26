//调用Page函数为detail页面注册页面对象
Page({
    //获取detail页在初始化时获取本次打开被指定的页面参数id
    onLoad:function(option) {
        console.log(option.id)
    }
})