const prompt=require("prompt-sync")()
let a = +prompt("nombre: ")
let b = +prompt("nombre max: ")
let s = 0
for(i=a;i<=b;i+=a){
console.log(i)
}