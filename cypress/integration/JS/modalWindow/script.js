'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//kreiranje funkcije za pokazivanje prozora i overlay

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//kreiranje funkcije za zatvaranje prozora i overlay

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//selektovanje sva tri dugmeta i pokazivanje prozora i overlay
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// zatvaranje prozora klikom na dugme 'X'
btnCloseModal.addEventListener('click', closeModal);

// zatvaranje prozora klikom na ovarlay, tj u prazno polje
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal(); // ovde ipak pozivamo funkciju jer se ovde nesto mora desiti
  }
});
