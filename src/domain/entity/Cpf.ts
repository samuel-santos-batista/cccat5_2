export default class Cpf {
  private FACTOR_DIGIT_1 = 10
  private FACTOR_DIGIT_2 = 11
  private value: string

  constructor(value: string) {
    if(!this.validate(value)) throw new Error('Invalid Cpf')
    this.value = value
  }

  public getValue() {
    return this.value
  }

  private validate(cpf: string) {
    if(!cpf) return false
    cpf = this.cleanCpf(cpf)
    if(!this.isValidLength(cpf)) return false
    if (this.isMonodigit(cpf)) return false
    const firstControlDigit = this.calculeCheckDigit(cpf, this.FACTOR_DIGIT_1)
    const secondControlDigit = this.calculeCheckDigit(cpf, this.FACTOR_DIGIT_2)
    const calculatedDigit = `${firstControlDigit}${secondControlDigit}`;
    const checkDigit = this.extractCheckDigit(cpf)
    return calculatedDigit === checkDigit
  }


  private cleanCpf(cpf: string) {
    return cpf.replace(/[\.\-]/g, "")
  }

  private isValidLength(cpf: string) {
    return cpf.length === 11
  }

  private isMonodigit(cpf: string){
    const [firstDigit] = cpf
    return [...cpf].every(digit => digit === firstDigit)
  }

  private calculeCheckDigit(cpf: string, factor: number){
    const total = [...cpf].reduce((previousSum, digit) => 
      factor === 1 ? previousSum : previousSum + parseInt(digit) * factor--
    , 0)
    const rest = total%11;
    return rest === 0 ? 2 : (11 - rest)
  }

  private extractCheckDigit = function (cpf: string) {
    return cpf.slice(-2);
  }
} 