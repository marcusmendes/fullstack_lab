const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (request, response) => {
    //response.send('<h1>Olá Fullstack Lab.</h1>')
    response.render('home')
})

app.get('/vaga', (request, response) => {
    //response.send('<h1>Olá Fullstack Lab.</h1>')
    response.render('vaga')
})

app.listen(3000, (err) => {
    if (err) {
        console.log("Erro ao iniciar o servidor!!!")
    } else {
        console.log("Servidor iniciado!!!")
    }
})