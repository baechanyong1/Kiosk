const User = require("../database/model/user");

class UserRepository {
  async createUser({name, password}) {
    try {
      const existingUser = await User.findOne({ where: { name } });
      if (existingUser) {
        return {
          status: 400,
          message: "중복된 이름",
        };
      }
      const create = await User.create({
        name,
        password,
      });
      return { status : 200 , create }
    } catch (error) {
      console.log(error);
      return { status: 400, message: "회원 가입 중 에러 발생" };
    }
  }


  async getUser({id}){
    try {
        const user = User.findByPk(id, {include: {model : Item}})
        return { status : 200 , user}
    } catch (error){
        console.log(error)
        return {
            status : 400,
            message : "조회 중 에러 발생"
        }
    }
  }

  async putUser({id,name,password}){
    try{
        const user = await User.update({name,password},{
            where : {id}
        })
        
        return {status:200,user}
    }catch(error){
    console.log(error)
    return {
            status : 400,
            message :"수정 중 에러 발생"        
    }
    }
  }

  async deleteUser({id}){
    try{
        const user = await User.findByPk(id)
        const deleteUser = await user.destroy()
        if(deleteUser){
            return {
                status : 200,
                message : "삭제 완료"
            }
        }else {
            return {
                status : 400,
                message : "정보가 일치하지 않음"
            }
        }
    } catch (error){
        return {
            status : 400,
            message : "회원 정보 삭제 중 에러 발생"
        }
    }
  }

    async login ({name,password}){
    const user = await User.findOne(name)
    if(!user){
      return{
        status:400,
        message : "정보가 없습니다"
      }
    }else if (user.password !==password){
      return{
        status:400,
        message : "정보가 일치하지 않습니다"
      }
    } else{
      return{
        status:200,
        user
      }
    }
}
}  
// async login(email) {
//     try {
//     const user = await User.findOne({
//       where: { email },
//     });
//     return user;
//   }catch (error){
//     console.log(error)
//     return {status : 400 , message : "로그인 중 에러 발생"}
//   }

module.exports = UserRepository;
