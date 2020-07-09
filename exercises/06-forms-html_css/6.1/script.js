
let selectTag = document.getElementsByTagName("select")[0];
let stateList = [
  ['Acre', 'AC'],
  ['Alagoas', 'AL'],
  ['Amapá', 'AP'],
  ['Amazonas', 'AM'],
  ['Bahia', 'BA'],
  ['Ceará', 'CE'],
  ['Distrito Federal', 'DF'],
  ['Espírito Santo', 'ES'],
  ['Goiás', 'GO'],
  ['Maranhão', 'MA'],
  ['Mato Grosso', 'MT'],
  ['Mato Grosso do Sul', 'MS'],
  ['Minas Gerais', 'MG'],
  ['Pará', 'PA'],
  ['Paraíba', 'PB'],
  ['Paraná', 'PR'],
  ['Pernambuco', 'PE'],
  ['Piauí', 'PI'],
  ['Rio de Janeiro', 'RJ'],
  ['Rio Grande do Norte', 'RN'],
  ['Rio Grande do Sul', 'RS'],
  ['Rondônia', 'RO'],
  ['Roraima', 'RR'],
  ['Santa Catarina', 'SC'],
  ['São Paulo', 'SP'],
  ['Sergipe', 'SE'],
  ['Tocantins', 'TO']
];

function createOptions() {
    for(let i = 0; i < stateList.length; i += 1) {
      let createElement = document.createElement('option');
      createElement.value = stateList[i][1];
      createElement.innerText = stateList[i][0];
      selectTag.appendChild(createElement);
    }
  }
createOptions();

// Validate e-mail
const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const email = document.getElementById('email-field');
email.addEventListener("change", function() {
  if (email.value.match(regexEmail) === null){
    alert("Formato de e-mail inválido! Digite: exemplo@exemplo.exemplo");
    email.value = '';
  }
})

// Validate date
const regexDate = /^([0-9]{0,2})\/([0-9]{2})\/([0-9]{4})$/;
const date = document.getElementById('date-field');
date.addEventListener("change", function(){
  if (date.value.match(regexDate) === null){
    alert("Formato de data inválido! Digite: DD/MM/AAAA");
    date.value = '';
  }
});

// Validate CPF
const regexCPF = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
const cpf = document.getElementById('cpf-field');
cpf.addEventListener("change", function(){
  if (cpf.value.match(regexCPF) === null){
    alert("Formato de CPF inválido! Inclua caracteres especiais: 111.111.111-11");
    cpf.value = '';
  }
});
