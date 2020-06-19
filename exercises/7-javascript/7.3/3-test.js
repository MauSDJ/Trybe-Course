const assert = require('assert');

function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

/* 
A função mySum(arr) recebe um array arr e retorna a soma de seus elementos
Teste se a chamada mySum([1, 2, 3, 4]) retorna o valor 10
Teste se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado
*/

// implemente seus testes aqui
assert.strictEqual(mySum([1, 2, 3, 4]), 10);
assert.strictEqual(mySum([1, -2, -3, 4]), 0);