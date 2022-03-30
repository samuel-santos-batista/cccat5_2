import Coupon from "../src/Coupon"
import Item  from "../src/Item"
import Order  from "../src/Order"

test('Não deve criar um pedido com cpf inválido', () => {
 expect(() => new Order("146.293.386-66")).toThrow(new Error("Invalid Cpf"))
})

test('Deve criar um pedido com três itens', () => {
  const order = new Order("146.293.386-67")
  order.addItem(new Item('1', 'Instrumentos Músicais', 'Guitarra', 1000), 1)
  order.addItem(new Item('2', 'Instrumentos Músicais', 'Amplificador', 5000), 1)
  order.addItem(new Item('1', 'Instrumentos Músicais', 'Cabo', 30), 3)
  const total = order.getTotal()
  expect(total).toBe(6090)
 })

 test('Deve criar um pedido com três itens com cupom de desconto', () => {
  const order = new Order("146.293.386-67")
  order.addItem(new Item('1', 'Instrumentos Músicais', 'Guitarra', 1000), 1)
  order.addItem(new Item('2', 'Instrumentos Músicais', 'Amplificador', 5000), 1)
  order.addItem(new Item('1', 'Instrumentos Músicais', 'Cabo', 30), 3)
  const coupon = new Coupon('VALE20', 20)
  order.addCoupon(coupon)
  const total = order.getTotal()
  expect(total).toBe(4872)
 })