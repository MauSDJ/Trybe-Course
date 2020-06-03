
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
      let createElement = document.createElement("option");
      createElement.value = stateList[i][1];
      createElement.innerText = stateList[i][0];
      selectTag.appendChild(createElement);
    }
  }
createOptions();

// Validate date
const datePicker = document.getElementById('date-field').DatePickerX;
datePicker.init();

// Validate e-mail and CPF (also in HTML)
validation.init();
