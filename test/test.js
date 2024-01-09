let listBoutons = document.querySelectorAll('button');

for(let i =0; i < listBoutons.length; i++){
    let boutonActuel = listBoutons[i]
    console.log(boutonActuel)



boutonActuel.addEventListener("click",(event)=>{
    monBouton = event.target
    console.log(`le bouton que je clique est:${monBouton.id}`)
})
}

