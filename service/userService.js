const UserRepository = require("../repository/userRepository")

class UserService {
    constructor() {
        this.userRepository = new UserRepository
    }
    createUser = async ( name , password )=>{
        const createUser = await this.userRepository.createUser(name,password)
        if (!/^[a-zA-Z0-9.@]{3,10}$/.test(createUser.name)) {
            return {
                status : 400,
                message : "이름은 3자 이상 10자 이하로 해주세요"
            }
            }
            return createUser
          }

    login = async (name, password)=>{
        const loginUser = await this.userRepository.login(name,password)
        return loginUser
    }

    getUser = async (id)=>{
        const user = await this.userRepository.getUser(id)
        return user
    }

    deleteUser = async(id,name,password)=>{
        const deleteUser = await this.userRepository.deleteUser(id,name,password)
        return deleteUser
    }

    putUser = async(id,name,password)=>{
        const putUser = await this.userRepository.putUser(id,name,password)
        return putUser
    }
    }

    


module.exports = UserService