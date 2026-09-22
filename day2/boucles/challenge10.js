const prompt=require("prompt-sync")()
let x=1
let i=0
let y=0
while (x>0){
    x = +prompt("saisie un nombre: ")
    console.log("saisie: ",x)
    i++
    y=y+x
}
console.log("saisie: 0")
console.log(i-1)
console.log(y)