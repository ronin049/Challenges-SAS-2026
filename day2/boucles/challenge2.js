const prompt=require("prompt-sync")()
let a = +prompt("nombre: ")
for(i=0;i<=a;i+=2){
    console.log(i)
}