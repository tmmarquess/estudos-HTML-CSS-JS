function contar() {
    var ini = document.getElementById("inicio").value
    var fim = document.getElementById("fim").value
    var inc = document.getElementById("passo").value
    var res = document.getElementById("res")
    //condição para o início vazio e para o passo 0
    if(ini == "" || fim == "" || inc == ""){
        alert("Nenhum campo pode ser vazio!")
    }else{
        ini = Number(ini)
        fim = Number(fim)
        inc = Number(inc)
        if(inc == 0){
            alert("O passo não pode ser Igual a 0")
        }else{
            res.innerHTML = "Contando:<br>"
            var i
            if(ini>fim){
                for(i = ini;i>=fim;i-=inc){
                    res.innerHTML += `${i} &#x1F449`
                }
            }else{
                for(i = ini;i<=fim;i+=inc){
                    res.innerHTML += `${i} &#x1F449`
                }
            }
            res.innerHTML+= `&#x1F3C1`
        }
    }
}