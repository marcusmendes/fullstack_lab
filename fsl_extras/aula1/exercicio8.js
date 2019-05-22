// Uma função é chamada da seguinte forma:
// calculadora(10, '+', 20)
// crie o corpo da função de forma que ela realize as 4 operações aritméticas

const soma = (num1, num2) => num1 + num2
const subtracao = (num1, num2) => num1 - num2
const multiplicacao = (num1, num2) => num1 * num2
const divisao = (num1, num2) => num1 / num2

const calculadora = (num1, operador, num2) => {
    switch (operador) {
        case "+":
            return soma(num1, num2)
        case "-": 
            return subtracao(num1, num2)
        case "*":
            return multiplicacao(num1, num2)
        case "/":
            return divisao(num1, num2)
        default:
            return "Operação não encontrada!!!"
    }
}

console.log(calculadora(10, '+', 20))
console.log(calculadora(10, '-', 20))
console.log(calculadora(10, '*', 20))
console.log(calculadora(10, '/', 20))