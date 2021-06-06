//1、引入express
const express = require('express')

//2、创建应用对象
const app = express()

//3、创建路由规则
//request是对请求报文的封装
//response是对响应报文的封装
app.get('/server',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置响应头  设置允许添加自定义响应头
    response.setHeader('Access-Control-Allow-Headers','*')
    //设置响应
    response.send('Hello AJAX GET -2')
})
//可以接受任意类型的请求
app.all('/server',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
     //设置响应头  设置允许添加自定义响应头
     response.setHeader('Access-Control-Allow-Headers','*')
    //设置响应
    response.send('Hello AJAX POST')
})
app.all('/json-server',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
     //设置响应头  设置允许添加自定义响应头
     response.setHeader('Access-Control-Allow-Headers','*')
    
    const data = {
        name:'liujie',
        gender:'male',
        age:'21'
    }
     //设置响应
    response.send(JSON.stringify(data))
})
//针对IE缓存
app.get('/ie',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置响应
    response.send('Hello IE4')
})
//延时相应
app.all('/delay',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
     //设置响应头  设置允许添加自定义响应头
     response.setHeader('Access-Control-Allow-Headers','*')
    //设置响应
    setTimeout(()=>{
        response.send('延时响应')
    },3000)
    
})
//jQuery服务
app.all('/jquery',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
     //设置响应头  设置允许添加自定义响应头
     response.setHeader('Access-Control-Allow-Headers','*')
    //设置响应
    const data = {
        name:'liujie',
        age:22,
        gender:'male'
    }
    // response.send('hello jQuery AJAX')
    response.send(JSON.stringify(data))
})
//axios服务
app.all('/axios',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
     //设置响应头  设置允许添加自定义响应头
     response.setHeader('Access-Control-Allow-Headers','*')
    //设置响应
    const data = {
        name:'liujie',
        age:22,
        gender:'male'
    }
    // response.send('hello jQuery AJAX')
    response.send(JSON.stringify(data))
})
//fetch服务
app.all('/fetch',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
     //设置响应头  设置允许添加自定义响应头
     response.setHeader('Access-Control-Allow-Headers','*')
    //设置响应
    const data = {
        name:'liujie',
        age:22,
        gender:'male'
    }
    // response.send('hello jQuery AJAX')
    response.send(JSON.stringify(data))
})
//jsonp服务
app.all('/jsonp',(request,response)=>{
    // response.send('console.log("hello jsonp")')
    const data = {
        name:'agtuigu'
    }
    //将数据转换为字符串
    let str = JSON.stringify(data)
    //返回结果
    // response.end('handle('+str+')')
    response.end(`handle(${str})`)
})  
//检测用户名
app.all('/check-username',(request,response)=>{
    // response.send('console.log("hello jsonp")')
    const data = {
        exist:1,
        msg:'用户名已经存在！'
    }
    //将数据转换为字符串
    let str = JSON.stringify(data)
    //返回结果
    // response.end('handle('+str+')')
    response.end(`handle(${str})`)
})  
//jquery-jsonp
app.all('/jquery-jsonp',(request,response)=>{
    // response.send('console.log("hello jsonp")')
    const data = {
        name:'atguigu',
        city:['北京','上海','深圳']
    }
    //将数据转换为字符串
    let str = JSON.stringify(data)
    //接受callback参数
    let cb = request.query.callback
    //返回结果
    // response.end('handle('+str+')')
    response.end(`${cb}(${str})`)
})  
//cors服务
app.all('/cors',(request,response)=>{
    //摄制响应头
    response.setHeader('Access-Control-Allow-Origin',"*")
    response.setHeader('Access-Control-Allow-Headers',"*")
    response.setHeader('Access-Control-Allow-Method',"*")
    response.end('hello cors')
})  
//4、监听端口启动服务
app.listen(8000,()=>{
    console.log('服务已启动，8000端口监听中')
})