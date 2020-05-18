/*
Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
*/

let n = 5;

function sumUntilANumber() {
    numberSum = 0;
    for(n; n > 0; n -= 1) {
        numberSum += n;
    }
    return numberSum;
}

console.log(sumUntilANumber(n));