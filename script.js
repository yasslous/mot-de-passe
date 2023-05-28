//Definir les variables
var myInput = document.getElementById('pswd') ;
var letter = document.getElementById('letter') ;
var capital = document.getElementById('capitale') ;
var number = document.getElementById('number') ;
var length = document.getElementById('length') ;

//lorsque l'utilisateur clique sur le champ du mot de passe , affiche la boite de message
myInput.onfocus = function() {
    document.getElementById("message").style.display = "block" ;
}
//lorsque l'utilisateur clique en dehors du champs de mot de passe , masquer le boite de message 
myInput.onblur = function() {
    document.getElementById("message").style.display = "none" ;
}

//lorsque l'utilisateur commence a taper quelques choses dans le champ mot de passe
myInput.onkeyup = function() {
    //valider les lettres majuscules
    var lowerCaseletter = /[a-z]/g
    if(myInput.value.match(lowerCaseletter)) {
        //si le mot de passe contient une lettre miniscule , enlever la classe "invalid" et ajouter "valid"
        letter.classList.remove("invalid") ;
        letter.classList.add("valid") ;
    } else {
        //si non , enlever la classe "valid" et ajouter la classe "invalid"
        letter.classList.remove("valid") ;
        letter.classList.add("invalid") ;

    }
      //valider les lettres majuscules
      var lowerCaseletter = /[A-Z]/g
      if(myInput.value.match(lowerCaseletter)) {
          //si le mot de passe contient une lettre majuscule , enlever la classe "invalid" et ajouter "valid"
          capital.classList.remove("invalid") ;
          capital.classList.add("valid") ;
      } else {
          //si non , enlever la classe "valid" et ajouter la classe "invalid"
          capital.classList.remove("valid") ;
          capital.classList.add("invalid") ;
  
      }
        //valider les nombres
        var numbers = /[0-9]/g
        if(myInput.value.match(numbers)) {
            //si le mot de passe contient un chiffre , enlever la classe "invalid" et ajouter "valid"
            number.classList.remove("invalid") ;
            number.classList.add("valid") ;
        } else {
            //si non , enlever la classe "valid" et ajouter la classe "invalid"
            number.classList.remove("valid") ;
            number.classList.add("invalid") ;
    
        }
         //valider la longueur
         
         if(myInput.value.length >= 8) {
             //si le mot de passe contient minimum 8 caractéres , enlever la classe "invalid" et ajouter "valid"
             length.classList.remove("invalid") ;
             length.classList.add("valid") ;
         } else {
             //si non , enlever la classe "valid" et ajouter la classe "invalid"
             length.classList.remove("valid") ;
             length.classList.add("invalid") ;
     
         }
}