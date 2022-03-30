import Coupon from "./Coupon"
import  Cpf  from "./Cpf"
import Item  from "./Item"
import OrderItem from "./OrderItem"

export default class Order {
  cpf: Cpf
  orderItems: OrderItem[]
  coupon: Coupon | undefined

  constructor(cpf: string){
    this.cpf = new Cpf(cpf)
    this.orderItems = []
  }

  public addItem(item: Item, quantity: number){
    this.orderItems.push(new OrderItem(item.idItem, item.price, quantity))
  }

  public addCoupon(coupon: Coupon){
    this.coupon = coupon
  }

  public getTotal() {
    const sum = this.orderItems.reduce((total, orderItem) => total + orderItem.getTotal() , 0)
    let discount =  this.coupon ? sum * (this.coupon.percentage/100) : 0
    return sum - discount
  }
}