/*
Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
*/

let arrayNames = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function nameMoreLetters() {
    longerName = "";
    for(let i = 0; i <= arrayNames.length - 1; i += 1) {
        if(arrayNames[i].length > longerName.length) {
            longerName = arrayNames[i];
        }
    }
    return longerName;
}

console.log(nameMoreLetters(arrayNames));