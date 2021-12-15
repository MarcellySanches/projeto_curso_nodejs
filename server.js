//importando express
const express= require('express')
const session = require('express-session')

const app= express()

//convertendo para formato json
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine', 'ejs')

//consiguracoes de arquivos estaticos
app.use(express.static('./views/public'))

app.use(session({
    secret:'S]#W92kx',
    resave:false,
    saveUninitialized:false
}))

module.exports = app