const num1 = Math.floor(Math.random() * (100 - 0 + 1));
const num2 = Math.floor(Math.random() * (100 - 0 + 1));
const num3 = Math.floor(Math.random() * (100 - 0 + 1));

console.log("Números gerados:", num1, num2, num3);

if (num1 >= num2 && num1 >= num3) {
    console.log(`O número maior é o ${num1}`);
    if (num2 >= num3) {
        console.log(`A soma dos maiores é ${num1 + num2}`);
    } else {
        console.log(`A soma dos maiores é ${num1 + num3}`);
    }
} else if (num2 >= num1 && num2 >= num3) {
    console.log(`O número maior é o ${num2}`);
    if (num1 >= num3) {
        console.log(`A soma dos maiores é ${num1 + num2}`);
    } else {
        console.log(`A soma dos maiores é ${num2 + num3}`);
    }
} else {
    console.log(`O número maior é o ${num3}`);
    if (num1 >= num2) {
        console.log(`A soma dos maiores é ${num1 + num3}`);
    } else {
        console.log(`A soma dos maiores é ${num2 + num3}`);
    }
}
