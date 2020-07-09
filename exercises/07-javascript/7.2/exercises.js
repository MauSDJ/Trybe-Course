const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
function addTurno(destino, chave, valor) {
  return destino[chave] = valor;
}
addTurno(lesson2, 'turno', 'manhã');
//console.log(lesson2);


// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
function listaKeys(objeto) {
  return Object.keys(objeto);
}
listaKeys(lesson1);
//console.log(listaKeys(lesson1));


// Crie uma função para mostrar o tamanho de um objeto.
function mostraTamanho(objeto) {
  return Object.entries(objeto).length;
}
mostraTamanho(lesson1);
//console.log(mostraTamanho(lesson1));


//Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
function listaValores(objeto) {
  return Object.values(objeto);
}
listaValores(lesson3);
//console.log(listaValores(lesson3));


//Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
//console.log(allLessons);


//Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
function totalEstudantes() {
  let resultado = 0;
  const key = Object.keys(allLessons);
  for (i in key) {
    resultado += allLessons[key[i]];
  }
  return resultado;
}
totalEstudantes();
//console.log(totalEstudantes());


//Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
function chavePosicao(objeto, posicao) {
  return Object.values(objeto)[posicao];
}
chavePosicao(lesson1, 0);
//console.log(chavePosicao(lesson1, 0))


//Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
function existeChaveValor(objeto, chave, valor) {
  if(objeto[chave] === valor) {
    return true;
  }
  return false;
}
existeChaveValor(lesson1, 'professor', 'Maria Clara');
console.log(existeChaveValor(lesson1, 'professor', 'Maria Clara'))
