import Item from "../../../domain/entity/Item"
import ItemRepository from "../../../domain/repository/ItemRepository"

export default class ItemRepositoryMemory implements ItemRepository {
  private items: Item []

  constructor () {
    this.items = [
      new Item('1', 'Instrumentos Músicais', 'Guitarra', 1000),
      new Item('2', 'Instrumentos Músicais', 'Amplificador', 5000),
      new Item('3', 'Instrumentos Músicais', 'Cabo', 30)
    ]
  }

  getById(idItem: string): Item | undefined {
    return this.items.find(item => item.idItem === idItem)
  }
}