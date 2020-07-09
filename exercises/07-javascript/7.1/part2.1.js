// Crie uma função que receba um número e retorne seu fatorial.

const factorial = n => {
 if(n == 0) {
   return 1;
 } 
 let fatorial = n;
  while(n > 1) {
    fatorial *= --n;
 }
  return fatorial;
}

console.log(factorial(5));

// Bonus = tente fazer o mesmo exercício de forma recursiva. 

const factorial2 = n => n === 0|| n === 1 ? 1: n * factorial2(--n);

console.log(factorial2(5));