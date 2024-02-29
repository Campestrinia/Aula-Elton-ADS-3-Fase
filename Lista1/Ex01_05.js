const num1 = Math.floor(Math.random() * (100 - 0 + 1));
const num2 = Math.floor(Math.random() * (100 - 0 + 1));
console.log(num1);
console.log(num2);
const numeros = [num1, num2];
numeros.sort((a, b) => a - b);
console.log(numeros);