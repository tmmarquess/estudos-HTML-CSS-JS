var texto = document.getElementById("data")
var data = new Date()
var diaSem = data.getDay()
var dia = data.getDate()
var mes = data.getMonth()
var ano = data.getFullYear()
var hora = data.getHours()
var minuto = data.getMinutes()

switch(diaSem){
    case 0: 
        diaSem = "Domingo"
        break;
        
    case 1:
        diaSem = "Segunda-Feira"
        break;

    case 2:
        diaSem = "Terça-Feira"
        break;

    case 3:
        diaSem = "Quarta-Feira"
        break;     

    case 4:
        diaSem = "Quinta-Feira"
        break;
        
    case 5:
        diaSem = "Sexta-Feira"
        break;

    case 6:
        diaSem = "Sábado"
        break;

}

switch(mes){
    case 0: 
        mes = "Janeiro"
        break;
        
    case 1:
        mes = "Fevereiro"
        break;

    case 2:
        mes = "Março"
        break;

    case 3:
        mes = "Abril"
        break;     

    case 4:
        mes = "Maio"
        break;
        
    case 5:
        mes = "Junho"
        break;

    case 6:
        mes = "Julho"
        break;

    case 7: 
        mes = "Agosto"
        break;
    case 8:
        mes = "Setembro"
        break;

    case 9:
        mes = "Outubro"
        break;

    case 10:
        mes = "Novembro"
        break;     

    case 11:
        mes = "Dezembro"
        break;

}

texto.innerHTML = `${diaSem}, ${dia} de ${mes} de ${ano}<br>${hora}:${minuto}`