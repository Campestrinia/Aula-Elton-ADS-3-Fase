const num1 = Math.floor(Math.random() * (100 - 0 + 1));
const num2 = Math.floor(Math.random() * (100 - 0 + 1));
console.log(num1);
console.log(num2);
if(num1 > num2){
    console.log(`o numero maior é o ${num1}`);
}else{
    console.log(`o numero maior é o ${num2}`);
}