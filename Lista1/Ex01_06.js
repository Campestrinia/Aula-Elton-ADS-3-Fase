const num1 = Math.floor(Math.random() * (100 - 0 + 1));
const num2 = Math.floor(Math.random() * (100 - 0 + 1));
const num3 = Math.floor(Math.random() * (100 - 0 + 1));
console.log(num1);
console.log(num2);
console.log(num3);

if(num1>num2 && num1>num3){
    console.log(`O numero maior é o ${num1}`)
}else if(num2>num1 && num2> num3){
    console.log(`O numero maior é o ${num2}`)
}else if(num3>num1 && num3> num2){
    console.log(`O numero maior é o ${num3}`)
}