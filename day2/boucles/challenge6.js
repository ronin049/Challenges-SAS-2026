const prompt=require ("prompt-sync")()
let x=+prompt ("nombre donne: ")
let i = 1
console.log(x)
while(x>0){
    x=x-i
    console.log(x)
}