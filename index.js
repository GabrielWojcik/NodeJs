// Supports ES6
// import { create, Whatsapp } from 'sulla';
const sulla = require('sulla');

sulla.create().then((client) => start(client));  //client é o whatsapp
/*Essa função conecta a api do WhatsApp*/ 
function start(client) {
    client.onMessage((message) => {
      if (message.body === 'Hi') {
        client.sendText(message.from, '👋 Hello from sulla!');  //sendText mensagem de texto
      }
    });
  }

/*Armazenando os Dados diretamente no NodeJs (APRIMORAR PARA MONGO)*/ 
var banco = {
    user1:{
        stage : 0
    },
    user2:{
        stage : 0
    }
};
/*Assim que o cliente fazer login é possivel saber em qual estado ele está*/
var stages = {
    0:{
    descricao : "Boas Vindas",
    obj : require("./0"), /*Apontando para o Arquivo 0.js*/
    },
    1:{
        descricao : "Vendas",
        obj : require("./1"),  /*Apontando para o Arquivo 1.js*/
        },
    2:{
        descricao : "Resumo",
        obj : require("./2"),
        },
    3:{
        descricao : "Endereço",
        obj : require("./3"),
        },
    4:{
        descricao : "Enceramento",
        obj : require("./4"),
        },
};

/*Essa função mostra em qual estado o usuário se encontra*/
function getStage(user) {
    return banco[user].stage;
}

console.log(getStage("user1"));


