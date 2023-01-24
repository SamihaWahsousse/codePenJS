// créer 3 cases dans lequelles je peux écrire du HTML/CSS/JS
// clicker sur chaque case pour ajouter des caractères(du texte)
// Afficher en temps réel le text écrit
// compter le nombre de caractères écrits dans la case HTML
// récupèrer le nombre de caratères comptés et déduire d'une valeur fixée à l'avance.
// ajouter une barre de progression dynamique pour compter les caractères écrits.


const js=document.getElementById("js");
js.addEventListener("keyup", displayJS );

const displayGif=document.getElementById("gifLoader");
displayGif.style.visibility = "hidden";



function displayHtml(){
   let limitedChars=100;
   let htmlText =document.getElementById("html").value;
   displayGif.style.visibility = "visible";
   if(htmlText.length<=limitedChars){
   document.getElementById("monText").innerHTML = htmlText;
   //console.log(x.length);
   
   let charsRestant=limitedChars-(htmlText.length);
   //console.log(k);
   document.getElementById("charsRestant").innerHTML=charsRestant;
   let pourcentageNumber=(htmlText.length*100)/limitedChars;
   let progressBar=document.getElementById("progressBar");
   progressBar.style.width= pourcentageNumber + '%';

   if(pourcentageNumber<=30){
      progressBar.style.backgroundColor="green";
   }else if(pourcentageNumber<=60){
      progressBar.style.backgroundColor="orange";

   }else{
      progressBar.style.backgroundColor="red";
   }
}
   else{
      alert("vous avez dépasser le nombre de caractères autorisé !");

   }

}

function displayCss(){
   let css =document.getElementById("css").value;
   document.getElementById("styleCss").innerText = css;
  }

  function displayJS(){
   let myJavascrit =document.getElementById("js").value;
   document.getElementById("myJS").innerText = myJavascrit;
  }

function run(){
   new Function(js.value)();
}

