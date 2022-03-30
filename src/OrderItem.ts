export default class OrderItem {
  constructor(readonly idItem: string, readonly price: number, readonly quantity: number,){}

  public getTotal() {
    return this.price * this.quantity
  }
}