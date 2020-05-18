/*
Crie uma função que receba uma string e retorne true se for um palíndromo , ou false, se não for.

Exemplo de palíndromo: arara.

verificaPalindrome("arara");

Retorno esperado: true

verificaPalindrome("desenvolvimento");

Retorno esperado: false
*/



function verificaPalindromo(palavra) {
    let novaPalavra ="";
    for(let i = palavra.length - 1; i >= 0; i -= 1) {
        novaPalavra += palavra[i];
    }
    if(palavra === novaPalavra) {
        return true;
    } else {
        return false;
    }
}

console.log(verificaPalindromo("ovo"));
