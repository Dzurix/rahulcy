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

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

  return juice;
}

fruitProcessor(5, 0);
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
