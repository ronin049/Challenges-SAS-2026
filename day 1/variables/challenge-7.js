const prompt=require("prompt-sync")()
let noteCC = +prompt ("note controle continue: ")
let noteP = +prompt ("note project: ")
let noteE = +prompt ("note examen: ")
let noteF = (noteCC*2 + noteP*3 + noteE*5) /10
console.log ("note finale: ",noteF)
