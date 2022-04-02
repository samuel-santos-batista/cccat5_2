import Dimension from "../../src/domain/entity/Dimension"
import Freight from "../../src/domain/entity/Freight"
import Item from "../../src/domain/entity/Item"

test("Deve calcular o frete de um item", () => {
  const item = new Item('1', 'Instrumentos Musicais', 'Guitarra', 1000, new Dimension(100, 30, 10), 3)
  const freight = new Freight()
  freight.addItem(item, 2)
  const total = freight.getTotal()
  expect(total).toBe(60)
})

test("Deve calcular o frete mínimo de um item", () => {
  const item = new Item('1', 'Instrumentos Musicais', 'Guitarra', 1000, new Dimension(100, 30, 10), 0.9)
  const freight = new Freight()
  freight.addItem(item, 1)
  const total = freight.getTotal()
  expect(total).toBe(10)
})

