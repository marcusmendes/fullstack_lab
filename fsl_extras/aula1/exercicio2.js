// Dado um vetor de números, como poderia ser realizada a soma de todos os valores pares utilizando reduce e filter.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const pares = item => item % 2 === 0
const somador = (acumulador, valorAtual) => acumulador + valorAtual

const somaPares = numeros.filter(pares).reduce(somador, 0)

console.log("A soma dos valores pares é: ", somaPares)
