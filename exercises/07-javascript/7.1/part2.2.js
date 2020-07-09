// Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = (phrase) => {
  const wordArray = phrase.split(" ");
  let longerWord = wordArray[0];
  for(let i = 0; i < wordArray.length; i += 1) {
    if(wordArray[i].length > longerWord.length) {
      longerWord = wordArray[i];
    }
  }
  return longerWord;
};

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));

