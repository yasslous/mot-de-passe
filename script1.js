var copyBtn = document.getElementById('copy') ;

function getPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
    var passwordlength = 16 ;
    var password = " " ;

    //générer le mot de passe
    for(let i = 0 ; i < passwordlength ; i++)  {
        let randomNumber = Math.floor(Math.random() * chars.length) ;
        password += chars.substring(randomNumber , randomNumber + 1) ;

        //afficher le mot de passe
        document.getElementById('password').value = password ;

        //changer le style de button copier 

        copyBtn.style.background = "#6c757d" ;
        copyBtn.style.color = "#fff" ;
    }


}

//copier le mot de passe
function copyMDP() {
    var inputpassword = document.getElementById('password') ;
    
    

    //verifier la longueur de mot de passe
    if( inputpassword.value.length >= 16) {
        //copier le mot de passe
        inputpassword.select() ;
        document.execCommand("copy") ;
        //changer le style du bouton copier

        copyBtn.style.background = "transparent" ;
        copyBtn.style.color = "#000" ;

        //afficher une alert
        alert("mot de passe copié !") ;

    } else {
        //si non
        alert("Veuillez générer un autre mot de passe") ;
    }
}