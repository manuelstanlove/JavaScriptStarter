/*let js = "amazing";
      if(js === "amazing") alert ("Javascript is FUN!");

      40 + 8 + 23 - 10;
      console.log (40 + 8 + 23 - 10);*/

/*let js = "amazing";
console.log(40 + 22 + 11 - 33);

console.log("jonasu");

let firstName = "Manuel";
console.log(firstName);





let continent = "Africa";
let country = "Nigeria";
let population = "200,000,000";
console.log(continent);
console.log(country);
console.log(population);

let age = 33;
age = 55;

console.log(age);
*/
/*
//Mathematical Operator
const now = 2021;
const emmieAge = now - 1990;
const mosesAge = now - 1992;
console.log(emmieAge, mosesAge);

console.log(emmieAge * 2, emmieAge / 10, 2 ** 3)

const firstName = "Emmanuel";
const lastName = "Oke";
console.log(firstName + " " + lastName);

// Assignment operator
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
console.log(x);

// Comparison Operator
console.log(emmieAge < mosesAge);
*/
/*
Challenge 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

console.log(BMIMark, " ", BMIJohn);

const markHigherBMI = BMIMark < BMIJohn;
console.log(BMIMark, " ", BMIJohn, " ", markHigherBMI);

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr)
*/
/*
//String and Template Literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = `I'm ${firstName}, a ${year-birthYear} year old ${job}`
console.log(jonas)

console.log("string with\n\multiple\n\lines");

console.log(`string with
multiple
lines`);*/

//Taking Decision: if/else statements
/*const age = 10;
if(age >= 19){
console.log("Emmie can start driving🚔")
}else{
    const yearsLeft = 19 - age;
    console.log(`Emmie needs to wait another ${yearsLeft} years, That's when he can commence driving.`);
}*/

//CODE CHALLENGE IF/ELSE#2
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

const markHigherBMI = BMIMark < BMIJohn;
//console.log(BMIMark, " ", BMIJohn, " ", markHigherBMI);

if(BMIMark >= BMIJohn){
    console.log(`Mark's BMI ${BMIMark} is greater than John's BMI ${BMIJohn}.`)
}else{
    console.log(`Johns's BMI ${BMIJohn} is greater than Mark's BMI ${BMIMark}.`)
}
*/

//TYPE CONVERSION AND COERCION
/*const inputYear = '1991';
 console.log(Number(inputYear) +18);
console.log('I am '+ '23' + 'years old')*/

//TRUTHY and FALSY VALUES

//EQUALITY OPERATORS: == vs. ===
/*
 const favourite = Number (prompt("what is your favourite number?"));
 console.log(favourite);
 console.log(typeof favourite);

 if (favourite === 23){
     console.log("Cool! 23 is an amazing number")
 }else if (favourite ===7){
     console.log("7 is a cool numbrer")
 }else if (favourite === 4){
     console.log("4 is a fucking cool colour")
 }else{
     console.log("number is not 23, neither is it 7 nor 4");
 }
 if(favourite !== 23) console.log("Why the heck is it not 23?")*/

//BOOLEAN LOGIC
/*
const dolphineScore = (96 + 108 + 89) / 3;
const koalasScore = (88 + 91 + 110) / 3;
console.log(`The average score of  dolphine is ` + dolphineScore),
console.log(`The average score of  koalas is  ` + koalasScore);

if (dolphineScore > koalasScore) {
  console.log("Dolphine has the highest score");
} else if (dolphineScore == koalasScore)
  console.log("Both team have the same score");
else {
  console.log("Koalas has the highest score");
}
*/
//SWITCH STATEMENT
/*
switch (prompt("What is the task to be perform on this day?")) {
  case "monday":
    console.log("The task for today beign monday is to write test cases");
    break;
  case "tuesday":
    console.log("Today task being tuesday would be to review the written test cases");
    break;
  case "wednesday":
    console.log(
      "What you are expected to do today is to execute the reviewed test cases");
    break;
  case "thursday":
    console.log("assigned the bugs found to the corresponding developer");
    break;
  case "friday":
    console.log("Carry out a regression testing on treated bugs");
    break;
  default:
    console.log("No task to be performed today");
}*/

