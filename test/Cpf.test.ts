import Cpf  from "../src/Cpf"

test('Deve testar um cpf válido', () => {
  const cpf = new Cpf('146.293.386-67')
  expect(cpf.getValue()).toBe('146.293.386-67')
})

const invalidCpfWithSameDigits = [
  '111.111.111-11',
  '222.222.222-22',
]

describe.each(invalidCpfWithSameDigits)('Deve testar um cpf invalido com digitos iguais', (cpf) => 
  test(cpf, () => {
    expect(() => new Cpf(cpf)).toThrow(new Error("Invalid Cpf"))
  })
)

test('Deve testar um cpf invalido com digitos iguais', () => {
  expect(() => new Cpf('146.293.386-68')).toThrow(new Error("Invalid Cpf"))
})