const button = document.getElementById(choose)
const country = document.querySelectorAll('li')

function randomizer(){
  
  country.forEach(el => {
    el.style.backgroundColor = "";
  });


   let index = Math.floor(Math.random() * country.length) + 1;
   let ziel = (country)[index];
   console.log(ziel)
   ziel.style.backgroundColor = '#f5ff63ff';
   

}



