//Prompt user to input numbers:
const userNumbers = prompt ('Please input numbers separated by commas.');

//Turn user input to array (string):
const userNumbersAsString = userNumbers.split(`,`);
const numberArray = [];

//Convert string array to number array:
for (let indexCounter = 0; indexCounter < userNumbersAsString.length; indexCounter++) {
  const userNumbersAsStringArray = userNumbersAsString[indexCounter];
  const userNumbersAsNumbersArray = Number(userNumbersAsStringArray);
  numberArray.push(userNumbersAsNumbersArray);
}

//Get length of the number array:
const getLength = numberArray.length;

//Get sum of the number array:
let getSum = 0;
for (let indexCounter = 0; indexCounter < getLength; indexCounter++) {
  getSum += numberArray[indexCounter];
}

//Get the mean of the number array:
const getMean = getSum / getLength;

//Get the smallest number in the array:
let getMin = getMean + 1;

for (let indexCounter = 0; indexCounter <getLength; indexCounter++) {
  if (getMin > numberArray[indexCounter]) {
    getMin = numberArray[indexCounter]
  }
}

//Get the largest number in the array:
let getMax = getMean - 1;

for (let indexCounter = 0; indexCounter <getLength; indexCounter++) {
  if (getMax < numberArray[indexCounter]) {
    getMax = numberArray[indexCounter];
  }
}

//Get the range of the array:
const getRange = getMax - getMin;

//A new array of all even numbers:
let getEvens = [];
for (let indexCounter = 0; indexCounter <getLength; indexCounter++) {
  if (numberArray[indexCounter] % 2 === 0) {
    getEvens.push(numberArray[indexCounter]);
  }
}

//A new array of all odd numbers:
let getOdds = [];
for (let indexCounter = 0; indexCounter <getLength; indexCounter++) {
  if (numberArray[indexCounter] % 2 === 1) {
    getOdds.push(numberArray[indexCounter]);
  }
}

//Display results in the console:
console.log(`User Input:`, numberArray);
console.log(`Total Numbers Entered:`, getLength);
console.log('Sum of Numbers Entered:', getSum);
console.log('Mean of Numbers:', getMean);
console.log(`The Smallest Number:`, getMin);
console.log(`The Largest Number:`, getMax);
console.log(`Number Range:`, getRange);
console.log(`All the Even Numbers:`, getEvens);
console.log(`All the Odd Numbers:`, getOdds);