var a = document.getElementById("area"),b = 0, c = document.getElementsByTagName("html")[0]
document.getElementById("contador").innerText += b

a.addEventListener("mouseenter",entrar)
a.addEventListener("mouseup",voltar)
a.addEventListener("mousedown",clique)
a.addEventListener("mouseleave",sair)
c.addEventListener("click",contar)

        function clique(){
            a.innerText = "Clicou!"
        }
        function voltar(){
            entrar()
        }
        function entrar(){
            a.innerText = "entrou!"
        }
        function sair(){
            a.innerText = "interaja...."
        }
        function contar(){
            b++
            document.getElementById("contador").innerText = `qnt clicks no site: ${b}`
        }