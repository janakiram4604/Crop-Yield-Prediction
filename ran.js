// Generate a random number within the specified range

const minValue = 12053;
const maxValue = 98762;
const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

console.log("Random number:", randomNumber);