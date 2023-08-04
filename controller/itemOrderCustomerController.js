const ItemOrderCustomerService = require("../service/itemOrderCustomerService")

class ItemOrderCustomerController {
    constructor(){
        this.itemOrderCustomerService = new ItemOrderCustomerService
    }
      addCart = async (req,res,next)=>{
        const itemId = req.params
        const {count, option} = req.body
        const cart = await this.itemOrderCustomerService.addCart(itemId,count,option)
        res.status(cart.status).json(cart.message)
      }

      deleteCart = async (req,res,next)=>{
        const id = req.params
        const {amount, state, option}=req.body
        const delCart = await this.itemOrderCustomerRepository.deleteCart(id,amount,state,option)
        res.status(delCart.status).json(delCart.message)
      }
}

module.exports = ItemOrderCustomerController