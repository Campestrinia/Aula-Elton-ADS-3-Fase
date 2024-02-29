const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let somaAltura=0
let SomaPessoas=0

function calcularAltura(altura) {
  somaAltura += altura;
  SomaPessoas= SomaPessoas+1;
  console.log("curtina")
}

function receberValor() {
    rl.question('Digite sua idade (0 para encerrar): ', (respostaIdade) => {
        rl.question('Digite sua altura: ', (respostaAltura) => {
      const idade = parseInt(respostaIdade);
      const altura = parseFloat(respostaAltura);
      if (idade <= 0) {
        rl.close();
        console.log(`media de alturas de ${SomaPessoas} pessoas é de: ${somaAltura/SomaPessoas}`);
      } else if(idade>50) {
        calcularAltura(altura);
        receberValor();
      }else{
        receberValor();
        console.log("casa")
      }
    });
})
  }
  
  receberValor();