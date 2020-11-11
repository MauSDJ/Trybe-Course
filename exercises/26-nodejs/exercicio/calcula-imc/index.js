// exercicio com readline-sync

/* const readline = require('readline-sync');

function calculaIMC() {
  const peso = readline.questionFloat('Qual o seu peso(kg)?').toFixed(2);
  const altura = readline.questionFloat('Qual a sua altura(m)?').toFixed(2);

  console.log('Peso: %s, altura: %s', peso, altura);

  const imc = (peso / Math.pow(altura, 2)).toFixed(2);

  console.log('IMC: %s', imc);

  if(imc < 18.5) {
    console.log('Abaixo do Peso (magreza)');
  } else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal');
  } else if (imc >= 25 && imc < 29.9) {
    console.log('Acima do peso (sobrepeso)');
  } else if (imc >= 30 && imc <= 34.9) {
    console.log('Obesidade grau I');
  } else if (imc >= 35 && imc <= 39.9) {
    console.log('Obesidade grau II');
  } else {
    console.log('Obesidade graus III e IV');
  }
}

calculaIMC();
 */

//exercicio com inquirer

const inquirer = require('inquirer');

function validateFloat(input) {
  return !isNaN(parseFloat(input)) || 'Por favor, digite um número válido';
};

async function calculaIMC() {
  const answers = await inquirer.prompt([
    { name: 'peso', type: 'input', message: 'Qual o seu peso(kg)?', validate: validateFloat},
    { name: 'altura', type: 'input', message: 'Qual a sua altura(m)?', validate: validateFloat},
  ]);

  const peso = parseFloat(answers.peso);
  const altura = parseFloat(answers.altura);

  console.log('Peso: %s, altura: %s', peso, altura);

  const imc = (peso / Math.pow(altura, 2)).toFixed(2);

  console.log('IMC: %s', imc);

  if(imc < 18.5) {
    console.log('Abaixo do Peso (magreza)');
  } else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal');
  } else if (imc >= 25 && imc < 29.9) {
    console.log('Acima do peso (sobrepeso)');
  } else if (imc >= 30 && imc <= 34.9) {
    console.log('Obesidade grau I');
  } else if (imc >= 35 && imc <= 39.9) {
    console.log('Obesidade grau II');
  } else {
    console.log('Obesidade graus III e IV');
  }
}

calculaIMC();