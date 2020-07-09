// Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

function upperCase(str) {
  return str.toUpperCase();
}

function firstLetter(str) {
  return str.charAt(0);
}

function concTwoStrings(str1, str2) {
  return str1 + str2;
}

module.exports = {
  upperCase,
  firstLetter,
  concTwoStrings
}