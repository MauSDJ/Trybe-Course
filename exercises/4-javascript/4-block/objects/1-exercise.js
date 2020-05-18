/*
Usando o objeto abaixo, faça os exercícios a seguir:
*/

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  console.log("Bem-vinda " + info.personagem + ".");

  /*
Insira no objeto uma nova propriedade com o nome de chave “recorrente” e o valor “Sim” e, em seguida, imprima o objeto no console.
*/

info.recorrente = "Sim";
console.log(info);

/*
Faça um for/in que mostre todas as chaves do objeto.
*/

for(key in info) {
  console.log(key);
}

/*
Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.
*/

for(value in info) {
  console.log(info[value])
}

/*
Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: “Tio Patinhas”, “Christmas on Bear Mountain, Dell’s Four Color Comics #178”, “O último MacPatinhas”, “Sim”.
Valor esperado no console:

Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha!
*/

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente:"Sim"
};

for(index in info && info2) {
  if(info[index] !== info2[index]) {
    console.log(info[index] + " e " + info2[index]);
  } else if(info["recorrente"] === info2["recorrente"]) {
    console.log("Ambos recorrentes");
  }
}
