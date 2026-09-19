const prompt=require("prompt-sync")()
let a = +prompt("participant number: ")
for(let i=1 ; i<=a ; i++){
    console.log("participant"+i)
}