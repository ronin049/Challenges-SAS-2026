const prompt=require("prompt-sync")()
let x = prompt("nombre de missions: ")
let i=0
while (i<x){
    i++
    console.log("mission ",i,"-> score :",i*100)
}