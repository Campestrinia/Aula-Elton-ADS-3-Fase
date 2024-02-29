const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let positivo = 0;
let negativo = 0;

function calcular(valor) {
  if (valor > 0) {
    positivo+=valor;
  }
  if (valor < 0) {
    negativo+=valor;
  }
}

function receberValor() {
    rl.question('Digite um valor inteiro (0 para encerrar): ', (resposta) => {
      const valor = parseInt(resposta);
      if (valor === 0) {
        rl.close();
        console.log(`soma dos numeros positivos: ${positivo}`);
        console.log(`soma dos numeros negativos: ${negativo}`);
        console.log(`soma dos numeros positivos e negativos: ${positivo+negativo}`);
      } else {
        calcular(valor);
        receberValor();
      }
    });
  }
  
  receberValor();