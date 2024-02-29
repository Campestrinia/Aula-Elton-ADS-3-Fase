const num1 = Math.floor(Math.random() * (100 - 0 + 1));

console.log(num1);

if(num1%2 == 0){
    console.log(`O numero ${num1} é par!`)
}else if(num1%2 == 1){
    console.log(`O numero ${num1} é impar!`)
}