/*
Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
*/

let n = 5;
let lineWord = "";

for(let line = 1; line <= n; line += 1) {
    lineWord+="*"
}
for(let j = 1; j <= n; j +=1) {
    console.log(lineWord)
}



