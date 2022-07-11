'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (acc, sort = false) {
  //ovde smo dedelili false zato sto necemo da se sortira, osim kad kliknemo na button
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements; //ovde sa SLICE metodom ustvari kopiramo ARRAY da ne izmenimo originalni, a ne mozemo koristiti SPREAD, jer je u pitanju CHAINING

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]); //
    const day = `${date.getDate()}`.padStart(2, '0'); //dodavanje 0 ispred
    const month = `${date.getMonth() + 1}`.padStart(2, '0'); //zato sto je zero-based
    const year = date.getFullYear();
    const displayDate = `${day}/${month}/${year}`;

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">${displayDate}</div>
    <div class="movements__value">${mov.toFixed(2)}€</div></div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1; //samo kamata veca od 1 se isplacuje od strane banke
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce(function (acc, i) {
    return acc + i;
  }, 0);
  account.balance;
  labelBalance.textContent = `${account.balance.toFixed(2)}€`; //OVAKO POVEZUJEMO SELEKTOVANI ELEMENT I REZULTAT
};

const user = 'Steven Thomas Williams'; //stw

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name1 => name1[0])
      .join('');
  });
};
createUserNames(accounts);

const updateUI = function (acc) {
  //Display movements
  displayMovements(acc);
  //Display balances
  calcDisplayBalance(acc);
  //Display summary
  calcDisplaySummary(acc);
};
console.log(accounts);

//Event handlers

let currentAccount;

//======================================
// FAKING ALWAYS WE ARE LOGGED IN

currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;
//======================================

btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); //prevent form from submiting
  console.log('LOGIN');

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  console.log(currentAccount);
  // ovaj upitnik je OPTIONAL CHAINING
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('LOGIN');

    //Display UI and message

    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    //UI
    containerApp.style.opacity = 100;

    //Create current date and time
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, '0'); //dodavanje 0 ispred
    const month = `${now.getMonth() + 1}`.padStart(2, '0'); //zato sto je zero-based
    const year = now.getFullYear();
    const hour = `${now.getHours()}`.padStart(2, '0');
    const min = `${now.getMinutes()}`.padStart(2, '0');

    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min} `;
    // day/month/year
    //Clear input fields

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //updating UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //Add movement
    currentAccount.movements.push(amount);

    //Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    //update UI
    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    //Delete account
    accounts.splice(index, 1);
    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

//Transfering money

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    //Transfer
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    //Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAccount.movementsDates.push(new Date().toISOString());
    //updating UI
    updateUI(currentAccount);
  }
});

//SORT BUTTON

//state variable - svaki put kada drugi put kliknemo

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted; // ovo je za menjanje iz TRUE u FALSE
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

//SLICE metod ne menja originalni NIZ
console.log(arr.slice(2)); // ovde se vraca NOVI ARRAY, znaci ne menja se postojeci
console.log(arr.slice(2, 4)); // drugi parametar nece biti ukljucen
console.log(arr.slice(-1)); // poslednji element svakog ARRAY
console.log(arr.slice(1, -2)); // rezultat je 'b' i 'c'
console.log(arr.slice()); // kreiranje 'shallow copy', bez argumenata dobijemo isti niz
console.log([...arr]); // isto 'shallow copy' pomocu SPREAD operatora
// da li cemo se odluciti za "slice" metod ili SPREAD, to zavisi da li cemo koristiti CHAINovane metode, tada mora 'slice'

//SPLICE metod - ipak menja originalni ARRAY

//console.log(arr.splice(2));
// console.log(arr.splice(-1)); //Brisanje poslednjeg elementa iz originalnog ARRAY
console.log(arr);
arr.splice(1, 3); // drugi parametar broji koliko elemenata brisemo
console.log(arr);

//REVERSE - vraca unazad i MENJA originalni ARRAY

const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//CONCAT - spajanje dva niza

const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); //isto na drugi nacin napisano pomocu SPREAD

//JOIN

console.log(letters.join(' - '));


const arr = [23, 11, 64];

console.log(arr[0]);
// umesto [] mozemo koristiti AT metod
console.log(arr.at(0));

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1)); // razlog zasto je mnogo jednostavnije koristiti AT METHOD
// i naravno odlican je za METHOD CHAINING

console.log('Jonas'.at(0));
console.log('Jonas'.at(-1));


//forOf loop
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  // pristupanje trenutnom indeksu 'i'
  // red parametara je VEOMA VAZAN i on je sledeci: index tretnutnog elementa, trenutni element

  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

// u ovom slucaju forEach metod je HIGHER ORDER function i njemu CALLBACK funkcija kaze sta da radi
movements.forEach(function (movement, index, array) {
  // pristupanje indeksu preko forEach metoda
  // red parametara je VEOMA VAZAN i on je sledeci: trenutni element, index tretnutnog elementa, treci je ceo ARRAY koji loopujemo
  if (movement > 0) {
    console.log(` Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(` Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

// 0: function (200)
// 1: funnction (450)
// 2: function (400)

//CONTINUE i BREAK statements NE RADE u forEach metodu
// zato ako mi trebaju ne mogu koristiti forEach


//forEach on MAPS
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  // red argumenata je VEOMA VAZAN i on je sledeci: trenutna vrednost, key tretnutnog elementa, treci je ceo MAP koji loopujemo

  console.log(`${key}: ${value}`);
});

//forEach on SETS

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

console.log(currenciesUnique); //dobijamo svaku vrednost samo jednom
//kod SET nemamo INDEX i nemamo KEYS
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
*/

//FIND

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis'); // nacin pretrage po objektu

console.log(account);

for (const a of accounts) {
  if (a.owner === 'Jessica Davis') {
    console.log(a);
  }
}

//Some Metod

console.log(movements);
// INCLUDES proverava samo da li postoji isti element
console.log(movements.includes(-130));
// SOME metod proverava da li postoji BILO KOJA vrednost koja zadovoljava uslov

console.log(movements.some(mov => mov === -130)); // isto napisano ali preko SOME metoda
const anyDeposits = movements.some(mov => mov > 500);
console.log(anyDeposits);

//Every metod

// Slican kao i SOME, ali samo vraca TRUE ukoliko je svaki element prosao uslov
console.log(account4.movements.every(mov => mov > 0));

// separated CALLBACK

const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

//FLAT

const arr = [
  [1, 2, 3],
  [4, 5, 6, 7, 8],
];

console.log(arr.flat()); // spajanje dva ARRAY,

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];

console.log(arrDeep.flat(2)); // u argumentu definisemo koliko LEVELA hocemo duboko da spajamo ARRAY

//  I nacin
// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

//  II  nacin
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// postoji i flatMap() metod koji je bolji zbog performansi
//ali ide samo jedan LEVEL duboko u ARRAY, tako da ako ima vise levela onda ga ne mozemo koristiti

const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);

// SORTING

//strings
const owners = ['Jonas', 'Zack', 'Adam', 'Martha'];
console.log(owners.sort()); // metod 'sort' MENJA ARRAY

//

console.log(movements);
//console.log(movements.sort());
//Sort prvo konvertuje sve u STRING pa onda radi sortiranje
//zato se to ovako ispravlja

//return <0 , a, b
//return >0,  b, a

//Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });

//ovo mozemo i ovako napisati

movements.sort((a, b) => a - b);

console.log(movements);

//Descending
movements.sort((a, b) => {
  if (a > b) return -1;
  if (b > a) return 1;
});

//movements.sort((a, b) => b - a);
console.log(movements);

// ako imamo string gde su izmesani brojevi i stringovi onda NE KORISTITI OVAJ METOD

//MORE WAYS OF CREATING AND FIILING ARRAYS

console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7); // kada PASSujemo samo jedan argument, onda ovo znaci da ima 7 praznih mesta, tj to je njegova duzina
//JEDINI metod koji mozemo pozvati sada je metod FILL()
console.log(x);
console.log(x.map(() => 5)); // NE MOZEMO NA X pozivati MAP metod

// prazni ARRAY + fill method
//x.fill(1); // MENJA ARRAY i dodaje 1 sedam puta
console.log(x);
x.fill(1, 3, 5); //kao SLICE metod radi
console.log(x);

const arr1 = [1, 2, 3, 4, 5, 6, 7];
arr1.fill(23, 2, 6);
console.log(arr1);

//Array.from
// sluzi za pretvaranje ITERABLES (strings, maps, sets) u ARRAYS
// takodje i sluzi za pretvaranje 'querySelectorAll' iz 'nodelist' u ARRAYS
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (cur, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'), //ovo je 'nodelist' u sirovom stanju
    el => Number(el.textContent.replace('€', '')) //maping koji transformise inicijalni ARRAY u ARRAY koji hocemo
  );

  // OVO JE DRUGI NACIN koji mozemo koristiti preko metoda map()
  //console.log(movementsUI.map(el => Number(el.textContent.replace('€', ''))));

  console.log(movementsUI);
});

// ARRAY METHODS PRACTICE

//1.

const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

//2. da izbrojimo koliko ima depozita sa najmanje 1000 eura

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  //  .filter(mov => mov >= 1000).length; //OVO je preko filter metoda
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0); // OVO je nacin kako da nesto brojim preko REDUCE

console.log(numDeposits1000);

//Prefixed ++ operator
let a = 10;
console.log(a++); //vraca 10
console.log(++a); //vraca 11
console.log(a); //vraca 11

// 3. Kreirati novi objekat pomocu REDUCE()koji sadrzi sumu deposits i withdrawals u isto vreme odjednom

const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // posto ovde imamo {} function body, moramo rucno da pisemo RETURN

      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur); // ovo moze na sledeci nacin

      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(sums);

//4 funkcija za pretvaranje STRINGA u TITLE CASE (This Is a Nice Title Case)

const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a LONG title but not too loog'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
