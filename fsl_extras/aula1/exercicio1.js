// Dado um vetor de números, como poderia ser realizada a soma de todos os valores utilizando reduce.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const somador = (acumulador, valorAtual) => acumulador + valorAtual

const soma = numeros.reduce(somador, 0)

console.log('A soma dos valores do vetor é: ', soma)