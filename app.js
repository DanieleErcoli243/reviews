// dichiaro una funzione per mostrare le persone in base all'elemento
const showPerson = person => {
  // dichiaro una variabile col primo elemento dell'array che voglio mostrare all'avvio
  const item = reviews[person];
  // compilo la scheda dinamicamente
  img.src = item.img;
  author.innerText = item.name;
  job.innerText = item.job;
  info.innerText = item.text;
}

// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

// raccolgo gli elementi dal DOM

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.querySelector('.info');
const prev = document.querySelector('.prev-btn');
const next = document.querySelector('.next-btn');
const random = document.querySelector('.random-btn');

// imposto il primo elemento

let currentItem = 0;

// aggancio un ascoltatore di eventi alla pagina

window.addEventListener('DOMContentLoaded', () => {
  showPerson(currentItem);
});

// aggancio un ascoltatore di eventi al tasto prev

prev.addEventListener('click', () => {

  // decremento il valore dell'elemento
  currentItem--;
  // faccio ripartire il conteggio da 4 se vado indietro
  if (currentItem < 0) {
    currentItem = 3;
  }
  // invoco la funzione showPerson
  showPerson(currentItem);
});

// aggancio un ascoltatore di eventi al tasto next

next.addEventListener('click', () => {

  // decremento il valore dell'elemento
  currentItem++;
  // faccio ripartire il conteggio da 4 se vado indietro
  if (currentItem > 3) {
    currentItem = 0;
  }
  // invoco la funzione showPerson
  showPerson(currentItem);
});