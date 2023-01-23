// créer 3 cases dans lequelles je peux écrire du HTML/CSS/JS
// clicker sur chaque case pour ajouter des caractères(du texte)
// Afficher en temps réel le text écrit
// compter le nombre de caractères écrits dans la case HTML
// récupèrer le nombre de caratères comptés et déduire d'une valeur fixée à l'avance.
// ajouter une barre de progression dynamique pour compter les caractères écrits.


//const html=document.getElementById("html");
//const css=document.getElementById("css");
const js=document.getElementById("js");


function displayHtml(){
   let limitedChars=100;
   let x =document.getElementById("html").value;
   document.getElementById("monText").innerHTML = x;


   console.log(x.length);
   let k=limitedChars-(x.length);
   console.log(k);
   document.getElementById("restant").innerHTML=k;
   let t =(x.length*100)/limitedChars;
   let y=document.getElementById("progressBar");
   y.style.width= t + '%';


}


   
function displayCss(){
   
  }

 



