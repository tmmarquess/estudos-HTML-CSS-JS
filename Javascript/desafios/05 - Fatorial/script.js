var res = document.getElementById("res");
function getFatorial(){
    let num = Number(document.getElementById("num").value)
    if(num<1){
        alert("Digite um valor igual ou acima de 1")
    }else{
        let resp = Fatorial(num,1,"")//descobrir o problema de undefined    
        res.innerHTML= `${num}!<br>${resp}`
    }
}
function Fatorial(num,vlr,str){ 
    if(num==1){
        str +=`${num} = ${vlr}`
        return str
    }else{
        str += `${num} * `
        vlr*=num
        num--
    }
    let aux = Fatorial(num,vlr,str)
    return aux
}