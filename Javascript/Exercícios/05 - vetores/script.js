let vet = [8, 4, 3, 6, 2, 7]

console.log(vet)

for (let i = 0;i<vet.length;i++){
    console.log(`vet[${i}] (posição ${i+1}) = ${vet[i]}`)
}

vet.sort()
console.log("")

for (let i = 0;i<vet.length;i++){
    console.log(`vet[${i}] (posição ${i+1}) = ${vet[i]}`)
}

console.log("")
for(let i in vet){
    console.log(`vet[${i}] (posição ${Number(i)+1}) = ${vet[i]}`)
} /* um for diferenciado que passa por todos os índices do vetor :) */

vet.indexOf(3) //retorna o índice de onde se encontra o valor, se não achar, retorna -1