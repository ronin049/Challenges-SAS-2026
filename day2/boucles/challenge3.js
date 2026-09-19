const prompt=require("prompt-sync")()
let n = +prompt("nombre: ")
let i =0
let S =0
while(i<=n){
    S=S+i
    i++
}
console.log("somme: ",S)