/*
Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
*/

let numbers = [2, 3, 6, 7, 10, 1];

function getHighestNumberIndex() {
    let number = numbers[0];
    let index = 0;
    for(let i = 0; i <= numbers.length - 1; i += 1) {    
        if(numbers[i] > number) {
            number = numbers[i];
            index = i;
        }
    }
    return index;
}

console.log(getHighestNumberIndex(numbers));