// app.get('/', (request, response) => {

// })

console.log(1)

setTimeout(() => {
    console.log('Olá em 2 segundos.')
}, 2000)

console.log(2)

let count = 0
let interval = setInterval(() => {
    console.log("olá")
    
    if (count > 15) {
        clearInterval(interval)
    }

    count++
}, 1000)

let interval2 = setInterval(() => {
    console.log("olá2")
    
    if (count > 5) {
        clearInterval(interval)
    }

    count++
}, 500)

console.log(3)