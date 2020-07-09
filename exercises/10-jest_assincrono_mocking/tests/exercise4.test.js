// Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.

const { upperCase, firstLetter, concTwoStrings } = require('../exercise4.js')
jest.mock('../exercise4.js')

test('reescrever functions', () => {

  upperCase.mockImplementation(str => str.toLowerCase());
  firstLetter.mockImplementation(str => str.charAt(str.length - 1));
  concTwoStrings.mockImplementation((str1, str2, str3) => str1 + str2 + str3);

  upperCase('STRING');
  expect(upperCase).toHaveBeenCalled();
  expect(upperCase).toBeCalledWith('STRING');
  expect(upperCase('STRING')).toBe('string');
  expect(upperCase).toHaveBeenCalledTimes(2);

  firstLetter('STRING');
  expect(firstLetter).toHaveBeenCalled();
  expect(firstLetter).toBeCalledWith('STRING');
  expect(firstLetter('STRING')).toBe('G');
  expect(firstLetter).toHaveBeenCalledTimes(2);

  concTwoStrings('Aprendi', 'eSsa', 'coisa!');
  expect(concTwoStrings).toHaveBeenCalled();
  expect(concTwoStrings).toBeCalledWith('Aprendi', 'essa', 'coisa!');
  expect(concTwoStrings('Aprendi', 'essa', 'coisa!')).toBe('Aprendiessacoisa!');
  expect(concTwoStrings).toHaveBeenCalledTimes(2);
})

