const express = require('express')
const sqlite = require('sqlite')
const app = express()

const dbconnection = sqlite.open('banco.sqlite', { Promise })

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', async (request, response) => {
    //response.send('<h1>Olá Fullstack Lab.</h1>')
    const db = await dbconnection
    const categorias = await db.all('select * from categorias;')
    response.render('home', {
        categorias
    })
})

app.get('/vaga', (request, response) => {
    //response.send('<h1>Olá Fullstack Lab.</h1>')
    response.render('vaga')
})

const init = async () => {
    const db = await dbconnection
    await db.run('create table if not exists categorias (id integer primary key, categoria text)')
    //const categoria = 'Marketing team'
    //await db.run(`insert into categorias (categoria) values ('${categoria}')`)
}

init()

app.listen(3000, (err) => {
    if (err) {
        console.log("Erro ao iniciar o servidor!!!")
    } else {
        console.log("Servidor iniciado!!!")
    }
})