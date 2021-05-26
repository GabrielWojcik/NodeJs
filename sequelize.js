//CONECTAR NO BANCO DE DADOS
const Sequelize = require('sequelize')
const sequelize = new Sequelize('sistemadecadastro','root','10440983924',{
    host:"localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro)
})





//MODELS 


const Postagem = sequelize.define('postagens',{
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})

//Postagem.sync({force: true}) //sincronizar o model com o MYSQL

//inserir novos dados
/*Postagem.create({
    titulo:"UM TITULO QUALQUER",
    conteudo:"um conteudo qualquer"
})
*/

const Usuario = sequelize.define('usuarios',{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type:Sequelize.STRING
    },
    idade:{
        type:Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
})

//Usuario.sync({force:true})

Usuario.create({
    nome:"Gabriel",
    sobrenome:"Wojcik",
    idade:19,
    email:"gabrielwojcikv@gmail.com"
})