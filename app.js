const http = require('http');
http.createServer(function (req, res) {
console.log('1') 
 res.writeHead(230, {'Content-Type': 'text/plain'});
console.log('2')
  res.end("hahahah");
}).listen(6000,function() {
	console.log('来了')
});
console.log('Server running at http://47.104.24.70:8081/');
