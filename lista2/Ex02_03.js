const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let maior = Number.MIN_SAFE_INTEGER;
let menor = Number.MAX_SAFE_INTEGER;

function calcularMinMax(valor) {
  if (valor > maior) {
    maior = valor;
  }
  if (valor < menor) {
    menor = valor;
  }
}

function receberValor() {
  rl.question('Digite um valor inteiro e positivo (0 para encerrar): ', (resposta) => {
    const valor = parseInt(resposta);
    if (valor === 0) {
      rl.close();
      console.log(`Maior valor: ${maior}`);
      console.log(`Menor valor: ${menor}`);
    } else if (valor < 0) {
      console.log('Valor negativo. Por favor, digite um valor inteiro e positivo.');
      receberValor();
    } else {
      calcularMinMax(valor);
      receberValor();
    }
  });
}

receberValor();