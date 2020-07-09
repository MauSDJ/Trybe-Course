// Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

const random = require('../exercise2.js')

test('funcao randomNumber', () => {

randomNumber = jest.fn().mockImplementation((a, b) => a / b);

randomNumber(20, 10);

expect(randomNumber).toHaveBeenCalled();
expect(randomNumber(20, 10)).toBe(2);
expect(randomNumber).toHaveBeenCalledTimes(2);
})