import Item from "../entity/Item";

export default interface ItemRepository {
  getById (idItem: string): Item | undefined
}