let entrada = prompt("Digite um número: ")

const numero = parseInt(entrada)

const restoDivisao = numero % 2

if (restoDivisao === 0) {
    console.log('número par')
} else {
    console.log('número ímpar')
}
