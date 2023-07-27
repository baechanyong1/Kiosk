const OptionRepository = require("../repository/optionRepository")

class OptionService {
    constructor() {
        this.optionRepository = new OptionRepository
    }
}

module.exports = OptionService