import Coupon from "../src/Coupon"

test("Deve criar um cupom de desconto", () =>{
  const coupon = new Coupon('VALE20', 20)
  const isExpired = coupon.isExpired(new Date()) 
  expect(isExpired).toBeFalsy()
})

test("Deve criar um cupom de desconto e calcular o desconto", () =>{
  const coupon = new Coupon('VALE20', 20, new Date('2021-03-01T10:00:00'))
  const discount = coupon.calculateDiscount(1000)
  expect(discount).toBe(200)
})

test("Deve criar um cupom de desconto expirado", () =>{
  const coupon = new Coupon('VALE20', 20, new Date('2021-03-01T10:00:00'))
  const isExpired = coupon.isExpired(new Date('2022-03-01T10:00:00')) 
  expect(isExpired).toBeTruthy()
})