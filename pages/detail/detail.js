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
        //wx.request方法的调用为异步调用,每一次调用request方法后不会阻塞,会立马返回;返回后执行对应的语句或者逻辑
        wx.request({
            //来指定请求的网址
            url: 'https://api.douban.com/v2/movie/subject/'+option.id+'?apikey=0df993c66c0c636e29ecbb5344252a4a&qq-pf-to=pcqq.group',
            //指定请求使用何种方法
            // method: "GET",//默认使用GET方法
            //在请求中捎带数据参数传输给Server
            // data: {
            //     x: 1, y: 2
            // },
            //header参数对请求的header字段进行设置_原数据
            //此时会报400_Bad Request,需要设置header的Content-Type参数为json,获取数据OK
            header: {
                "Content-Type":"json"
            },
            //当小程序接收到服务器返回的response后该如何处理_通过对应回调函数的指令完成的
            success: function (res) {
                //打印res结果返回不存在request合法域名列表
                //[小程序后台-开发-开发设置-服务器域名]中登记域名
                console.log(res)
                /**
                 * success回调函数接收到的res对象包含response中的关键数据:
                 * 1.data属性:抽取了response body中的文本然后转化成的字符串
                 *   因为header中返回的Content-Type是text的html,则返回的是字符串包含在
                 *   data属性中;如果Content-Type返回的是AplicationJson格式,打他属性中
                 *   则包含的是Json文本;小程序运行环境会进一步对Json文件进行解析为对应的
                 *   JavaScript的值,保存在data属性中;
                 * 2.header属性:把收到的response中所有的header字段以及对应的取值抽取出来封
                 *   装为一个对应的JavaScript对象;
                 * 3.statusCode属性:直接抽取response的状态码,然后进行保存;
                 */
            },
            fail: function () {

            },
            complete: function () {

            }
        })
        console.log("ok")
    }
})