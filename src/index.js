const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

require('./controllers/authController')(app)
require('./controllers/notifications')(app)

app.listen(5000, ()=>{
    console.log('app rodando na porta 5000')
})