function afficherProposition(proposition){
    let zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.innerText = proposition
}



function lancerJeu() {
// Initialisation
    let score = 0
    let nbMotsProposés = 0  
    let i = 0
    let btnValiderMot = document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")
    
    afficherProposition(listeMots[i])
    btnValiderMot.addEventListener("click",()=>{

        //Affichage de ma liste de mots dans la zone affichage
        i++
        inputEcriture.value = "" 
        // lorsque la valeur est indéfini à la fin de ma liste de mots, j'affiche la fin du jeu
        if(listeMots[i] === undefined){
            afficherProposition ("Le jeu est fini")
            // je désactive le bouton valider    
            btnValiderMot.disabled = true
            console.log(btnValiderMot);
        } else {
            afficherProposition(listeMots[i])
                         
        } 

        
    })
    
    



    //  afficherResultat(score,nbMotsProposés);
 
}


