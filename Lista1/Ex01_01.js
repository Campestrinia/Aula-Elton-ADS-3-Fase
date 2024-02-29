const num1 = Math.floor(Math.random() * 200) - 100;

console.log(num1);
if(num1 == 0){
    console.log(`o numero 0`)
}else if(num1>0){
    console.log(`o numero positivo`)
}else if(num1<0){
    console.log(`o numero negativo`)
}