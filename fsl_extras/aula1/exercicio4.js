// Dado um vetor de valores, retorne um objeto com quantas vezes cada valor está presente no vetor (dica: utilize reduce)
const numeros = [1, 2, 1, 3, 2, 4, 3, 5, 6, 7, 8, 9, 7, 9]

const valores = (prev, current) => {
    prev[current] = (prev[current] || 0) + 1
    return prev
}

const obj = numeros.reduce(valores, {})

console.log("Número de itens repetidos: ", obj)