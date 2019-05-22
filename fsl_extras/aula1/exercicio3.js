// Dado um vetor de números, como poderia ser realizada a soma de todos os valores ímpares utilizando reduce e filter.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const impares = item => item % 2 !== 0
const somador = (acumulador, valorAtual) => acumulador + valorAtual

const soma = numeros.filter(impares).reduce(somador, 0)

console.log("A soma dos valores ímpares é: ", soma)