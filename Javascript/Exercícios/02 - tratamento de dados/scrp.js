document.write("criei uma linha dentro do HTML usando javascript :)")
document.writeln(" criei uma linha e dessa vez fez quebra de linha pra próxima") /*ambos comandos não funcionam por causa da 'defer'*/ 
var n = Number(prompt("Digite um numero").replace(',','.'))
document.getElementById("fixado").innerHTML += `${n} em toFixed(2) = ${n.toFixed(2)}`

document.getElementById("trocar").innerHTML += `${n} em toFixed(2).replace('.',',') = ${n.toFixed(2).replace('.',',')}`

/* formatar numeros em modelo de moeda */
var num = 1590.70
document.getElementById("monetario").innerHTML = num.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'}) + " | " + num.toLocaleString('pt-BR',{style: 'currency', currency: 'USD'}) +" | "+ num.toLocaleString('pt-BR',{style: 'currency', currency: 'EUR'})