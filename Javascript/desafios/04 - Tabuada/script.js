function tabuada(){
    var sel = document.getElementById("seletab")
    var num = document.getElementById("num").value
    if(num == ""){
        alert("Digite um valor!")
    }else{
        num = Number(num)
        sel.innerHTML = ""
        for(var i=1;i<=10;i++){
            let item = document.createElement("option")
            item.text = `${num} x ${i} = ${num*i}`
            item.value = `${i}`
            sel.appendChild(item)
        }
    }
}