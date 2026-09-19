const prompt=require("prompt-sync")()
const score1 = +prompt("score partie 1: ")
const score2 = +prompt("score partie 2: ")
const score3 = +prompt("score partie 3: ")
const score4 = +prompt("score partie 4: ")
let T = score1 + score2 + score3 + score4
// T = total
let M = T/4
// M = moyenne
console.log ("total: ",T)
console.log ("moyenne: ",M)