var add = document.getElementById("num")
var lista = document.getElementById("valores")
function adicionar() {
    if(add.value<1 || add.value>100){
        if(add.value == ""){
            alert("Digite um valor!")
        }else{
            alert("Valor não se encontra no intervalo definido!")
        }
    }else{
        if(vlrRepetido(add.value) == -1){
            var item = document.createElement("option")
            item.text = `Valor ${add.value} adicionado.`
            item.value = add.value
            lista.appendChild(item)
            add.value = ""
            res.innerHTML = ""
        }else{
            alert("Não se pode repetir valores!")
        }
    }
    
}

function getValores(){
    let valores = document.getElementsByTagName("option")
    let vet = []
    for(var i in valores){
        if(valores[i].value != undefined){
            vet.push(valores[i].value)
        }
    }
    return vet
}

function vlrRepetido(vlr){
    let val = getValores()
    return val.indexOf(vlr)
}

function maior(){
    let val = getValores()
    val.sort()
    return val[val.length-1]
}

function menor(){
    let val = getValores()
    val.sort()
    return val[0]
}

function soma(){
    let val = getValores()
    let soma = 0
    for(var i in val){
        soma+=Number(val[i])
    }
    return soma
}

function media(){
    let val = getValores()
    return soma()/Number(val.length)
}

function finalizar() {
    let valores = getValores()
    if(valores.length !=0){
        let res = document.getElementById("res")
        res.innerHTML+=`Ao todo, temos ${valores.length} numero(s) cadastrados<br>`
        res.innerHTML+=`O maior valor informado foi ${maior()}<br>`
        res.innerHTML+=`O menor valor informado foi ${menor()}<br>`
        res.innerHTML+=`Somando todos os valores, temos ${soma()}<br>`
        res.innerHTML+=`A média dos valores digitados é ${media()}`
    }else{
        alert("Adicione um valor!")
    }
}