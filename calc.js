//PARA CARREGAR UM MÓDULO   "REQUIRE" RETORNA O MODULO
var somaFunc = require("./soma")

var subFunc = require("./sub")

var multiFunc = require("./multi")

var divFunc = require("./div")


console.log(somaFunc(1,2))
console.log(subFunc(10,5))
console.log(multiFunc(10,10))
console.log(divFunc(32,2))



//REFATORANDO COM O NODE CRIAR UM ARQUIVO PARA CADA FUBÇÃO