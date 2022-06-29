'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}</div></div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

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

console.log(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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
*/

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
