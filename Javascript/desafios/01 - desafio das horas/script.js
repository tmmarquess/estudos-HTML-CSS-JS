const interval = setInterval(() =>{
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    if(hora < 6){
        img.src='dia02.png';
        document.body.style.backgroundColor = "#778AA8"
        msg.innerHTML = "Boa Madrugada!<br>"
    }else if(hora < 12){
        img.src='dia01.png';
        document.body.style.backgroundImage = "linear-gradient(to right,#566D8C,#969DAD,#CACACA)"
        msg.innerHTML = "Bom Dia!<br>"
    }else if(hora<18){
        img.src="tarde.png";
        document.body.style.backgroundImage = "linear-gradient(to right,#353B41,#6D5F53,#7D624F)"
        msg.innerHTML = "Boa Tarde!<br>"
    }else{
        img.src='noite.png';
        document.body.style.backgroundImage = "linear-gradient(to right,#7A5670,#5D5273,#484E72)"
        msg.innerHTML = "Boa Noite!<br>"
    }
    if(hora != 1){
        msg.innerHTML += `Agora são ${hora} horas e ${minutos}`     
    }else{
        msg.innerHTML += `Agora são ${hora} hora e ${minutos}`     
    }
    if(minutos != 1){
        msg.innerHTML += " minutos"
    }else{
        msg.innerHTML += " minuto"
    }
},1000) //essa função const interval = setInterval(() =>{*função*},1000) refaz essa função a cada 1 segundo (= 1000ms)