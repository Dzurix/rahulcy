'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

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

//DOM TRAVERSING

const h1 = document.querySelector('h1');

// Going downwards -  child
console.log(h1.querySelectorAll('.highlight'));
//querySelectorAll selektuje sve elemente sa 'highlight' klasom koja su deca od 'h1', bez obzira koliko duboko se nalaze

console.log(h1.childNodes); // direktna deca od 'h1'
// NODES mogu biti bilo sta (text, comment,...)
console.log(h1.children); //dobijemo HTML kolekciju tj. elementi koji su unutar 'h1'
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

//Going upwords - selecting parents

console.log(h1.parentNode); // - direktni roditelj
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)'; //trazenje najblizeg roditelja od 'h1' sa klasom '.header'
h1.closest('h1').style.background = 'var(--gradient-primary)'; // menjanje stila na samom elementu 'h1'

// CLOSEST metod je ustvari suprotno od querySelector (koji trazi decu, bez obzira koliko duboko u DOM) posto trazi roditelje, bez
// obzira koliko visoko na DOM

// Going sideways - braca - U JS mozemo selektovati samo direktnu bracu (prethodni i sledeci)

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

//ako nam trebaju sva braca
//oticu u roditelja i pogledati svu decu
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});

//Building Tabbed Component
// sve se zasniva na dodavanju i brisanju klasa (kao kod 'Modal' windowa)

// tabs.forEach(t => t.addEventListener('click', () => console.log('TAB')));
// ovo necemo ovako selektovati, jer sta npr da ima hiljadu elemenata, sve bi ih selektovali
//vec cemo selektovati samo one za koje smo zainteresovani preko "DELEGATION", na zajednicom roditelju

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab'); // hvatamo samo tabove, tj button
  console.log(clicked);
  if (!clicked) return; //  ako nije kliknuto odmah se vrati
  // ovo je GUARD CLAUSE - if koji se vraca rano ako je neki uslov zadovoljen
  // i sve posle toga se nece izvrsiti

  //Active tab
  tabs.forEach(t => t.classList.remove('operations__tab--active')); //prvo oduzmemo klasu svima
  clicked.classList.add('operations__tab--active'); // pa onda dodelimo samo na koju se klikne

  //remove active clasess

  tabsContent.forEach(c => c.classList.remove('operations__content--active')); //prvo oduzmemo klasu

  //Activate content area
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active'); // pa dodajemo klasu
});

// HOW TO PASS ARGUMENTS to EVENT HANDLERS
// menu fade animation

const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    //ovde ne koristimo closest() metod zato sto nema CHILD elemenata
    //koje bi slucajno mogli da kliknemo

    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      // if (el !== link) el.style.opacity = opacity //ovako ako idem preko kreiranje funkcije handleHover
      if (el !== link) el.style.opacity = this; //ovako ako koristim BIND metod za pozivanje funkcije
    });
    //logo.style.opacity = opacity
    logo.style.opacity = this;
  }
};

nav.addEventListener(
  'mouseover',
  handleHover.bind(0.5)
  //e => handleHover(e, 0.5)
  // moramo ovako ubaciti funkciju, jer addEventListener ocekuje funkciju kao drugi element
);
//na primer,mozemo napisati na drugi nacin preko bind
nav.addEventListener('mouseout', handleHover.bind(1));

//IMPLEMENTING a STICKY NAVIGATION - The Scroll Event

//Sticky navigation

//odredjivanje pozicije section 1

const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener('scroll', function () {
  console.log(this.window.scrollY);

  if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});

//Sticky navigation preko INTERSECTION OBSERVER API

// const obsCallback = function (entries, observer) {
//   //entries su ARRAY of threshold iz obsOptions
//   // obsCallback funkcija ce biti pozvana svaki put kada posmatrani element (target element (section1))
//   // intersectira root element na threshold koji definisemo

//   entries.forEach(entry => console.log(entry));
// };
// const obsOptions = {
//   root: null, //element koji target intersectira //  kad je null onda je viewport tj, ono sto vidimo na ekranu
//   threshold: [0, 0.2], //procenat intersectiona na kojem observer callback ce biti pozvan
//   // (procenat koji hocemo da imamo vidljiv u nazem root)
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeigt = nav.getBoundingClientRect().height;
console.log(navHeigt);

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0, //ako je 0% headera vidljivo, onda hocemo nesto...
  rootMargin: `-${navHeigt}px`, // odakle krece (zavrsava) header
});
headerObserver.observe(header);

//REVEALING ELEMENTS on SCROLL

//reveal section
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return; //   GUARD CLAUSE
  entry.target.classList.remove('section--hidden');

  observer.unobserve(entry.target); // iskljucujemo observer - JAKO VAZNO da isklkjucimo zbog performansi
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
