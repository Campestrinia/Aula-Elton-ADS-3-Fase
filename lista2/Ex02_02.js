const idades = 0;
const pesos = 0
let faixa1a10 = [];
let peso1a10 = [];
let faixa11a20 = [];
let peso11a20 = [];
let faixa21a30 = [];
let peso21a30 = [];
let faixamaisde30 = [];
let pesomaisde30 = [];
let media1a10 = 0
let soma1a10 = 0
let media11a20 = 0
let soma11a20 = 0
let media21a30 = 0
let soma21a30 = 0
let mediamaisde30 = 0
let somamaisde30 = 0

for(let i = 0;i < 15;i++){
    const idades = Math.floor(Math.random() * 100);
    const pesos = Math.floor(Math.random() * 200);
    if (idades < 10){
        faixa1a10.push(idades);
        peso1a10.push(pesos);
    }else if(idades> 11 && idades<20){
        faixa11a20.push(idades);
        peso11a20.push(pesos);
    }else if(idades> 21 && idades<30){
        faixa21a30.push(idades);
        peso21a30.push(pesos);
    }else{
        faixamaisde30.push(idades);
        pesomaisde30.push(pesos);
    }
};
for(let i = 0;i < peso1a10.length; i++){
    soma1a10 +=  peso1a10[i]
    media1a10 = soma1a10/peso1a10.length

}
for(let i = 0;i < peso11a20.length; i++){
    soma11a20 +=  peso11a20[i]
    media11a20 = soma11a20/peso11a20.length

}
for(let i = 0;i < peso21a30.length; i++){
    soma21a30 +=  peso21a30[i]
    media21a30 = soma21a30/peso21a30.length

}
for(let i = 0;i < pesomaisde30.length; i++){
    somamaisde30 +=  pesomaisde30[i]
    mediamaisde30 = somamaisde30/pesomaisde30.length

}
console.log(`Media do peso da faixa 1 a 10 é de ${media1a10}`)
console.log(`Media do peso da faixa 11 a 20 é de ${media11a20}`)
console.log(`Media do peso da faixa 21 a 30 é de ${media21a30}`)
console.log(`Media do peso da faixa de mais de 30 é de ${mediamaisde30}`)