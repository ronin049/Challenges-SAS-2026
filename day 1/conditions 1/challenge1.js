const prompt=require("prompt-sync")()
let age = prompt("age: ")
if(age>=18){
console.log("acces autorisée")
}else(console.log("acces refusée"))