import Coupon from "./Coupon"
import  Cpf  from "./Cpf"
import Freight from "./Freight"
import Item  from "./Item"
import OrderItem from "./OrderItem"

export default class Order {
  cpf: Cpf
  orderItems: OrderItem[]
  coupon: Coupon | undefined
  freight: Freight

  constructor(cpf: string, readonly issueDate: Date = new Date()){
    this.cpf = new Cpf(cpf)
    this.orderItems = []
    this.freight = new Freight()
  }

  public addItem(item: Item, quantity: number){
    this.freight.addItem(item, quantity)
    this.orderItems.push(new OrderItem(item.idItem, item.price, quantity))
  }

  public addCoupon(coupon: Coupon){
    if(!coupon.isExpired(this.issueDate)){
      this.coupon = coupon
    }
  }

  public getTotal() {
    let total = 0
    total = this.orderItems.reduce((totalItems, orderItem) => totalItems + orderItem.getTotal() , 0)
    if(this.coupon) {
       total -= this.coupon.calculateDiscount(total)
    }
    total += this.freight.getTotal()
    return total
  }
}