var express = require('express');
var fs = require('fs')
var bodyParser = require('body-parser');

var app = express();
var compression = require('compression')

app.listen(2000,() => {
	console.log('服务启动成功 2000')
})
var rs = fs.createReadStream('./index.html',{
        flags:'r',  //表示打开文件之后想干什么 'r' 读，（'w' 写），默认是'r'
        //encoding:'utf-8' // 得到对象使Buffer 对象，如果指定编码那么得到就是字符串类型
    })
rs.setEncoding('utf-8')
rs.on('data',function(data){
    // console.log(data)
    	app.get('*', (req, res) => {
  
	      res.send(data)
	   
	  
		})
})
rs.on('end',function(data){ 
	console.log( '文件读完了' )

  })
rs.on('error',function( err ){  console.log('读取文件失败'+err )  })
// 3,使用中间件
app.use(bodyParser.urlencoded({extended:false}))

app.use('/login',require('./login'))
app.use('/reg',require('./reg'))
app.use(compression())



