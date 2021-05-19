const url = '';

let requete = new XMLHttpRequest(); 

    /* requete.open('GET', url); 
    requete.responseType = 'json'; 
    requete.send(); */

    requete.open('POST', url); 
    requete.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');//formulaire-mode
    requete.responseType = 'json';
    requete.send('prenom=Isaac'); //le donnés à envoyer pour avoir une reponse



    requete.onload = function () {  
      if (requete.readyState === XMLHttpRequest.DONE) { 
        if (requete.status === 200) {  affichée
          let reponse = requete.response; 
        }
      else {
        alert('Un problème est survenu, merci de ressayer plus tard'); //si on affiche un error(404 par ex)
      }
    }
  }