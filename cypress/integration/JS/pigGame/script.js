'use strict';

//selecting elements
const player0El = document.querySelector('.player--0'); //aktivni igrac
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0'); // ovako kada idemo preko querySelector sa #
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0'); // ovako kada idemo preko getElementById
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const bntNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing; // ovako mozemo da declaring prazne varijable
//starting conditions

const init = function () {
  // init od initialization (inicijalizacija)
  scores = [0, 0]; // ukupni rezultati
  currentScore = 0; // ovde je moramo definisati, kako se ne bi resetovao stalno rezultat
  activePlayer = 0; // player 0
  playing = true; // da li igra jos uvek traje

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init(); // OVDE POZIVAMO FUNKCIJU DA BI SE OBEZBEDILI POCETNI USLOVI IGRE

// switching player function
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0; // pre nego sto uradimo switch playera, moramo da setujemo 0 za prethognog igraca (jer nije kliknuo na 'hold' da zadrzi rezultat)
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; // ako je activePlayer 0, onda novi activePlayer je 1, else treba da je 0
  player0El.classList.toggle('player--active'); // toggle je metod kojim se dodaje klasa ako ne postoji ili oduzima klasu ako postoji
  player1El.classList.toggle('player--active'); // bitno je primeniti na oba igraca kako bi bili sigurni da ce samo jednom jedna klasa biti aktivna
};

// Rolling dice functionality

btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    // 2. display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`; // manipulisemo sa src atributom, posto on odredjuje koja ce se slika pokazati preko template literala

    // 3. Check for rolled '1':

    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; // dinamicko selektovanje scora na osnovu ko je aktivni igrac trenutno
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

// hold current score

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores [1] + currentScore;  - primer
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. Check if player's score is >=100

    if (scores[activePlayer] >= 100) {
      //Finish the game
      playing = false;
      diceEl.classList.add('hidden'); //nakon zavrsetka igre, sklanjamo kockicu

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

// reseting the game

bntNew.addEventListener('click', init); //NE POZIVAMO init funkciju jos, vec ce je JS pozvati onda kada kliklnemo na dugme 'New Game'
