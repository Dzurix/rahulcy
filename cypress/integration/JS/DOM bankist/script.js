'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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

////////////////////////////////////////////////////////////////
//          D   O   M      //
///////////////////////////////////////////////////////////////

//Selecting elements

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

// Atributes
