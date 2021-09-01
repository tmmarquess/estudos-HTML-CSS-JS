var x,y;

do {
    x = Number(prompt("Digite um numero"))
} while (isNaN(x) === true);
do {
    y = Number(prompt("Digite outro numero"))
} while (isNaN(y) === true);
var soma = x+y
document.getElementById("soma").innerHTML = `${x} + ${y} = ${soma}`

function responda() {
    var nome = prompt("Digite seu nome")   
    var idade = prompt("Digite sua idade")
    var escola = prompt("Digite onde você estuda")
    /* se uma string ficar entre crases ao invés de aspas, as variáveis podem ser chamadas dentro da string com o símbolo
    ${variavel} */
    var resposta = `O aluno ${nome}, de ${idade} anos estuda na instituição ${escola}`
    document.getElementById("responda").innerHTML = resposta
}