import TicketCalculator from "./TicketCalculator";

export default class AirportTicketCalculator implements TicketCalculator {
  calculate(checkinDate: Date, checkoutDate: Date): number {
  const millisecondsPerHour = 1000 * 60 * 60
   const differenceInMilliseconds = checkoutDate.getTime() - checkinDate.getTime()
   const period = differenceInMilliseconds/millisecondsPerHour
   return period * 10
  }
}