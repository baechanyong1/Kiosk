const ItemRepository = require("../repository/itemRepository");

class ItemService {
  constructor() {
    this.itemRepository = new ItemRepository();
  }

  createItem = async (name, price, type, userId) => {
    const createItem = await this.itemRepository.create(
      name,
      price,
      type,
      userId
    );
    return createItem;
  };

  deleteItem = async (userId, password) => {
    const deleteItem = await this.itemRepository.delete(userId, password);
    return deleteItem;
  };

  getItem = async () => {
    const getItem = await this.itemRepository.get();
    return getItem;
  };

  typeGet = async (type)=> {
    const typeGet=await this.itemRepository.typeGet(type)
    return typeGet
  }
  updateItem = async (name, price, type, userId, id) => {
    const updateItem = await this.itemRepository.update(
      name,
      price,
      type,
      userId,
      id,
      password
    );
    return updateItem;
  };
}

module.exports = ItemService;
