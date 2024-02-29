const num1 = Math.floor(Math.random() * (100 - 0 + 1));
const num2 = Math.floor(Math.random() * (100 - 0 + 1));
const num3 = Math.floor(Math.random() * (100 - 0 + 1));
console.log(num1);
console.log(num2);
console.log(num3);
const numeros = [num1, num2, num3];
numeros.sort((a, b) => a - b);
console.log(numeros);