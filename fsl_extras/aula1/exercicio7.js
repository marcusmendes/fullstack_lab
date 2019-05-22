// Dado um vetor com números, retorne somente os números ímpares;
const numeros = [1, 2, 1, 3, 2, 4, 3, 5, 6, 7, 8, 9, 7, 9]

const impares = item => item % 2 !== 0

const numerosImpares = numeros.filter(impares)

console.log(numerosImpares)