function afficherProposition(proposition){
    let zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.innerText = proposition
}

function  afficherResultat(score,proposition){
    let zoneScore = document.querySelector(".zoneScore")    
    zoneScore.innerText = `${score} / ${proposition}`

}


let motSaisi
function lancerJeu() {
// Initialisation
    
    let i = 0
    let score = 0
    let btnValiderMot = document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")
    
    afficherProposition(listeMots[i])
   btnValiderMot.addEventListener("click",()=>{
    
        if(inputEcriture.value === listeMots[i]){
            score++
            afficherResultat(score,i)
        }
        
        //Affichage de ma liste de mots dans la zone affichage
        i++
        
        // afficherResultat(score,i)
        //On efface la zone de saisie
        inputEcriture.value = "" 
        // lorsque la valeur est indéfini à la fin de ma liste de mots, j'affiche la fin du jeu
       
        
        if(listeMots[i] === undefined){
            afficherProposition ("Le jeu est fini")
            // je désactive le bouton valider    
            btnValiderMot.disabled = true
            
        } else {
            afficherProposition(listeMots[i])
            
        } 
    
        afficherResultat(score,i)
            
    })
    

     
}


