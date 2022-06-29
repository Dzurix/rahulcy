'use strict';

//let firstname = "upoje";

//console.log(firstname);
/*
console.log("glisoje");
console.log('radoje');
console.log('blagoje');
*/

//coding challenge 1

// let marksHight1 = 1.69;
// let marksWeight1 = 78;
// let marksWeight2 = 95;
// let marksHight2 = 1.88;

// let johnsHeight1 = 1.95;
// let johnsWeight1 = 92;
// let johnsHeight2 = 1.76;
// let johnsWeight2 = 85;

// let marksBMI1 = marksWeight1 / marksHight1 ** 2;
// console.log("Marks BMI 1 is:", marksBMI1);

// let johnsBMI1 = johnsWeight1 / johnsHeight1 ** 2;
// console.log("Johns BMI is", johnsBMI1);

// let marksBMI2 = marksWeight2 / marksHight2 ** 2;
// console.log("Marks BMI 2 is;", marksBMI2);

// let johnsBMI2 = johnsWeight2 / johnsHeight2 ** 2;
// console.log("Johns BMI 2 is ", johnsBMI2);

// let marksHigherBMI1 = marksBMI1 > johnsBMI1;
// console.log(marksHigherBMI1);

// let marksHigherBMI2 = marksBMI2 > johnsBMI2;
// console.log(marksHigherBMI2);

// console.log("coding chalenge 2");

// if (marksBMI1 > johnsBMI1) {
//   console.log(`Marks BMI ${marksBMI1} is greather then Johns ${johnsBMI1}`);
// } else {
//   console.log(`Johns BMI ${johnsBMI1} is greather then Marks BMI ${marksBMI1}`);
// }

// const firstname = "Jonas";
// const job = "teacher";
// const birthYear = 1991;

// const jonas =
//   // "I am " + firstname + " ,a " + (2037 - birthYear) + " years old " + job; OVAKO NE TREBA NIKADDDDD

//   //vec ovako treba
//   `I'm ${firstname}, a ${2037 - birthYear} years old ${job} !!!`;

// console.log(jonas);

// console.log(`Kreiranje
// stringa koji
// prelazi u
// vise linija. Ovo
// je mnogo
// lakse
// za
// pisanje`);

// const age = 10;
// const isOldEnought = age >= 18;

// if (isOldEnought) {
//   console.log(`Sarah can start driving lessons 🚘`);
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years 🤞💕`);
// }

// coding chalenge 2

// const inputYear = "1991";
// console.log(Number(inputYear));
// console.log(inputYear + 18); // rezultat je 199118
// console.log(Number(inputYear) + 18); // rezultat je 2009

//const { min } = require("lodash");

// console.log(Number("Jonas")); // rezultat je NaN - Not a Number (invalid number)

// console.log(String(23), 23); // druga boja u consoli nam govori da je rec o stringu

// console.log("I am " + 23 + " years old"); // primer type coercion

// console.log("23" - "10" - 3); // - rezultat je 10 -  minus pokrece obrnuto coersion - stringove pretvara u brojeve
// console.log("23" * "2"); // - rezultat je 46 - isto kao i minus i za deljenje - jer JS jedino to moze da uradi

// console.log("23" + "10" + 3); // -  rezultat je 23103 -  type coersion

// // 5 falsy values:  0, "" (prazan string), undefined, null, NaN - vrednosti koje nisu FALSE, ali koje ce postati kada budemo hteli da ih pretvorimo u BOOLEAN

// // sve ostalo ce biti konvertovano u TRUE - Truthy values

// console.log(Boolean(0)); //FALSE
// console.log(Boolean(undefined)); // FALSE
// console.log(Boolean("Jonas")); // TRUE
// console.log(Boolean({})); // TRUE
// console.log(Boolean("")); // FALSE

// //  Kada JS radi type COERCION to BOOLEANS?
// // Postoje dva scenarija 1: LOGICAL OPERATORS i 2: LOGICAL CONTEXT - if-else statements

// const money = 0;
// if (money) {
//   console.log("Don't spend it all ");
// } else {
//   console.log("You should get a job!");
// }

// //Rezultat je   You should get a job!  zato sto je 0 falsy value

// let height;

// if (height) {
//   console.log("YAY, Height is defined");
// } else {
//   console.log("Heigth is UNDEFINED");
// } //Rezultat je   Heigth is UNDEFINED  zato sto je udefined (isto dobijamo i za 0 - to je BUG)

// const age = 18; //   jedno '=' je asignment, a 'strict comparison operator' je trostruko '===' (ne podrzava type coercion)

// // 'loose comparison operator' je dvostruko jednako '==' (podrzava type coercion) =>   '18' == 18   rezultat je TRUE

// if (age === 18) console.log("You just became an adult :D "); // ako nemamo uglaste zagrade {} onda moze i ovako da se napise

// const favourite = Number(prompt("What's your favourite number?")); // ovako smo konvertovali u Number, posto input od PROMPT je uvek STRING
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   // 23 === 23
//   console.log("Cool! 23 is an amazing number");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else {
//   console.log("Your number is not 23 or 7");
// }

// // difirent operator != loose version and !== strict version
// // UVEK KORISTIM !==

// if (favourite !== 23) console.log("Why not 23");

// const hasDriversLIcense = true;
// const hasGoodVision = true;
// const isTired = false;

// if (hasDriversLIcense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }
// //rezultat je     Sarah is able to drive!

// // CHALENGE 3

// const avgDolphins = (97 + 112 + 80) / 3;
// const avgKoalas = (109 + 95 + 50) / 3;
// const minDolphins = avgDolphins >= 100;
// const minKoalas = avgKoalas >= 100;

// console.log(avgDolphins);
// console.log(avgKoalas);
// console.log(minDolphins);
// console.log(minKoalas);

// if (avgDolphins > avgKoalas && avgDolphins >= 100) {
//   console.log(`The winers are Dolphins 🏆`);
// } else if (avgDolphins === avgKoalas && minDolphins && minKoalas) {
//   console.log("It's a draw");
// } else if (avgDolphins < avgKoalas && avgKoalas >= 100) {
//   console.log("The winers are Koalas 🏆");
// } else {
//   console.log("There are no winners 🚫");
// }

// const day = "monday";

// switch (day) {
//   case "monday": // day === 'monday'
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break; // bez break samo bi nastavio da izvrsava ostali kod

//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wendesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Records videos");
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend :D ");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

// const age = 23;

// age >= 18
//   ? console.log("I like to drink wine")
//   : console.log("I like to drink water");

// const drink = age >= 18 ? "wine" : "water";

// console.log(drink);

// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

// CODING CHALENGE 4

// let bill = 10;
// let tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;

// console.log(
//   `The bill was ${bill}, the tip was ${tip} and the total value is ${
//     bill + tip
//   }...`
// );

// function logger() {
//   console.log("My name is Upoje");
// }

// logger(); // invoking, calling, running the function

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

//   return juice;
// }

// fruitProcessor(5, 0);
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const inputYear = "1991";
// console.log(Number(inputYear));
// console.log(inputYear + 18); // rezultat je 199118
// console.log(Number(inputYear) + 18); // rezultat je 2009

// console.log(Number("Jonas")); // rezultat je NaN - Not a Number (invalid number)

// console.log(String(23), 23); // druga boja u consoli nam govori da je rec o stringu

// console.log("I am " + 23 + " years old"); // primer type coercion

// console.log("23" - "10" - 3); // - rezultat je 10 -  minus pokrece obrnuto coersion - stringove pretvara u brojeve
// console.log("23" * "2"); // - rezultat je 46 - isto kao i minus i za deljenje - jer JS jedino to moze da uradi

// console.log("23" + "10" + 3); // -  rezultat je 23103 -  type coersion

// // 5 falsy values:  0, "" (prazan string), undefined, null, NaN - vrednosti koje nisu FALSE, ali koje ce postati kada budemo hteli da ih pretvorimo u BOOLEAN

// // sve ostalo ce biti konvertovano u TRUE - Truthy values

// console.log(Boolean(0)); //FALSE
// console.log(Boolean(undefined)); // FALSE
// console.log(Boolean("Jonas")); // TRUE
// console.log(Boolean({})); // TRUE
// console.log(Boolean("")); // FALSE

// //  Kada JS radi type COERCION to BOOLEANS?
// // Postoje dva scenarija 1: LOGICAL OPERATORS i 2: LOGICAL CONTEXT - if-else statements

// const money = 0;
// if (money) {
//   console.log("Don't spend it all ");
// } else {
//   console.log("You should get a job!");
// }

// //Rezultat je   You should get a job!  zato sto je 0 falsy value

// let height;

// if (height) {
//   console.log("YAY, Height is defined");
// } else {
//   console.log("Heigth is UNDEFINED");
// } //Rezultat je   Heigth is UNDEFINED  zato sto je udefined (isto dobijamo i za 0 - to je BUG)

// const age = 18; //   jedno '=' je asignment, a 'strict comparison operator' je trostruko '===' (ne podrzava type coercion)

// // 'loose comparison operator' je dvostruko jednako '==' (podrzava type coercion) =>   '18' == 18   rezultat je TRUE

// if (age === 18) console.log("You just became an adult :D "); // ako nemamo uglaste zagrade {} onda moze i ovako da se napise

// const favourite = Number(prompt("What's your favourite number?")); // ovako smo konvertovali u Number, posto input od PROMPT je uvek STRING
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   // 23 === 23
//   console.log("Cool! 23 is an amazing number");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else {
//   console.log("Your number is not 23 or 7");
// }

// // difirent operator != loose version and !== strict version
// // UVEK KORISTIM !==

// if (favourite !== 23) console.log("Why not 23");

// const hasDriversLIcense = true;
// const hasGoodVision = true;
// const isTired = false;

// if (hasDriversLIcense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }
// //rezultat je     Sarah is able to drive!

// // CHALENGE 3

// const avgDolphins = (97 + 112 + 80) / 3;
// const avgKoalas = (109 + 95 + 50) / 3;
// const minDolphins = avgDolphins >= 100;
// const minKoalas = avgKoalas >= 100;

// console.log(avgDolphins);
// console.log(avgKoalas);
// console.log(minDolphins);
// console.log(minKoalas);

// if (avgDolphins > avgKoalas && avgDolphins >= 100) {
//   console.log(`The winers are Dolphins 🏆`);
// } else if (avgDolphins === avgKoalas && minDolphins && minKoalas) {
//   console.log("It's a draw");
// } else if (avgDolphins < avgKoalas && avgKoalas >= 100) {
//   console.log("The winers are Koalas 🏆");
// } else {
//   console.log("There are no winners 🚫");
// }

// const day = "monday";

// switch (day) {
//   case "monday": // day === 'monday'
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break; // bez break samo bi nastavio da izvrsava ostali kod

//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Records videos");
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend :D ");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Records videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend :D ");
// } else {
//   console.log("Not a valid day!");
// }

// const appleJuice = fruitProcesor(5, 0);
// console.log(fruitProcesor(5, 0));
// //FUNCTION DECLARATION
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);

// //FUNCTION EXPRESSION  - kada funkciju smestimo u varijablu (samim tim ce ta varijabla postati funkcija)
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);
// console.log(age1, age2);

// // Arrow function

// const calcAge3 = (birthYear) => 2037 - birthYear;

// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   // ako ima vise parameratara, onda mora zagrada ()
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement; // ako ima vise linija koda, onda ipak moramo da pozovemo "return"
//   return `${firstName} retires in ${retirement} years.`;
// };
// console.log(yearsUntilRetirement(1991, "Jonas"));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcesor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of orange.`;
//   return juice;
// }

// fruitProcesor(2, 3);

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years.`);
//     return retirement; // posle return , funkcija prestaje za izvrsavanjem - SVE POSLE SE ignorise
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
// };
// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1970, "Mike"));

//coding chalenge 5

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// let avgDolphins = calcAverage(44, 23, 71);
// let avgKoalas = calcAverage(65, 54, 49);

// console.log(avgDolphins, avgKoalas);

//checkWinner

// const checkWinner = () => {
//   if (avgDolphins > avgKoalas * 2) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas > avgDolphins * 2) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log(`No teams win`);
//   }
// };

// console.log(checkWinner());

// const friends = ["Michael", "Steven", "Peter"]; // literal sintax
// const years = new Array(1991, 1984, 2000);

// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay"; // dodeljivanje novog clana nizu iako je tip CONST -
// // ovo moze samo zato sto primitivne vrednosti se ne mogu menjati a ARRAY to nije
// // ono sto ne moze to je da zamenimo ceo ARRAY ako smo vec definisali kao CONST
// console.log(friends);

// const jonas = [firstname, "Schmedtmann", 2037 - 1991, "teacher", friends];
// // mozemo koristiti razne vrste podataka u Array

//Exercise
// const friends = ["Michael", "Steven", "Peter"];
// const newLenght = friends.push("Jay"); // metod koji dodaje novi clan na kraju niza
// //push je metod, tj. funkcija koja vraca vrednost, u ovom slucaju velicinu Array - to dobijemo
// //kada je uskladistimo u novu varijablu
// friends.unshift("John"); // metod koji dodaje novi clan na pocetku niza
// console.log(friends);

// friends.pop(); //brise poslednji element
// friends.shift(); // brise prvi element

// console.log(friends.indexOf("Steven")); // pokazuje na kojoj je poziciji element niza

// if (friends.includes("Steven")) {
//   console.log(" You have a friend called Steven");
// } // vraca true ili false ako postoji taj element u nizu

//coding chalenge 6

// const calcTip = (bill) => {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// };

// console.log(calcTip(301));

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(tips);
// console.log(total);

//OBJECTS

// const jonas = {
//   // ovo je najjednostavniji nacin pisanja objekata - OBJECT LITERAL SINTAX
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

// // const nameKey = "Name";
// // console.log(jonas["first" + nameKey]);
// // console.log(jonas["last" + nameKey]);

// // const interestedIn = prompt(
// //   `What do you want to know about Jonas? Choose between firstName,
// //   lastName, age, job and friends.`
// // );

// // if (jonas[interestedIn]) {
// //   console.log(jonas[interestedIn]);
// // } else {
// //   console.log(`Wrong request! Choose between firstName,
// //   lastName, age, job and friends.`);
// // }
// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtman";
// console.log(jonas);

// //chalenge

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best frieds is called ${jonas.friends[0]}.`
// );

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function (birthYear) {   // PRVA verzija pisanja funkcije
//     return 2037 - birthYear;
//   },

//   calcAge: function () {            // DRUGA verzija pisanja funkcije preko 'this', ali je ovde problem
//   zato sto se stalno racuna vrednost ako vise puta pozovemo funkciju
//     console.log(this); //ovo ce isprintati ceo objekat
//     return 2037 - this.birthYear; // ovo je this koje upucuje na birthyear
//   }

//   calcAge: function () {
//     this.age = 2037 - this.birthYear; // TRECA verzija kojom se izbegava problem DRUGE,
//     kreiranjem novog PROPERTYJA AGE
//     return this.age; //
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     } and he has ${this.hasDriversLicense ? "a" : "no"} drivers licence. `;
//   },
// };

// console.log(jonas.calcAge());
// console.log(jonas["calcAge"](2000));
// console.log(jonas.age);

// //Chalenge

// console.log(jonas.getSummary());

// CHALENGE 7

// const mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// const john = {
//   firstName: "John",
//   lastName: "Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// console.log(mark.calcBMI());
// console.log(john.calcBMI());

// console.log(` ${john.BMI > mark.BMI ? "John Smith" : "Mark Miller"}'s BMI (${
//   john.BMI > mark.BMI ? john.BMI : mark.BMI
// })
// is higher than ${john.BMI < mark.BMI ? "John Smith" : "Mark Miller"}'s BMI (${
//   john.BMI < mark.BMI ? john.BMI : mark.BMI
// }) !`);

// LOOPS

// for (let rep = 1; rep <= 10; rep = rep + 1) {
//   console.log(`Lifting weight repetition ${rep} 🏋️‍♂️.`);
// }

// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// //prvo kreiramo prazan niz
// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//   console.log(jonas[i]); //reading from jonas array

//   types[i] = typeof jonas[i]; //kreiranje novog niza na osnovu postojeceg

//   types.push(typeof jonas[i]);
// } // drugi nacin kreiranja novog niza

// console.log(types);

//practise - calculate ages and add them to new array

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]); //dodajemo vrednost u niz
// }
// console.log(ages);

//continue sluzi da izadje iz trenutne iteracije petlje i da nastavi sledecu
// // tj pomocu 'continue' mozemo da preskacemo elemente
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue; //izvlacimo samo stringove iz niza
//   console.log(jonas[i]);
// }

// //break sluzi da izadje tj. prekine celu petlju
// //npr. kad nadje broj, izadje iz petlje
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "number") break; //kad nadjes broj, BREAK
//   console.log(jonas[i]);
// }

// looping unazad - backwards
// for (let i = jonas.length - 1; i >= 0; i--) {
//   // iteracija unazad
//   console.log(i, jonas[i]);
// }

// //Loop in loop

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`---Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//    console.log(`Exercise ${exercise} : Lifting weight repetition ${rep} 🏋️‍♂️`);
//   }
// }

//WHILE loop

// let rep = 1;

// while (rep <= 10) {
//   //while - dok je ovaj uslov TRUE
//   //while loop je raznovrsnija, sto znaci da se moze koristiti u raznim situacijama
//   // a to sve zato sto joj NE TREBA COUNTER!!!
//   console.log(`Lifting weight repetition ${rep} 🏋️‍♂️`);
//   rep++;
// }

// //primer bez counter - brojaca

// //bacamo kockicu dok ne dobijemo sesticu

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//   console.log(` You rolled a ${dice}!!!`);
//   dice = Math.trunc(Math.random() * 6) + 1; // ponovo kreiramo novi broj koji onda opet pokrece novu iteraciju

//   if (dice === 6) console.log("Loop is about to end...");
// }

//chalenge 7

//automatsko kreiranje novih nizova na osnovu jednog poznatog niza
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];
// const totals = [];

// const calcTip = (bill) => {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15; //uvek mora RETURNNNNNNN,
//   } else {
//     return bill * 0.2;
//   }
// };

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(bills[i] + tips[i]);
// }

// console.log(bills);
// console.log(tips);
// console.log(totals);

// //kreiranje funkcije koja sabira sve clanove bilo kojeg niza
// let sum = 0; // sluzi za sabiranje svih brojeva
// const calcAverage = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]; // sum += arr[i] drugi nacin pisanja
//   }
//   // console.log(sum / arr.length);
//   return sum / arr.length;
// };

// console.log(calcAverage(totals));
// console.log(calcAverage(tips));

// real life problem example

//const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

/* understanding the problem

- what is temp. amplitude? answer: razlika izmedju najvise i najnize vrednosti
- how to compute maz and min temps?
- what's a sensor error? And what to do?


*/

/*
how to ingore errors?
find max value in array
find min value in array
subtract min from max - amplitude and return it
  */

/*const calcTempAmplitude = function (temps) {

  let max = temps[0]; //pretpostavljamo da je prvi element najveca vrednost, pa onda trazimo vecu
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i]; //kreirannje varijable za smestanje trenutne temperature

    if (typeof curTemp !== "number") continue; //preskakanje bilo kog tipa vrednosti u nizu osim broja
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min; // returnujemo i izracunavamo amplitudu
};

calcTempAmplitude([3, 7, 4, 1, 8]);

const amplitude = calcTempAmplitude(temperatures);

console.log(amplitude);   */

// PROBLEM 2 - Function should receive 2 arrays of temps

/*

1) Understanding the problem

- With 2 arrays, should we implement functionality twice?  - NO is answer. Just merge two arrays

2) Breaking up into sub-problems

- How to merge two arrays?

*/
/*
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2); //spajanje dva niza

  console.log(temps);

  let max = temps[0]; //pretpostavljamo da je prvi element najveca vrednost, pa onda trazimo vecu
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i]; //kreirannje varijable za smestanje trenutne temperature

    if (typeof curTemp !== "number") continue; //preskakanje bilo kog tipa vrednosti u nizu osim broja
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min; // returnujemo i izracunavamo amplitudu
};

const amplitudeNew = calcTempAmplitudeNew([3, 7, 4, 1, 8], [1, 3, 5, 7, 8]);

console.log(amplitudeNew);  */

//DEBUGING
/*
const mesureKelvin = function () {
  const mesurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degrees celsius:")), //prompt sve pretvara u string
  };

  const kelvin = mesurement.value + 273;
  return kelvin;
};

console.log(mesureKelvin());
*/

//chalenge 8
// const arr = [17, 21, 23];

// const termometar = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(`...` + `${arr[i]} C in ${arr.indexOf(arr[i]) + 1} days ...`);
//   }
// };

// console.log(termometar(arr));

// vezbanje SCOPING IN PRACTICE
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName} you are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      const firstName = "Steven"; // Kreiranje nove varijable sa istim imenom kao varijabla iz spoljasnjeg SCOPE

      output = "New OUTPUT"; // Reasigning outer scope's variable

      const str = `Oh, and you're a millenial, ${firstName}.`;
      console.log(str);

      // dokaz da su funkcije BLOCK SCOPED krecuci od ES6

      function add(a, b) {
        return a + b;
      }
    }
    //  console.log((str));  - ovde ce biti referenceError str is not defined
    // to je zato sto su CONST i LET varijable BLOCK SCOPED

    console.log(millenial); //VAR varijable su FUNCTION SCOPED (nisu BLOCK SCOPED)
    // console.log(add(2, 3));  - ovde ce biti referenceError add is not defined - ALI SAMO AKO KORISTIMO 'STRICT MODE'

    console.log(output);
  }
  printAge();
  return age;
}

const firstName = "Jonas";
calcAge(1991);     */

//VEZBANJE HOISTING

// //varijable
// console.log(me); //reference error daju sve tri, jer su u TDZ
// console.log(job);
// console.log(year);

// var me = "Jonas";
// let job = "teacher";
// const year = 1991;

// //functions

// console.log(addDecl); //ovo moze, jer je deklaracija I SAMO ONA MOZE DA SE POZIVA pre deklarisanja
// console.log(addExpr); // ova ne moze jer su varijabla, tj u TDZ
// console.log(addArow); // undefined je posto je var hoistovana, (npr. tada pozivamo undefined(2,3))

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArow = (a, b) => a + b;

//Vezbanje THIS keyword

/*  
console.log(this); // ovde dobijamo window object

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // posto je 'strict' mode, ovde je undefined (inace isto daje window object u obicnom modu)
};

calcAge(1991);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this); // posto arrow funcije nemaju this, onda je this roditelja, u ovom slucaju isto window, jer je global scope
};

calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);
    console.log(this);
  },
};

jonas.calcAge(); //rezultat je upravo ceo jonas objekat *OBJEKAT KOJI POZIVA METOD*

const matilda = {
  age: 2017,
};

matilda.calcAge = jonas.calcAge; // pozajmljivanje metoda iz jednog objekta u drugi (BEZ POZIVANJA-ZAGRADA)

matilda.calcAge(); // rezultat je objekat matilda, a ne jonas, ,sto znaci da THIS upucuje na OBJEKAT koji poziva metod

const f = jonas.calcAge;

f(); // ovde je undefined, posto f nije zakacena na objekat (samo je regularni poziv funkcije)
*/
/*
var firstName = "Matilda"; //posto je VAR, time kreiramo property u GLOBAL objectu (Window) i zato cemo dobiti preko THIS ovaj rezultat

const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);

    // const self = this; //rezultat je Jonas - I nacin da izbegnemo undefined

    // const isMilenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996); // PRVI nacin da izbegnemo da THIS bude undefined
    //   console.log(this.year >= 1981 && this.year <= 1996); // rezultat je udefined posto regularni poziv funkcije, postavlja THIS u UNDEFINED
    // };

    // DRUGI nacin da izbegnemo undefined - koriscenje ARROW funkcije , jer ona nema svoj THIS

    const isMilenial = () => {
      //ovako kada pozovemo funkciju, potrazice THIS od roditelja, a to je Jonas
      console.log(this);

      console.log(this.year >= 1981 && this.year <= 1996); //
    };

    isMilenial(); // ovo je regularlni poziv funkcije
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.greet(); // rezultat je undefined, posto arrow function nemaju svoj this, nego uzimaju od roditelja, a to je ovde global SCOPE

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments); // arguments keyword
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12); // mozemo dodavati i vise argumenata, u ovom slucaju nemaju ime, ALI POSTOJE

var addArow = (a, b) => {
  console.log(arguments); //ne postoji arguments u arrow function
  return a + b;
};

addArow(2, 5, 8); // arguments is not defined
*/

// PRIMITIVES VS OBJECTS

// PRIMITIVE TYPES

/*
let lastName = "Wiliams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName); // rezultat je 'Davis Wiliams'

// OBJECTS - REFERENCE types
const jesica = {
  firstName: "Jesica",
  lastName: "Wililams",
  age: 27,
};

const mariedJesica = jesica;
mariedJesica.lastName = "Davis";
// rezultati za oba sledeca slucaja je 'Davis', zbog svega objesnjenog o objektima
console.log("Before mariage", jesica);
console.log("After mariage", mariedJesica);
*/
// mariedJesica = {} OVO NE MOZE, jer je CONST i sacuvace se na drugoj poziciji u memoriji
//- ne mozemo menjati adresu u CALL STACK jer je CONST
//samim tim i referenca ka toj poziciji u memoriji ce morati da se promeni a to ne moze jer je CONST
// da je LET u pitanju, onda MOZE

// KOPIRANJE OBJEKATA

/*const jesica2 = {
  firstName: "Jesica",
  lastName: "Wililams",
  age: 27,
};

const jesicaCopy = Object.assign({}, jesica2); // nacin kopiranja, tj mergovanje objekta sa praznim objektom :D
jesicaCopy.lastName = "Davis";
// - uspesno 'kopiranje' objekata
console.log("Before mariage", jesica2);
console.log("After mariage", jesicaCopy);   */

//DESTRUCTURING

// destructuring Arrays

// Data needed for a later exercise
//const flights =
//  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
/*const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};   */

/* 
const arr = [2, 3, 4];

const [a, b, c] = arr; //destruktuiranje array
const [first, second] = restaurant.categories; //prvi i drugi element
let [prvi, , drugi] = restaurant.categories; // preskakanje elementa (izvlacimo prvi i treci element)
console.log(prvi, drugi);

// zamena varijabli
[prvi, drugi] = [drugi, prvi]; // zamena varijabli pomocu destructuringa
console.log(prvi, drugi);

// primena destructuringa kod funkcija koja vraca niz i mozemo odma destrucuirati rezultat u vise varijabli

const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

// nested destructuring array - niz unutar niza

const nested = [2, 4, [5, 6]];

//const [i, , j] = nested; // hvatanje prvog i treceg elementa
// console.log(i, j);

const [i, , [j, k]] = nested; // destructuring nested elements

console.log(i, j, k);

// setovanje default vrednosti varijabli destucturinga
// ovo se koristi kada NE ZNAMO DUZINU ARRAY

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); */

// Destructuring Objects

// Data needed for a later exercise
/*
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(` Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Futoska 89",
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant; // sintaksa object destructuring
console.log(name, openingHours, categories);

//sta da radimo kada hocemo da se imena varijabli razlikuju od property imena

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

//definisanje default vrednosti
// Ovo je korisno kada izvlacimo podatke sa nekog API ili neceg drugog, npr. kod property koji ne postoje

const { menu = [], starterMenu: starters = [] } = restaurant; // menu je prazan array, a starters preuzima vrednosti starterMenu iz objekta posto postoje

console.log(menu, starters);

//zamena varijabli kod objekata

let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };

//  {a,b} = obj; - ovo se ne moze ovako napisati, jer dobijemo syntax Error
// kada zapocinjemo liniju sa viticastim zagradama JS ocekuje CODE BLOCK ,
// a posto nista se ne moze asignovati CODE BLOCKu, moramo staviti obicnu zagradu, ovako
({ a, b } = obj);

console.log(a, b);

// Nested objects

const {
  fri: { open, close },
} = openingHours;

console.log(open, close);

// THE SPREAD OPERATOR

const arr = [7, 8, 9];
const newArr = [1, 2, ...arr]; // sintaksa
console.log(newArr);

console.log(...newArr); //pojedinacno logovanje svakog clana niza - expandovanje

const newMenu = [...restaurant.mainMenu, "Gnocci"]; //dodavanje novog elementa postojecem nizu i
console.log(newMenu); // samim tim kreiranje novog niza

// Copy array

const mainMenuCopy = [...restaurant.mainMenu]; //kopiranje 'shalow'
// Spajanje dva niza
const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu1);

// primena kod stringova

const str = "Jonas";
const letters = [...str, "", "S."];
//console.log(`${...str}` Schmedtmann);

// primena kod funkcija

//  const ingredients = [
//   prompt("Let's make pasta! Ingredient 1 ?"),
//   prompt("Let's make pasta! Ingredient 2 ?"),
//   prompt("Let's make pasta! Ingredient 3 ?"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);  ovako bi radili da nema SPREAD
//restaurant.orderPasta(...ingredients); // mnogo lakse za pisanje pomocu SPREAD
/*
//Objects

const newRestaurant = { ...restaurant, founder: "Guissepe", foundedIn: 1998 };

console.log(newRestaurant);

// REST operator

const [ab, ba, ...others] = [1, 2, 3, 4, 5]; // ab = 1 , ba = 2, others = [3,4,5]

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// REST kod OBJEKATA

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//Rest kod funkcija

const sabiranjeXelemenata = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    console.log(sum);
  }
};

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");

//
console.log(3 || "jonas");

const guest1 = restaurant.numGuests ? restaurant.numGuests : 10; // guest 1 je isto sto i numGuests ako postoji, ako ne, onda je 10

//pomocu short circuitinga, ovo mozemo jednostavnije napisati

const guest2 = restaurant.numGuests || 10; //

// primer za && operator

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinac");
}
// mozemo i ovako jednostavnije napisati

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinac");

// Nullish coalescing operator
restaurant.numGuests = 0;
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // dobijemo 0

// assigment operators

const rest1 = {};
(name1 = "Capri"), (numGuests1 = 20);
*/

/*
//CHALENGE 9

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...names) {
    let [abc] = names;
    console.log(
      `The players are ${names}, and the number of goals is ${abc.length}`
    );
  },
};

//1
const [players1, players2] = game.players;

//2
const [gk, ...fieldPlayers] = players1;

//3
const allPlayers = [...players1, ...players2];

//4
const playersFinal = [...players1, "Thiago", "Coutinho", "Perisic"];

//5
const { team1, x: draw, team2 } = game.odds;

//6
console.log(game.printGoals("Davies", "Muller", "Lewandowski"));
console.log(game.printGoals(game.scored));

//7
team1 < team2 && console.log("Team 1 is more likely to win");
*/

// FOR OF LOOP
/*
//sintaksa
for (const item of menu) console.log(item);

// Način kako da dobijemo i indeks i element iz FOR OF LOOPA
for (const item of menu.entries()) console.log(item);

//Destructuring kod for of LOOPA - sve što je niz se moze destructuirati
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}} `);
}
*/
//Enhanced object literals
/*
const weekdays = ["thu", "fri", "sat"];
const radnoVreme = {
  [weekdays[0]]: { stalno }, //treci nacin pisanja, kada JS treba da COMPUTE
  [weekdays[1]]: { ponekad },
  sat: { nikad },
  [`day - ${2 + 1}`]: { nikad }, // treci nacin pisanja}
};

const restoran = {
  ime: "Clasico",
  osnovan: 2999,
  radnoVreme, // I nacin pisanja
  //bukvalno samo prepisemo ime vec definisanog objekta

  order(starterIndex, mainIndex) {
    // II nacin pisanja - izbacili smo : i function rec
    return this.starterMenu(starterIndex), this.mainMenu(mainIndex);
  },
};

console.log(restoran);

//stari nacin utvrdjivanja da li neki property postoji u objektu
if (restaurant.openingHours && restaurant.openingHours.monday)
  console.log(restaurant.openingHours.monday.open);

//bez optional chaining
console.log(restaurant.openingHours.monday.open); //ovde se dobija reference error, zato sto pozivamo
// nepostojeci property (ako 'monday' nije definisano dobijamo UNDEFINED) i onda pozivamo jos jedan property 'open'
// na UNDEFINED i tu dobijamo REFERENCE ERROR

// Optional chaining
console.log(restaurant.openingHours.monday?.open); //ovde gde moze nastati problem, a to je 'monday', koristimo
//optional chaining pomocu ?. i kazemo ako postoji 'monday', daj mi 'open'
//NARAVNO ako ne postoji odmah cemo dobiti UNDEFINED i nece proveravati 'open' i tako izbegavamo 'REFERENCE ERROR'

//primer primene
const days = ["mon", "thu", "wed", "thu", "fri", "sat", "sun"];

for (let day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we are open at ${open}`);
}
// rad sa metodama
console.log(restaurant.order?.(1, 2) ?? "Methos does not exist");

//rad sa nizovima

const users = [{ names: "Jonas", email: "lolo", old: 3000 }];
console.log(users[0]?.names ?? "Ovo je prazan niz");
*/
/*
// Looping objects preko keys (names)

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

// looping objects preko values

const values = Object.values(openingHours);
console.log(values);

// Za  LOOP preko celog objekta nam treba ENTRIES (vraca key (names) + values)

const entries = Object.entries(openingHours);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} anc close at ${close}`);
}
*/
/*
//Chalenge 10

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...names) {
    let [abc] = names;
    console.log(
      `The players are ${names}, and the number of goals is ${abc.length}`
    );
  },
};

//1
//const scoress = Object.entries(game.scored); GRESKA, OVO JE ARRAY a on se ovako koristi

const scoress = game.scored.entries(); // za loopovanje nam treba metod .entries

for (const [goal, players] of scoress) {
  console.log(`Goal ${goal + 1}: ${players}`);
}

//2

const odds = Object.values(game.odds); // ovo je za loopovanja na OBJEKTU
let average = 0;

for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(average);

//3

const sanse = Object.entries(game.odds);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;

  console.log(`Odd of ${teamStr} ${odd}`);
}
*/
/*
const orderSet = new Set(["Pizza", "Pizza", "Pasta", "Rissoto", "Rissoto"]);

console.log(orderSet); // dobijemo svaki clan SAMO jednom

console.log(new Set("Jonas")); // dobijemo svako slovo pojedinacno
console.log(orderSet.size); // SET za veličinu koristi metod SIZE, dok ARRAY ima LENGTH
console.log(orderSet.has("Bread")); // SET za proveru da li postoji koristi metod HAS, dok ARRAY ima INCLUDES
orderSet.add("Garlic Bread"); //dodavanje dva elementa u SET
orderSet.add("Garlic Bread");
console.log(orderSet); // SET je uvecan SAMO za jedan 'Garlic Bread'
orderSet.delete("Rissoto"); //brisanje elementa
//orderSet.clear(); // brisanje SVIH ELEMENATA

//SETS su ITERABLES, sto znaci da mozemo da LOOPujemo nad njima

for (const order of orderSet) {
  console.log(order);
}

// OSNOVNA NAMENA SETOVA JE DA UKLONE DUPLIKATE IZ ARRAYS!!!

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "waiter"];

const staffUnique = [...new Set(staff)]; //ako hocemo da SET pretvorimo u ARRAY radimo preko SPREAD operatora

console.log(staffUnique); // SETS nisu case sensitive, sto znaci da se i mali 'waiter' pojavio kao poseban element

console.log(new Set(staff).size); // ako hocemo da vidimo koliko UNIQUE vrednosti ima u SET

console.log(new Set("jonasschmedtmann").size); // da vidimo koliko razlicitih slova ima u stringu
*/
/*
const rest = new Map();
rest.set("name", "Classico Italiano"); //kod kreiranja MAPS, najlakse je prvo da kreiramo praznu MAPS, a onda da je popunimo koristimo metod .set

rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal")); //kada se pozove set metod na ovaj način, ne samo da se updajtuju mape nad kojom je pozvan, već i returnuje mape u isto vreme

// zbog toga mozemo da radimo chaining - dodatno uvezivanje

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed");

//da čitamo podatke iz mape koristimo GET metod na ime KEY

console.log(rest.get("name")); // kada pozivamo pomocu GET bitan je tip podatka od KEY, tj. da bude isti kao sto smo ga definisali
console.log(rest.get(true));

//vezba
const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

//ostali metodi

console.log(rest.has("categories"));
rest.delete(2);
console.log(rest);
console.log(rest.size);
rest.clear();
console.log(rest);

//koristenje ARRAY kao MAPS KEYS

rest.set([1, 2], "Test"); // OVO MOZE, ubacili smo novi key value pair
console.log(rest);

console.log(rest.get([1, 2])); // OVO NE MOZE vraca UNDEFINED

//Uzimanje arraya kao KEY u mapi i način pristupa podacima - tako sto array prebacimo u varijablu
// - zato što kada koristimo get, to nije isti objekat u HEAP
const arr = [1, 2];

rest.set(arr, "test");
console.log(rest.get(arr));

// koristenje OBJECTS kao MAPS KEYS

rest.set(document.querySelector("h1"), "Heading");
console.log(rest);


*/

// // popunjavanje MAPS pomocu ARRAY

// const question = new Map([
//   ["question", "What is the best programming alnguage in the world?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "JavaScript"],
//   ["correct", 3],
//   [true, "Correct 🎉"],
//   [false, "Try again!!!"],
// ]);
// console.log(question);

// //Način konverzije OBJECTS u MAPS - zato što ima istu struktura kao niz nizova
// //console.log(Object.entries(openingHours));
// //const hoursMap = new Map(Object.entries(openingHours));
// //console.log(hoursMap);

// //Iteration u Maps je moguća jer su MAPS isto iterable što znači da je FOR LOOP moguć i u njima

// //KVIZ APP
// console.log(question.get("question"));
// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt("Your answer"));

// //console.log(answer === 3 ? question.get(true) : question.get(false));  I nacin kako mozemo
// console.log(question.get(question.get("correct") === answer));

// //Konvertovanje Mape nazad u ARRAY - izgradititi novi ARRAY i onda ga otpakovati pomoću SPREAD

// console.log(...question);
// console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

/*
// Chalenge 11

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🟨 Yellow card"],
  [69, "🟥 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🟨 Yellow card"],
]);

// 1
const events = [...new Set(gameEvents.values())];

console.log(events);

//2
gameEvents.delete(64);
console.log(gameEvents);

//3
const average = gameEvents.size;

console.log(`An event happened, on average, every ${90 / average} minutes.`);

//4

for (const [i, y] of gameEvents) {
  // rrrrrrrrrrrdeeeerrrvcyjuf8swk8kog98ysd7glo   Dejina prva linija koda <3

  console.log(i <= 45 ? `[First half] ${i}:${y}` : `[Second half ${i}:${y}]`);
}

*/
/*
const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]); //dobijemo A
console.log("B737"[0]); // dobijemo B
console.log(airline.length);
// stringovi imaju slicne metoda kao i ARRAYs
console.log(airline.indexOf("r")); // dobijemo 6 - STRINGOVI SU Zero-Indexed
console.log(airline.lastIndexOf("r")); // dobijemo 10 -- pretrazivanje slova u STRINGU
console.log(airline.indexOf("Portugal")); // dobijemo 8 - case sensitive i izvlacenje cele reci iz stringa

// Namena indeksiranja u STRING - izvlacenje delova STRING pomocu SLICE metoda

console.log(airline.slice(4)); // rezultat je 'Air Portugal' - to je SUBSTRING - deo originalnog STRING
// ovo NE MENJA GLAVNI STRING zato sto je
//Nemoguće  menjati stringove jer su PRIMITIVES. Svi metodi koje koristimo vraćaju NOVE STRINGove

console.log(airline.slice(4, 7)); // dobijemo 'Air'
//slice (4,7) znači ustvari četvrta pozicija i čita samo do šeste pozicije u stringu
// (dužina stringa ću uvek biti krajnja minus početna pozicija - u ovom slučaju to je 7-4=3)

//ekstraktovanje stringa bez hardkodinga - samo na osnovu indexOf i last idenx of
console.log(airline.slice(0, airline.indexOf(" "))); // izvlacenje prve reci
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); // +1 da bi izbacili razmak ispred reci

//definisanje negativnih početnih argumenata - kreće sa kraja
console.log(airline.slice(-2));
console.log(airline.slice(1, -1)); //dobijemo 'AP Air Portuga'

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  seat.slice(-1) === "B" || seat.slice(-1) === "E"
    ? console.log(`${seat} is middleseat`)
    : console.log(`${seat} is NOT middleseat`);
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

//changing the case

console.log(airline.toLocaleLowerCase());
console.log(airline.toUpperCase());

//Fix capitalization in name

const passenger = "jOnAS"; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Comparing emails

const email = "hello@jonas.io";
const loginEmail = "  Hello@Jonas.IO \n ";

//const lowerEmail = loginEmail.toLowerCase();
//const trimedEmail = lowerEmail.trim(); // da se resimo SPACE i ENTER

//mozemo i vise metoda pozivati
const normalizedEmail = loginEmail.toLowerCase().trim();

//Replace parts of string

const priceGB = "288,97%";
const priceUS = priceGB.replace("%", "$").replace(",", ".");

//replace stvara novi string, ne menja prvobitni
const announcment =
  "All passengers come to boarding door 23. Boarding door 23!";
//samo se menja prvo pojavljivanje reči koje hoćemo da promenimo, tek kad se uvede REPLACEaLL, onda će moći
console.log(announcment.replaceAll("door", "gate"));

//tri metoda STRINGa koja vraćaju BOOLEANS - 'includes', 'starts' with i 'ends with'

const newPlane = "Airbus A320neo";

console.log(newPlane.includes("A320"));
console.log(newPlane.endsWith("Boeing"));
console.log(newPlane.startsWith("Air"));

// Practice exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board.");
  } else {
    console.log("Welcome aboard!");
  }
};
checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and cammera");
checkBaggage("Got some snacks and a gun for protection");

//SPLIT metod
//SPLIT metod omogućava deljenje na više delova pomoću devidera

console.log("a+very+nice+string".split("+")); //devider je +
console.log("Jonas Schmedtmann".split(" "));

const [firstName, lastName] = "Jonas Schemedtmann".split(" ");
//join metod je suprotnost od split metoda
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

//Pisanje velikog slova

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // namesUpper.push(n.replace(n[0], n[0].toUpperCase()));  // Drugi nacin
  }

  console.log(namesUpper.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("jonas schmedtmann");

//padding a string znači dodati tačan broj karaktera do željene dužine stringa

const massage = "Go to gate 23!";

console.log(massage.padStart(20, "+").padEnd(30, "+"));
console.log("Jonas".padEnd(20, "+").padStart(30, "+"));

//primer sakrivanja brojeva kod kreditne kartice
const maskCreditCard = function (number) {
  const str = number + ""; // kada je jedan od operanada sa znakom plus STRING, sve se konvertuje u STRING
  const last = str.slice(-4); // poslednja cetiri broja necemo maskirati
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(12546546546546545));
console.log(maskCreditCard("54651045161564165146"));

//repeat method- ponavlja isti STRING više puta

const message2 = "Bad weather...All Departures Delayes... ";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈".repeat(n)}`);
};
planesInLine(5);
planesInLine(4);
*/
/*
//CHALENGE 12
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;

  const rows = text.split('\n');

  for (const [a, word] of rows.entries()) {
    const [i, z] = word.toLowerCase().trim().split('_');
    const newCase = [i + z[0].toUpperCase() + z.slice(1)].join();
    console.log(`${newCase.padEnd(20, ' ')}${'✅'.repeat(a + 1)}`);
  }
});

/* moj kod koji radi >D

const changeCase = function (word) {
  const [i, z] = word.toLowerCase().trim().split('_');
  const newCase = [i + z[0].toUpperCase() + z.slice(1)].join();
  console.log(`${newCase.padEnd(25, ' ')}` + `${'✅'.repeat()}`);
};
//string methods practice
changeCase('  calculate_AGE');  

const getCode = str => str.slice(0, 3).toUpperCase();

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(
    45
  );
  console.log(output);
}
*/
/*
// default parametri

const bookings = [];

const createBooking = function (
  flightNum,
  passengers = 1,
  price = 199 * passengers
) {
  //ES6 setovanje default vrednosti
  //ES5 nacin kako se setovao default
  //price = price || 100;
  //passengers = passengers || 2
  const booking = {
    flightNum,
    passengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123', undefined, 3);
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('L123', 5);
*/
/*
const flight = 'LH123';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 1235465465,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LLCOOL1233';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 1235465465) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, jonas);
console.log(flight); //broj leta se nije promenio, posto je 'flightNum' druga varijabla
console.log(jonas); //

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(jonas);
checkIn(flight, jonas);*/
/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
//Higher-order function
//higher order function je funkcija koja poziva druge funkcije,
//a one koje su pozvane se nazivaju callback funkcije
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`); // funkcije imaju metode i propertyje,
};

transformer('JavaScript is the best!', upperFirstWord);
//kada se koristi callback funkcija, pisemo samo naziv, bez zagrada, jer je ne pozivamo
//vec je koristimo kao value, a HIGHER ORDER funkcija ce je pozvati
transformer('JavaScript is the best!', oneWord);

// primer higher-order i callback funkcije
document.body.addEventListener('click', fn);
*/

//functions returning functions
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}`, `${name}`);
  };
};

const greeterHey = greet('Hey');

greeterHey('Jonas');
greet('Hello')('Stevo');

// pisanje pomocu arrow functions
const greetArr = greeting => name => console.log(`${greeting}`, `${name}`);

greetArr('Hi')('Upoje');*/

// The call method

/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function {}  - stari nacin pisanja funkcije u objektu
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, 'Jonas Schmeddtman');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book; // FIRST CLAAS function - ovo je sada METOD
//book(23, 'Sarah Wiliams'); - OVO NE MOZE jer je ovo REGULAR FUNCTION CALL

// CALL metod
book.call(eurowings, 23, 'Sara Wiliams');
console.log(eurowings);

book.call(lufthansa, 345, 'Upoje Glisko');
console.log(lufthansa);

//APPLY metod

const bookedData = [34, 'Ludi Milojko'];

book.apply(eurowings, bookedData);
console.log(eurowings);

book.call(lufthansa, ...bookedData);
console.log(lufthansa);

//BIND metod

const bookEW = book.bind(eurowings); // kreiranje nove funkcije i vezivanje THIS za eurowings
const bookLH = book.bind(lufthansa);

bookEW(435, 'Glisko Upojevic');

const bookEW435 = book.bind(eurowings, 435); // vezivanje THIS za eurowings I ZA JEDAN PARAMETAR
bookEW435('Gile Upojko'); //sada je funkciji potrebno samo ime putnika
bookEW435('Jonas Upojevic');

// BIND with event listener

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this); // ovde je THIS ustvari HTML elemenat, tj dugme
  this.planes++;
  console.log(this.planes); //ovde funkcija ne radi, dobijamo NaN, jer je THIS dugme u HTML
};

// lufthansa.buyPlane(); //ovde cemo dobiti 301 - funkcija radi

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); //posto ovde ne pozivamo funciju CALL nam ne treba,
//vec nam treba BIND, i tu pozivamo LUFTHANSA objekat
*/
/*
// PARTIAL APLICATION

//ovde je bitno to sto predefinisemo parametre

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // prvi argument u BIND je uvek THIS, ali ovde ga nema, pa je onda NULL
// drugi argument bi bio onda 'rate', a eventualno treci bi bio 'value'
// addVAT = value => value + value * 0.23 - NA DRUGI NACIN NAPISANO
console.log(addVAT(100));

// isti primer, ali napisano preko funkcije u funkciji

const addTax1 = function (rate) {
  return function (value) {
    console.log(value + value * rate);
  };
};
addTax1(0.21)(100);

const addVAT1 = addTax1.call(null, 0.16);
// ovde pozivam CALL umesto BIND, jer ustvari pozivamo funkciju u funkciji

console.log(addVAT1(100));
*/
/*
//CHALENGE 13

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

  answers: new Array(4).fill(0), //This generates [0,0,0,0]. More in the next section
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join(`\n`)}\n(Write option number)`
      )
    );
    console.log(answer);

    // register answer

    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Pool results are ${this.answers.join(', ')}`);
    }
  },
};

//poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
// BONUS

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1];

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');


// Immediately invoked Function Expressions (IIFE)

(function () {
  console.log('This will never run again');
})();
// kada celu funkciju stavimo u zagradu na neki nacin varamo jS da misli da je to expresion i pozovemo je sa ( ) i to se naziva IIFE

(() => console.log('This will ALSO never run again'))();
// drugi nacin da napisemo IIFE preko strelica =>
*/

//CLOSURES
/*
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker); // kada hocemo da istrazimo environment varijable


const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds.`);
};

const perGroup = 1000; //Dokaz da CLOSURE ima prednost u odnosu na SCOPE CHAIN
boardPassengers(180, 3);

//CHALENGE 14
// kada kliknemo na body, da se slova promene u plavu boju

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
*/

//CHALENGE 15

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const onlyDogsJulia = [...dogsJulia].slice(1, 3);

console.log(onlyDogsJulia);

const allDogs = [...onlyDogsJulia, ...dogsKate];

console.log(allDogs);

allDogs.forEach(function (age, i) {
  age <= 3
    ? console.log(`Dog number ${i + 1} is still a puppy`)
    : console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
});
