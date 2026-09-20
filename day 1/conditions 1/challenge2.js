const prompt=require("prompt-sync")()
let note = +prompt("note: ")
if(note>=10 && note<=20){
    console.log("admis")
}
else if(note<10 && note>=0){
    console.log("non admis")
}