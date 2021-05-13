/*APLICAÇÃO HTTP*/

/*CRIANDO UM SERIVDOR*/

var http = require('http');

http.createServer(function(req,res){
    res.end("Hello World Welcome to my website");   //end serve para enviar uma menssagem
}).listen(8081);

console.log("Hacked by lolitchuâni");
console.log("Servidor ligado!");