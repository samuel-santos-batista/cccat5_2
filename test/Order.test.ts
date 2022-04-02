import Coupon from "../src/Coupon"
import { Dimension } from "../src/Dimension"
import Item  from "../src/Item"
import Order  from "../src/Order"

test('Não deve criar um pedido com cpf inválido', () => {
 expect(() => new Order("146.293.386-66")).toThrow(new Error("Invalid Cpf"))
})

test('Deve criar um pedido com 3 itens', () => {
  const order = new Order("146.293.386-67")
  order.addItem(new Item('1', 'Instrumentos Músicais', 'Guitarra', 1000), 1)
  order.addItem(new Item('2', 'Instrumentos Músicais', 'Amplificador', 5000), 1)
  order.addItem(new Item('3', 'Instrumentos Músicais', 'Cabo', 30), 3)
  const total = order.getTotal()
  expect(total).toBe(6090)
})

 test('Deve criar um pedido com 3 itens com cupom de desconto expirado', () => {
  const order = new Order("146.293.386-67", new Date("2021-03-01T11:00:00"))
  order.addItem(new Item('1', 'Instrumentos Músicais', 'Guitarra', 1000), 1)
  order.addItem(new Item('2', 'Instrumentos Músicais', 'Amplificador', 5000), 1)
  order.addItem(new Item('3', 'Instrumentos Músicais', 'Cabo', 30), 3)
  const coupon = new Coupon('VALE20', 20, new Date('2021-03-01T10:00:00'))
  order.addCoupon(coupon)
  const total = order.getTotal()
  expect(total).toBe(6090)
 })

 test('Deve criar um pedido com 3 itens e calcular o frete', () => {
  const order = new Order("146.293.386-67")
  order.addItem(new Item('1', 'Instrumentos Músicais', 'Guitarra', 1000, new Dimension(100, 30, 10), 3), 1)
  order.addItem(new Item('2', 'Instrumentos Músicais', 'Amplificador', 5000, new Dimension(100, 50, 50), 20), 1)
  order.addItem(new Item('3', 'Instrumentos Músicais', 'Cabo', 30, new Dimension(10, 10, 10), 1), 3)
  const total = order.getTotal()
  expect(total).toBe(6350)
})

test('Deve criar um pedido com 3 itens e calcular o frete mínimo', () => {
  const order = new Order("146.293.386-67")
  order.addItem(new Item('3', 'Instrumentos Músicais', 'Cabo', 30, new Dimension(10, 10, 10), 0.9), 1)
  const total = order.getTotal()
  expect(total).toBe(40)
})


 