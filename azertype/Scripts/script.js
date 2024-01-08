// const listeMots = ["Cachalot","Pétunia","Serviette"];
// const listePhrases = ["Pas de panique!","La vie,l'univers et le reste", "Merci pour le poisson"]

function afficherResultat(score,nbMotsProposés){
    // On affiche le score de l'utilisateur
    console.log("Votre score est de " + score + " sur" + nbMotsProposés)
}


function choisirPhrasesOuMots (){
        let choix
    //Tant que l'utilisateur fais un choix diffèrents de mot ou phrase, on lui redemande
    while( choix !== "mots" && choix !=="phrases"){
        choix = prompt("Veuillez choisir dans la liste : mots ou phrases");
        }
        return choix
}

function lancerBoucleDeJeu(listeProposition){
    let score = 0
        for(i = 0 ; i < listeProposition.length; i++){
            motUtilisateur = prompt("Entrez le mot: " + listeProposition[i])
            if(motUtilisateur === (listeProposition[i])){
                score ++
            }                 
        }
    return score
}    


function lancerJeu(){
    let choix = choisirPhrasesOuMots()
    //Cette variable va contenir le score de l'utilisateur, il commence à zéro
    let score = 0
    let nbMotsProposés = 0
    
    if (choix ==='mots') {
        score = lancerBoucleDeJeu(listeMots)
        nbMotsProposés = listeMots.length
    }else{ 
        score = lancerBoucleDeJeu(listePhrases)
        nbMotsProposés = listePhrases.length
    }
        
     afficherResultat(score,nbMotsProposés)

}


let baliseZoneProposition = document.getElementById("zoneProposition");
console.log(baliseZoneProposition);

let listInputs = document.querySelectorAll(".zoneChoix input")
console.log(listInputs);

let baliseZonePropositionSpan = document.querySelector("#zoneProposition span");
console.log(baliseZonePropositionSpan);

for(let i =0; i < listInputs.length; i++){
    console.log(listInputs[i])
}