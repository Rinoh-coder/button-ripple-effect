// 1. Sélectionner le bouton dans le DOM
const btnEl = document.querySelector(".btn");

// 2. Écouter l'événement "souris entre dans le bouton"
btnEl.addEventListener("mouseover", (event) => {
    
    // 3. Calculer la position X de la souris RELATIVE au bouton
    //    event.pageX = position X par rapport à la page entière
    //    btnEl.offsetLeft = position X du bord gauche du bouton
    //    La différence donne la position X à l'INTÉRIEUR du bouton
    const x = (event.pageX - btnEl.offsetLeft);
    
    // 4. Calculer la position Y de la souris RELATIVE au bouton
    //    Même principe : position page - position haut du bouton
    const y = (event.pageY - btnEl.offsetTop);
    
    // 5. Stocker ces positions dans des variables CSS personnalisées
    //    Les variables CSS (--xPos et --yPos) sont utilisables dans le ::before
    //    Le suffixe "px" est obligatoire pour les unités CSS
    btnEl.style.setProperty("--xPos", x + "px");
    btnEl.style.setProperty("--yPos", y + "px");    
})