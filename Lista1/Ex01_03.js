const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o ano atual: ', (currentYear) => {
  rl.question('Digite o ano de nascimento: ', (birthYear) => {
    const age = currentYear - birthYear;
    if (age >= 16) {
      console.log('Você pode votar este ano!');
    } else {
      console.log('Desculpe, você não pode votar este ano.');
    }
    rl.close();
  });
});
