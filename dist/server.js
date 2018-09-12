var express = require('express');
var path = require('path')
var fs = require('fs')
var bodyParser = require('body-parser');

var app = express();
var compression = require('compression')
// serve our static stuff like index.css
app.use(express.static(path.join(__dirname), {index: false}))
app.get('*', (req, res) => {
  
      res.send(renderPage())
   
  
})
function renderPage() {
	return `
		<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="aplus-terminal" content="1">
  <meta name="apple-mobile-web-app-title" content="猫茂天地">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
  <meta name="format-detection" content="telephone=no, address=no">
  <title>猫茂天地</title>
  <link rel="stylesheet" href="./index.css" />
 
</head>

<div id="root"></div>

<script src="./index.js"></script>

</body>
</html>

	`
}

app.listen(6000,() => {
	console.log('服务启动成功 6000')
})

