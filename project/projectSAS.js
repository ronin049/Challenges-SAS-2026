const prompt = require("prompt-sync")()
let condidats = [{ cin: "AB123456", nom: "mariam",
     prenom: "Soufiane", partiepolitique: "b", age: "40", votes: ["a", "b"] }, { cin: "AB123458", nom: "Boushaba", prenom: "Soufiane", partiepolitique: "a", age: "40", votes: ["c", "d", "e"] }]

menu()
let choix0 = +prompt("votre choix0: ")
let choix1
let choix2
let choix3
while (choix0 !== 0) {
    switch (choix0) {
        case 1:
            console.log(`
            ================
            ajouter candidat
            ================
            
            1 - ajouter un
            2 - ajouter plusieurs
            0 - revenir au menu principale`)
            choix1 = +prompt("votre choix1: ")
            if (choix1 == 1) {
                ajoutercondidat(1)
            } else if (choix1 == 2) {
                choix2 = +prompt("combien de condidats? ")
                ajoutercondidat(choix2)
            } else if (choix1 == 0)
                break;
            break;
        case 2:
            console.log(`
            ===============================
            afficher la liste des candidats
            ===============================
            
            1 - affichage normale
            2 - afichage triée par nombre de votes
            3 - affichage par filtre
            0 - revenir au menu principale`)
            choix1 = +prompt("votre choix: ")
            if (choix1 == 1) {
                console.log(condidats)
            } else if (choix1 == 2) {
                console.log(triercondidats(condidats))
            } else if (choix1 == 3) {
                choix3 = prompt("quelle partie politique? ")
                console.log(filtrercondidat(condidats, choix3))
            } else if (choix1 == 0)
                break;
            break;
        case 3:
            console.log(`
            =============================
            *************VOTES***********
            =============================`)
            votes(condidats)
            break;
        case 4:
            console.log(`
            ============================
            **********MODIFIER**********
            ============================
            1- modifier la partie politique
            2- modifier l'age`)
            choix1=+prompt("votre choix: ")
            if(choix==1){}
            break;
        case 5:

            break;
        case 6:

            break;
        case 7:

            break;
        case 0:

            break;
    }
    menu()
    choix0 = +prompt("votre choix: ")
}
function menu() {
    console.log("---------------------------")
    console.log("******menu principale******")
    console.log("---------------------------")
    console.log("")
    console.log("1 - ajouter candidat")
    console.log("2 - Afficher la liste des candidats")
    console.log("3 - voter")
    console.log("4 - modifier les information")
    console.log("5 - suprimer un candidat")
    console.log("6 - Rechercher")
    console.log("7 - statistiques")
    console.log("0 - quiter")
}
function ajoutercondidat(a) {
    for (i = 1; i <= a; i++) {
        let Cin = prompt("cin: ")
        let Nom = prompt("nom: ")
        let Prenom = prompt("prenom: ")
        let Partie = prompt("partie politique: ")
        let Age = prompt("age: ")
        let temp = {}
        temp.cin = Cin
        temp.nom = Nom
        temp.prenom = Prenom
        temp.partiepolitique = Partie
        temp.age = Age
        condidats.push(temp)
        temp = {}
    }
}
function triercondidats(arr) {
    let swap
    do {
        swap = true
        for (j = 0; j < arr.length - 1; j++) {
            if (arr[j].votes.length < arr[j + 1].votes.length) {
                let temp1 = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp1
            }
            swap = false
        }
    } while (swap)


    return arr
}
function filtrercondidat(arr, p) {
    let temp2 = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i].partiepolitique == p) {
            temp2.push(arr[i])
        }
    }
    return temp2
}
function votes(arr) {
    let vote = false
    let cincheck = prompt("saisir votre CIN: ")
    for (i = 0; i < arr.length - 1; i++) {
        for (let ch of arr[i].votes) {
            if (ch == cincheck) {
                console.log("already voted")
                vote = true
            }
        }
    }
    if (vote == false) {
        console.log(arr)
        let votecheck = prompt("choisisez votre condidat: ")
        for (i = 0; i <= arr.length - 1; i++) {
            if (arr[i].cin == votecheck) {
                arr[i].votes.push(cincheck)
                break;
            }
        }
    }
}
function modification(){

}