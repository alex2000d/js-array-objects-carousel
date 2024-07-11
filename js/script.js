// creo la mia struttura dati
// creo il mio arrey di oggetti
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
     {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
// recupero il mio elemento dal dom
let container_card = document.getElementById('container');
// creo un ciclo che mi stampi i  miei personaggi nel dom
images.forEach((element) =>{
    container_card.innerHTML += ` <div class="card my-4 d-none">
            <img src="${element.image}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">${element.text}</p>
            </div>
          </div>`
});

// dichiaro una variabile per l'immagine che voglio rendere visibile
let visible_element = 0;
// recupero le mie card
const cards = document.querySelectorAll('.card');
// seleziono il primo elemento del mio arrey e lo rendo visibile togliendo la calsse d-none
cards[visible_element].classList.remove('d-none');

// recupero il mio pulsante dal dom
const btn = document.getElementById('next');
btn.addEventListener('click', function(){
    // prima di cliccare su avanti aggiungo la classe d-none
    cards[visible_element].classList.add('d-none');
  
   // creo una condizione che mi fa ritornare di nuovo alla prima immagine
    if (visible_element == images.length -1){
         visible_element = 0;
    }
     else {
         // aumento di uno alla volta
         visible_element++;
    }

   // rimuovo la classe d-none
  cards[visible_element].classList.remove('d-none');
})

// recupero il mio pulsante dal dom
const button = document.getElementById('priviusly');
button.addEventListener('click', function(){
    // prima di cliccare su indietro aggiungo la classe d-none
    cards[visible_element].classList.add('d-none');
  
   // creo una condizione che mi fa ritornare di nuovo all'ultima immagine
    if (visible_element == images.length -1){
         visible_element = 5;
    }
     else {
         // decremento di uno alla volta
         visible_element--;
    }

   // rimuovo la classe d-none
  cards[visible_element].classList.remove('d-none');
})