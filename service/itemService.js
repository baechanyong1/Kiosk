const ItemRepository = require("../repository/itemRepository")

class ItemService {
    constructor() {
        this.itemRepository = new ItemRepository
    }
}

module.exports = ItemService