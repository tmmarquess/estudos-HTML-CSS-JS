alert("Primeira mensagem em .js")
var y = confirm("Tua vida ta caótica agora né?")
var x
do {
    x = prompt("qual o seu nome mesmo?")
} while (x === null || x =='');
if(y === true){
    document.getElementById("nome").innerHTML = "Olá " + x + ", espero que tudo ocorra bem para você :)"
}else{
    document.getElementById("nome").innerHTML = "Olá " + x + ", que bom que está tudo bem para você :)"
}