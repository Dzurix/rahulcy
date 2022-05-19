"use strict";

"use strict";

//let firstname = "upoje";

//console.log(firstname);
/*
console.log("glisoje");
console.log('radoje');
console.log('blagoje');
*/

//coding chalenge 1

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

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

console.log(mark.calcBMI());
console.log(john.calcBMI());

console.log(` ${john.BMI > mark.BMI ? "John Smith" : "Mark Miller"}'s BMI (${
  john.BMI > mark.BMI ? john.BMI : mark.BMI
}) 
is higher than ${john.BMI < mark.BMI ? "John Smith" : "Mark Miller"}'s BMI (${
  john.BMI < mark.BMI ? john.BMI : mark.BMI
}) !`);
