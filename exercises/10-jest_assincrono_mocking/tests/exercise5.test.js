// Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

const upperCaseTest = require('../exercise4.js');

test('reescrever functions', () => {
  
  let lowerCase = jest
  .spyOn(upperCaseTest, 'upperCase')
  .mockImplementation(str => str.toLowerCase());
  
  lowerCase('STRING');
  expect(lowerCase).toHaveBeenCalled();
  expect(lowerCase).toBeCalledWith('STRING');
  expect(lowerCase('STRING')).toBe('string');
  expect(lowerCase).toHaveBeenCalledTimes(2);

  lowerCase.mockRestore();

  lowerCase = jest.spyOn(upperCaseTest, 'upperCase')

  lowerCase('string');
  expect(lowerCase).toHaveBeenCalled();
  expect(lowerCase).toBeCalledWith('string');
  expect(lowerCase('string')).toBe('STRING');
  expect(lowerCase).toHaveBeenCalledTimes(2);
})

