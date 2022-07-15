'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// NOVI NACIN PREKO forEach metoda
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
// STARI NACIN PREKO for LOOP
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Implementing smooth scrolling

btnScrollTo.addEventListener('click', function (e) {
  const s1coordinate = section1.getBoundingClientRect();
  console.log(s1coordinate);

  console.log(e.target.getBoundingClientRect());

  console.log('Curent scroll (X/Y', window.scrollX, scrollY); //current scrooll position

  console.log('Height/widht viewport', document.documentElement.clientHeight); //visina i sirina ono sto trenutno gledamo

  //SMOOTH SCROOLING TO SECTION

  // window.scrollTo(
  //   s1coordinate.left + window.scrollX,
  //   s1coordinate.top + window.scrollY
  // );
  // isto to napisano preko pasovanja objekta da bi bilo 'SMOOTH'
  // window.scrollTo({
  //   left: s1coordinate.left + window.scrollX,
  //   top: s1coordinate.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  //jos moderniji nacin
  section1.scrollIntoView({ behavior: 'smooth' }); // podrzano u najnovijim browserima
});

// Page navigation - smoth scroling
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// Event delegation

// Event delegation koristi cinjenicu da EVENTS BUBLES UP, a to radimo tako sto stavljamo EVENT LISTENERE na zajednickom roditelju
// svih elemenata za koje smo zainteresovani. Tako da kada USER klikne na neki od tih linkova, EVENT se generise i BUBLES UP
// Onda mozemo uhvatiti taj EVENT u ovom zajednickom roditelju i tu ga hendlovati, jer znamo odakle je EVENT potekao (preko event.Target)

// Sa EVENT DELEGATION povecavamo efikasnost i brzinu loadovanja,
// posto ne dodeljujemo iste EVENT HANDLERE SVIM CHILDOVIMA, VEC samo onima kojima hocemo

//NAJVAZNIJA PRIMENA - kada radimo sa elementima koji jos nisu na stranici kada se stranica ucita (ON RUNTIME)
// - primer za to su BUTTONS koji se dodavaju dinamicki dok se APP koristi

// 1. add event listenere to common parent element
// 2. Determin what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  //Mathcing strategy - da izolujemo samo ono sto nam treba
  if (e.target.classList.contains('nav__link')) {
    console.log('link');

    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

////////////////////////////////////////////////////////////////
//          D   O   M     VEZBE     //
///////////////////////////////////////////////////////////////

//Selecting elements
/*
console.log(document.documentElement); //selektovanje celog DOCUMENTa
console.log(document.head); //selektovanje HEAD-a
console.log(document.body); //selektovanje BODY

const header = document.querySelector('.header'); //hvatanje prvog elementa koji odgovara 'header'
const allSections = document.querySelectorAll('.section'); // hvatanje vise elemenata sa clasom SECTION
console.log(allSections); // vraca NODE LIST

document.getElementById('section--1'); // bez #, to je samo za query-je
const allButtons = document.getElementsByTagName('button');
console.log(allButtons); // ovo vraca COLLECTIONS koje se automatski update-uju

document.getElementsByClassName('btn');

//Creating and inserting elements

//  mozemo preko  .insertAdjacentHTML

//a drugi nacin je ovako

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improved functionality and analytics';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class = "btn btn--close-cookie">Got it!</button>';

//header.prepend(message); // dodavanje poruke pre svih - da bude prvi element
header.append(message); // dodavanje poruke da bude poslednja
//header.append(message.cloneNode(true)); // ovako kopiramo, pa mozemo videti i kao prepend i kao apend

//header.before(message); //pre hedera
// header.after(message) // posle hedera

// Delete elements

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    //message.remove(); // novi nacin brisanja

    // stari nacin brisanja
    message.parentElement.removeChild(message);
  });

//Styles

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.backgroundColor); // vidimo zato smo smo mi definisali rucno
console.log(message.style.color); // ne dobijamo nista, iako je u CSS
console.log(getComputedStyle(message).color); //ovako dobijamo color iz CSS
console.log(getComputedStyle(message).height); //ovako dobijamo height koja je prikazana na stranici

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'; //menamo visinu

// CSS varijable

// root = DOCUMENT

document.documentElement.style.setProperty('--color-primary', 'orangered'); // setovanje propertyja

// Atributes in HTML (src, alt, class, id, ....)

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);
console.log(logo.src); // apsolutni URL
console.log(logo.getAttribute('src')); // relativni URL

//seting atributes

logo.alt = 'Beautifull minimalist logo';

// suprotno od GET je SET

logo.setAttribute('company', 'Bankist');

const link = document.querySelector('.nav__link--btn');
console.log(link.href); // apsolutni URL
console.log(link.getAttribute('href')); //relativni URL

//Data atributes
console.log(logo.dataset.versionNumber);

//Classes

logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

//Types of Events and Event Handlers

//Event je signal (koji je generisan od strane DOM NODEa) da se nesto desilo (klik, kretanje misa, fullscreen mode, )

//Mouse Enter event

const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', function (e) {
//   alert('addEventListener: Great! You are reading the heading 👍');
// });

//ovo je stariji nacin
// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading 👍');
// };

//remove event handler

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading 👍');
  // h1.removeEventListener('mouseenter', alertH1); // I nacin
};

h1.addEventListener('mouseenter', alertH1);
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000); // II nacin posle odredjenog vremena

// III nacin handling events preko HTML atribute

//BUBLING AND CAPTURING - EVENT PROPAGATION IN PRACTICE

// rgb (255,255,255)
//kreiranje random boje
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
console.log(randomColor(0, 255));

document.querySelector('.nav__link').addEventListener('click', function (e) {
  //U EVENT HANDLERIMA this se odnosi na element za koji je zakacen taj EVENT HANDLER!!!
  this.style.backgroundColor = randomColor();
  console.log('Link', e.target, e.currentTarget);
  console.log(e.currentTarget === this); //currentTarget je uvek jednako THIS u svakom EVENT HANDLERU

  // moguce je zaustaviti EVENT Propagation - da signal putuje do roditelja
  e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor(); // ovim i parent menja boju, zbog BUBLINGA
  console.log('Container', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});




*/
