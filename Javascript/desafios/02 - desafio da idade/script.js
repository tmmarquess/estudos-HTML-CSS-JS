function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoForm = document.getElementById("txtano").value
    var res = document.getElementById("res")
    if(anoForm > anoAtual || anoForm.length == 0){
        alert("Há algo de errado com o ano")
    }else{
        var SexForm = document.getElementsByName("radsex")
        var idade = Number(anoAtual) - Number(anoForm)
        var sexo
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if(SexForm[0].checked){
            sexo = "homem"
            if(idade<10){
                img.setAttribute("src","foto-bebe-m.png")
            }else if(idade<21){
                img.setAttribute("src","foto-jovem-m.png")
            }else if(idade<50){
                img.setAttribute("src","foto-adulto-m.png")
            }else{
                img.setAttribute("src","foto-idoso-m.png")
            }
        }else{
            sexo = "mulher"
            if(idade<10){
                img.setAttribute("src","foto-bebe-f.png")
            }else if(idade<21){
                img.setAttribute("src","foto-jovem-f.png")
            }else if(idade<50){
                img.setAttribute("src","foto-adulto-f.png")
            }else{
                img.setAttribute("src","foto-idoso-f.png")
            }
        }
        
        res.innerHTML = `Você é ${sexo} com ${idade} anos<br>`
        res.appendChild(img)
    }
}