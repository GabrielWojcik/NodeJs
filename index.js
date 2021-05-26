var express = require("express");

const app = express();

const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')


//Config
    //Template Engine
        app.engine('handlebars',handlebars({defaultLayout:'main'}))
        app.set('view engine','handlebars')

    //Conexao com o banco de dados MYSQL
        const sequelize = new Sequelize('sistemadecadastro','root','10440983924',{
            host:"localhost",
            dialect: 'mysql'
    })

//Rotas
    app.get('/cad',function(req,res){
        res.send('Rota de cadastro de posts')
    });
/*
app.get("/",function(req,res){ //REQ RECEBE RES MANDA
    //eviando um arquivo HTML
    res.sendFile(__dirname + "/html/index.html"); //send server para enviar algo //__dirname é uma variavel que retorna o diretorio padrao
});

app.get("/sobre",function(req,res){
    res.send.sendFile(__dirname+ "/html/sobre.html");
});

app.get("/blog",function(req,res){
    res.send("Bem-vindo ao meu blog");
});

app.get("/ola/:cargo/:nome/:cor",function(req,res){  // /:nome é um parametro
    // SO PODE USAR A FUNÇÃO SEND UMA VEZ 
    res.send("<h1>Ola  " +req.params.nome+ "</h1>"+"<h2>Seu cargo e: "+req.params.cargo+"</h2>"+"<h3>Sua cor favorita e: "+req.params.cor+"</h2>"); 
     //req recebe dados de uma requisição 
});

app.listen(8081,function(){
    console.log("Servidor Rodando na url: https://localhost:8081");
});
*/
