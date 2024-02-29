const timeA = Math.floor(Math.random() * (10 - 0));
const timeB = Math.floor(Math.random() * (10 - 0));
console.log(timeA);
console.log(timeB);

if(timeA>timeB){
    console.log(`O time A venceu de ${timeA} a ${timeB}`)
}else if(timeB>timeA){
    console.log(`O time B venceu de ${timeB} a ${timeA}`)
}else if(timeA==timeB){
    console.log(`O jogo enpatou em ${timeA} a ${timeB}`)
}