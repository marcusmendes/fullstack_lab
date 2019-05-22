// Dado um vetor de valores, retorne um vetor com somente os valores únicos do vetor 
// (aqueles que ocorrem apenas 1 vez dentro do vetor) 
// (Dica 1: utilize reduce, filter e keys, Dica 2: escreva console.log(objeto.keys()) e veja como ele poderá te ajudar neste exercício)
const numeros = [1, 2, 1, 3, 2, 4, 3, 5, 6, 7, 8, 9, 7, 9]

const contarItens = (obj, current) => {
    obj[current] = (obj[current] || 0) + 1
    return obj
}

const objQtdItens = numeros.reduce(contarItens, {})

const unique = Object.keys(objQtdItens).filter(item => objQtdItens[item] == 1)

console.log(objQtdItens, unique)