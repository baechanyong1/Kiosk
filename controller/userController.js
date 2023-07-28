const UserService = require("../service/userService")

class UserController {
    constructor(){
        this.userService = new UserService
    }

    getUser = async (req, res, next) => {
        const {id} = res.locals.userService

        const data = await this.userService.getUser(id)

        res.status(201).json(data)
    }

    createUser = async (req,res,next)=>{
        const {name, password} =req.body
        const user = await this.userService.createUser({name,password})
            res.status(user.status).json(user.message)
        }
    }


module.exports = UserController