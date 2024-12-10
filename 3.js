// Crie um programa que receba três notas, calcula a média e informe se o aluno foi aprovado (média maior ou igual a 7) ou reprovado (média menor que 7).

const nota1 =  Number(prompt("Nota 1: "))
const nota2 =  Number(prompt("Nota 2: "))
const nota3 =  Number(prompt("Nota 3: "))

const media = (nota1 + nota2 + nota3) / 3

if(media >= 7){
    console.log("Aprovado!")
}else{
    console.log("Reprovado!")
}
