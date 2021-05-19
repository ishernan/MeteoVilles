
let ville = "Toulouse"; 
recevoirTemperature(ville);

const changer = document.querySelector('#changer');  
changer.addEventListener('click', ()=>{
  ville = prompt('Rentrez la ville');   
  recevoirTemperature(ville)
 
})

//créer la requète
 
  function recevoirTemperature(ville){    
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=e9b19b6fa4756ad8812c6c3517ef374d&units=metric'; 

    let requete = new XMLHttpRequest(); //créer un objet
    requete.open('GET', url); // premier paramètre GET ou POST, deuxième paramètre l'url
    requete.responseType = 'json'; //nous utilison du JSON
    requete.send(); //pour envoyer la requète


    requete.onload = function () {  //l'action à executer lorsqu'on recoit la reponse
      if (requete.readyState === XMLHttpRequest.DONE) { //si l'etat de la requete à une reponse (DONE)
        if (requete.status === 200) {  //si affiche 'error 200', c-a-dire que la page est correctement affichée
          let reponse = requete.response; //on stocke la reponse
          let temperature = reponse.main.temp; 
          let ville = reponse.name; 
          document.querySelector('#temperature_label').textContent = temperature; 
          document.querySelector('#ville').textContent = ville; 

          //let changer = document.querySelector('#changer'); 
        
      }
      else {
        alert('Un problème est survenu, merci de ressayer plus tard'); //si on affiche un error(404 par ex)
      }
    }
  
  } 
  
}
  
    




//setInterval(interval, 5000); 