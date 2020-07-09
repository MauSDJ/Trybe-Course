// Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

require('../exercise3.js')

test('funcao randomNumber', () => {

randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

randomNumber(2, 5, 7);
expect(randomNumber).toHaveBeenCalled();
expect(randomNumber).toBeCalledWith(2, 5, 7);
expect(randomNumber(2, 5, 7)).toBe(70);
expect(randomNumber).toHaveBeenCalledTimes(2);


randomNumber.mockReset();
randomNumber.mockImplementation((num) => num * 2);

randomNumber(9);
expect(randomNumber).toHaveBeenCalled();
expect(randomNumber).toBeCalledWith(9);
expect(randomNumber(9)).toBe(18);
expect(randomNumber).toHaveBeenCalledTimes(2);
})