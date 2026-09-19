const prompt=require("prompt-sync")();
const dur = prompt("durée: ");
console.log ("Durée: ",dur,"minutes")
if ( dur <60 ){
    console.log ("Catégorie: court metrage")
}
else if ( 60 <= dur && dur <= 120 ){
    console.log ("Categorie: film standard")
}
else if ( 120 < dur ){
    console.log ("Categorie: film long")
}