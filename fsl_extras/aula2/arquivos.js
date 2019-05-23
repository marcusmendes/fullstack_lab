const {readFile, writeFile} = require('./fs-promise')

//callback hell
// fs.readFile('temporizadores.js', (err, data) => {
//     fs.writeFile('temporizador-copy.js', data, (err) => {
//         console.log('Arquivo copiado.')
//     })
// })

// promises + async/await


/*
readFile('temporizadores.js')
    .then(data => writeFile('copia-promise.js', data))
    .then(() => console.log('Arquivo copiado!!'))
    .catch(err => console.log(err))
*/

// async/await
const copyFile = async () => {
    console.log('Async/Await')

    try {
        const data = await readFile('temporizadores.js')
        await writeFile('copy_async_await.js', data)
        //console.log(String(data))
        console.log('Arquivo lido e escrito.')
    } catch(err) {
        console.log('erro: ', err)
    }
}

copyFile().then(() => console.log('fim do async/await!'))
