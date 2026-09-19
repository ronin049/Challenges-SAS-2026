const prompt=require("prompt-sync")();
const dist = prompt("Distance: ")
//dist = distance 
const carb = prompt("carburant: ")
//carb = carburant
let moyenne = carb/dist*100
console.log ("distance: ",dist,"km")
console.log ("carburant: ",carb,"litres")
console.log ("consomation:",moyenne,"L/100km")