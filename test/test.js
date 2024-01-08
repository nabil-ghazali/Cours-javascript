const jc = {
    nom : "Dusse",
    prenom: "Jean claude",
    sePresenter : function(){
        console.log("Bonjour, je m'appelle" + this.prenom + " " + this.nom);
    }
}
    for(let key in jc){
        console.log(key + " : " + jc[key]);
    }
    
    console.log(jc.nom);