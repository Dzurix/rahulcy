'use strict';

/*
console.log(document.querySelector('.message').textContent); // nacin kako koristim selektore pomocu JS
// posto hocu classu da uhvatim, koristim '.'  a da npr hocu ID onda bi bilo #message
// kada na kraju logujemo ovo u konzolu, dobijem element koji sam selektovao - DOM manipulation

document.querySelector('.message').textContent = '🎊🎉🥳 Corect number !!!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.guess').value); */

let secretNumber = Math.trunc(Math.random() * 20) + 1; //random broj do 20 ukljucujuci i 20 (+1)
let score = 20; // inicijalna vrednost poena - state variable
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    displayMessage('⛔ No number!');
  } else if (guess === secretNumber) {
    // kada igrac pogodi broj
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    // posto hocemo da promenimo boju kada se pogodi broj, ovako menjamo boju celog body-ja;

    document.querySelector('.number').style.width = '30rem';
    // posto hocemo da povecamo broj kada se pogodi , ovako menjamo sirinu broja, ali dodeljujemo vrednost i velicinu kao ceo string;

    //document.querySelector('.message').textContent = '🎊🎉🥳 Corect number !!!';
    displayMessage('🎊🎉🥳 Corect number !!!');
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //inicijalno je uslov bilo nula, tj da se kod izvrsava dok je ovaj uslov zadovoljen, a dodat je 1 da se ne bi dva puta pojavljivala 0
      displayMessage(guess > secretNumber ? 'Too high! 📈' : '📉 Too low!');
      score--; //umanjujemo za jedan nakon svakog pogresnog odgovora
      document.querySelector('.score').textContent = score; // logovanje nove vrednosti nakon smanjenja
    } else {
      displayMessage('💥 GAME OVER!');
      document.querySelector('.score').textContent = 0;
    }
  }

  //REFACTORING - izbegavanje ponavljajucih kodova
  //  else if (guess > secretNumber) {
  //   if (score > 1) {
  //     //inicijalno je uslov bilo nula, tj da se kod izvrsava dok je ovaj uslov zadovoljen, a dodat je 1 da se ne bi dva puta pojavljivala 0
  //     document.querySelector('.message').textContent = 'Too high! 📈';
  //     score--; //umanjujemo za jedan nakon svakog pogresnog odgovora
  //     document.querySelector('.score').textContent = score; // logovanje nove vrednosti nakon smanjenja
  //   } else {
  //     document.querySelector('.message').textContent = '💥 GAME OVER!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       //inicijalno je uslov bilo nula, tj da se kod izvrsava dok je ovaj uslov zadovoljen, a dodat je 1 da se ne bi dva puta pojavljivala 0
  //       document.querySelector('.message').textContent = '📉 Too low!';
  //       score--; //umanjujemo za jedan nakon svakog pogresnog odgovora
  //       document.querySelector('.score').textContent = score; // logovanje nove vrednosti nakon smanjenja
  //     } else {
  //       document.querySelector('.message').textContent = '💥 GAME OVER!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

//resetovanje

document.querySelector('.again').addEventListener('click', function () {
  score = 20; //reasign score
  secretNumber = Math.trunc(Math.random() * 20) + 1; // ponovo generisemo random broj

  document.querySelector('.guess').value = ' ';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
});
