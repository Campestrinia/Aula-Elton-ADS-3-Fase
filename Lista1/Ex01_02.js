const nota1 = Math.floor(Math.random() * 11);
const nota2 = Math.floor(Math.random() * 11 );
const media= (nota1+nota2)/2

console.log(nota1);
console.log(nota2);
console.log(media);

if(media > 7){
    console.log(`O aluno foi aprovado com a media ${media}`)
}else if(media < 7){
    console.log(`O aluno não foi aprovado com a media ${media}`)
}