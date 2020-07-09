/*
Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
*/

let numbers = [2, 4, 6, 7, 10, 0, -3];

function getLowestNumberIndex() {
    let number = numbers[0];
    let index = 0;
    for(let i = 0; i <= numbers.length - 1; i += 1) {    
        if(numbers[i] < number) {
            number = numbers[i];
            index = i;
        }
    }
    return index;
}

console.log(getLowestNumberIndex(numbers));
