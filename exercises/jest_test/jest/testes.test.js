const calcs = require('./calcs')

test('soma 1 e 2 para dar 3', () => {
   expect(calcs(1, 2)).toEqual(3)
})

test('divide 10 por 3 para dar 3.33...', () => {
   expect(calcs.division(10, 3)).toBeCloseTo(3.33)
})