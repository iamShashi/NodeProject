var serve = require('http');

serve.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end("Here is the data Take and Leave");
}).listen(8081,'192.168.56.1');

console.log("Up and RUnning");