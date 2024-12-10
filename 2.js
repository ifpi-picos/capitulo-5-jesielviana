let num1 = parseInt(prompt("Digite o primeiro numero: "))
let num2 = parseInt(prompt("Digite o segundo numero: "))
let num3 = parseInt(prompt("Digite o terceiro numero: "))
let numeroMaior

if (num1 > num2 && num1 > num3) {
    numeroMaior = num1
} else if (num2 > num3 && num2 > num1) {
    numeroMaior = num2
} else {
    numeroMaior = num3
}

console.log("O maio numero digitado é : ", numeroMaior)
