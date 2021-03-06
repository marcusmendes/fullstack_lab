// A lista de arquivos retornado no exercício anterior,
// também retorna diretórios. Crie uma função que retorne todos os sub-diretórios em um vetor 
// (deve-se ignorar os arquivos retornados pelo readdir).
const fs = require('fs')
const path = require('path')

const readDir = (dir) => new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
        if (err) {
            reject(err)
        } else {
            resolve(files)
        }
    })
})

const isDirectory = async (path) => {
    const stats = await stat(path) 
    return stats.isDirectory() ? path : false
}

const stat = (path) => new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
        if (err) {
            reject(err)
        } else {
            resolve(stats)
        }
    })
})

const execute = async () => {
    const files = await readDir('./')
    const mapDir = await Promise.all(files.map(file => isDirectory(file)))
    const directories = mapDir.filter(d => d)
    console.log(directories);
}

execute()

// const diretorio = (dir) => new Promise((reject, resolve) => {
//     fs.stat(dir, (err, stats) => {
//         if (err) {
//             reject(err)
//         } else {
//             if (stats.isDirectory()) {
//                 resolve(dir)
//             }
//        }
//     })
// })

// const diretorios = async (dir) => {

//     try {
//         const files = await readDir(dir)

//         let promises = []

//         files.forEach(file => {
//             promises.push(diretorio(path.join(dir, file)))
//         });

//         Promise.all(promises).then(results => {
//             console.log(results)
//         }).catch((err) => {
//             console.log(err)
//         })

//     } catch (err) {
//         console.log(err)
//     }
// }

// diretorios('.')