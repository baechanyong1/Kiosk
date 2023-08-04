const ItemService = require("../service/itemService")

class ItemController {
    constructor(){
        this.itemService = new ItemService
    }

    getItem = async (req,res,next)=>{
        const item= await this.itemService.getItem()
        res.status(item.status).json(item.message)
    }

    typeGet = async (req,res,next)=>{
        const type = req.body
        const typeGet=await itemService.typeGet(type)
        res.status(typeGet.status).json(type.message)
    }

    createItem=async(req,res,next)=>{
        const {name,price,type} =req.body
        const {userId}=res.locals.user
        const item = await this.itemService.createItem(name,price,type,userId)
        res.status(item.status).json(item.message)
    }

    updateItem=async(req,res,next)=>{
        const {name,price,type} =req.body
        const {userId}=res.locals.user
        const id = res.params
        const item = await this.itemService.updateItem(name,price,type,userId,id)
        res.status(item.status).json(item.message)
    }

    deleteItem= async(req,res,next)=>{
        const {password} = req.body
        const id = res.params
        const item = await this.itemService.deleteItem(password,id)
        res.status(item.status).json(item.message)
    }
}

module.exports = ItemController