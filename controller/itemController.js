const ItemService = require("../service/itemService")

class ItemController {
    constructor(){
        this.itemService = new ItemService
    }
}

module.exports = ItemController