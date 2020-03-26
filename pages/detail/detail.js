//调用Page函数为detail页面注册页面对象
Page({
    //获取detail页在初始化时获取本次打开被指定的页面参数id
    onLoad: function (option) {
        // console.log(option.id)
        //通过this.setData将获取的页面id保存到内部数据变量mid中
        this.setData({
            mid: option.id
        })
        //演示:添加wx.request方法调用
        wx.request({
            //来指定请求的网址
            url: 'https://api.douban.com/v2/movie',
            //指定请求使用何种方法
            method: "GET",
            //在请求中捎带数据参数传输给Server
            data: {
                x: 1, y: 2
            },
            //header参数对请求的header字段进行设置_原数据
            header: {

            },
            //当小程序接收到服务器返回的response后该如何处理_通过对应回调函数的指令完成的
            success: function (res) {
                //打印res结果返回不存在request合法域名列表
                //[小程序后台-开发-开发设置-服务器域名]中登记域名
                console.log(res)
            },
            fail: function () {

            },
            complete: function () {

            }
        })
    }
})