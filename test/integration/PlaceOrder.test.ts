import PlaceOrder from "../../src/application/useCase/PlaceOrder";
import CouponRepositoryMemory from "../../src/infra/repository/memory/CouponRepositoryMemory";
import ItemRepositoryMemory from "../../src/infra/repository/memory/ItemRepositoryMemory";
import OrderRepositoryMemory from "../../src/infra/repository/memory/OrderRepositoryMemory";

test("Deve fazer um pedido", () => {
  const itemRepository = new ItemRepositoryMemory();
  const orderRepository = new OrderRepositoryMemory();
  const couponRepository = new CouponRepositoryMemory();
  const input = {
    cpf: "146.293.386.67",
    orderItems: [
      { idItem: '1', quantity: 1},
      { idItem: '2', quantity: 1},
      { idItem: '3', quantity: 3}
    ],
    coupon: "VALE20"
  }
  const placeOrder = new PlaceOrder(itemRepository, orderRepository, couponRepository)
  const output = placeOrder.execute(input)
  expect(output.total).toBe(4872)
})