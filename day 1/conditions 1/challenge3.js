const prompt=require("prompt-sync")()
let prix =+prompt("prix: ")
console.log(prix)
if(prix>=500){
    console.log("livraison: gratuite")
    console.log("total: ",prix)
}else{
    console.log("livraison: 40")
    console.log("total: ",prix+40)
}