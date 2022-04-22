import TicketCalculator from "./TicketCalculator"

type ParkedCar = { plate: string, checkinDate: Date }

export class ParkingLot {
  private parkedCars: ParkedCar[]

  constructor(readonly capacity: number, readonly ticketCalculator: TicketCalculator) {
    this.parkedCars  = []
  }
  
  checkin (plate: string, checkinDate: Date){
    this.parkedCars.push({
      plate,
      checkinDate
    })
  }

  checkout (plate: string){
    const findPositionByPlate = (parkedCar: { plate: string, checkinDate: Date }) => parkedCar.plate === plate
    const position = this.parkedCars.findIndex(findPositionByPlate)
    if(position === -1) throw new Error('Car not found')
    this.parkedCars.splice(position, 1)
  }

  getEmptySpaces () {
    return this.capacity - this.parkedCars.length
  }

  calculateTicket(plate: string, checkoutDate: Date){
    const findPositionByPlate = (parkedCar: { plate: string, checkinDate: Date }) => parkedCar.plate === plate
    const position = this.parkedCars.findIndex(findPositionByPlate)
    if(position === -1) throw new Error('Car not found')
    const price = this.ticketCalculator.calculate(this.parkedCars[position].checkinDate, checkoutDate)
    return {
      price
    }
  }
}