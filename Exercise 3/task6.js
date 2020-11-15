const numbers = [10, 5, 13, 18, 51];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(numbers.reduce(reducer));
