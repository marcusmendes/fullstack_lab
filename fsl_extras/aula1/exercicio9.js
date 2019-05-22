// Modifique a calculadora do exercício anterior para que ela receba 2 números e uma função, e realize o cálculo.
const soma = (num1, num2) => num1 + num2
const subtracao = (num1, num2) => num1 - num2
const multiplicacao = (num1, num2) => num1 * num2
const divisao = (num1, num2) => num1 / num2

const calculadora = (num1, operador, num2) => operador(num1, num2)

console.log(calculadora(10, soma, 20))
console.log(calculadora(10, subtracao, 20))
console.log(calculadora(10, multiplicacao, 20))
console.log(calculadora(10, divisao, 20))