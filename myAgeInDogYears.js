let myName = 'Nathanael Nienaber'.toLowerCase();
let myAge = 45;

//EarlyYeasrs
let earlyYears = 2;
earlyYears *= 10.5;
myAge -= 2; //reducing by 2 years to count for dog early years.

//LaterYears
let laterYears = myAge
laterYears *= 4 //my age less two years multiplied by 4

let myAgeInDogYears = earlyYears + laterYears;



console.log(earlyYears);
console.log(laterYears);
console.log(myAgeInDogYears);
console.log(`My name is ${myName} I am ${myAge} which is ${myAgeInDogYears} years old in dog years.`);
