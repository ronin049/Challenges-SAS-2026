const prompt=require("prompt-sync")()
let a = +prompt("nombre: ")
for (i=0;i<=10;i++){
    let r = a*i
    console.log(a,"x",i,"=",r)
}