import { User } from "../models/users.models";
import { comparePassword, hashPassword } from "../helpers/bcrypt.helpers";
import { generateJWT } from "../helpers/jwt.helpers";
import { responseHandler } from "../middlewares/responseHandler.middlewares";

// Loging
export const signIn = async (req, res, next) =>{
    try{
        const { email, password } = req.body;

        const searchUser = await User.findOne({
            where:{
                email
            }
        });

        console.log(searchUser)
        if(searchUser <= 0){
            return responseHandler(res, 401, true, "User not found", null);
        }

        const checkPassword = await comparePassword(password, searchUser.password);

        if(!checkPassword){
            return responseHandler(res, 401, true, "Invalid credentials", null);
        }

        const payload = {
            id_user: searchUser.id_user,
            id_rol: searchUser.id_rol,
            email: searchUser.email,
            username: searchUser.username
        }

        const  token = await generateJWT(payload);

        const dataResponse = {
            token,
            user:{
                email: searchUser.email,
                username: searchUser.username
            }
        }

        return responseHandler(res, 200, false, "User logged in", dataResponse);
    }catch(err){
        return responseHandler(res, 401, true, "Invalid credentials", null);
    }
}
