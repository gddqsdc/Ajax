//1、引入express
const express = require('express')

//2、创建应用对象
const app = express()

app.all('/data',(request,response)=>{
    response.send("hello jsonp")
    
})  
//4、监听端口启动服务
app.listen(9000,()=>{
    console.log('服务已启动，9000端口监听中')
})


const data = {
    name:'agtuigu'
}
console.log(data)
//处理数据
// function handle(data){
//     const result = document.getElementById('result')
//     result.innerHTML = data.name
// }
// handle(data)