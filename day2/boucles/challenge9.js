const prompt = require ("prompt-sync")()
let x = prompt("base: ")
let y = prompt("exposant: ")
let i = 0
let r = 1
while(i<y){
    r=r*x
    i++
}
console.log(r)