export default class Coupon {
  constructor(readonly code: string, readonly percentage: number, readonly expireDate?: Date){}

  isExpired(today: Date) {
    if(!this.expireDate) return false 
    return this.expireDate.getTime() < today.getTime()
  }
  
  calculateDiscount (amunt: number) {
    return (amunt * this.percentage)/100
  }
}