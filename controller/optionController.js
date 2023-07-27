const OptionService = require("../service/optionService")

class OptionController {
    constructor(){
        this.optionService = new OptionService
    }
}

module.exports = OptionController