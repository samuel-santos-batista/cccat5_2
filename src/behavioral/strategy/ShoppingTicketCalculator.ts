import TicketCalculator from "./TicketCalculator";

export default class ShoppingTicketCalculator implements TicketCalculator {
  calculate(checkinDate: Date, checkoutDate: Date): number {
  const millisecondsPerHour = 1000 * 60 * 60
  const differenceInMilliseconds = checkoutDate.getTime() - checkinDate.getTime()
  const period = differenceInMilliseconds/millisecondsPerHour
   const surplus = period - 3
   return surplus * 10 + 30
  }
}