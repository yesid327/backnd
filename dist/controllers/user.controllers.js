import { User } from "../models/users.models";
import {responseHandler} from "../middlewares/responseHandler.middlewares"
import { hashPassword } from "../helpers/bcrypt.helpers";
import { generateJWT} from "../helpers/jwt.helpers";

// Get all users of users table
export const getAllUser = async (req, res, next) =>{
    try{
        const  user  = req.user;
        console.log(user)
        console.log(user.id_rol);
        const users = await User.findAll({
            wherer:{
             id_rol:1   
            }
        });
        
        if(user.id_rol == 2){
            if(users.length <= 0){
                return responseHandler(res, 404, true, "No users found", null);
            }
            return responseHandler(res, 200, false, "User found", users);
        }
        
        return responseHandler(res, 401, true, "Unauthorized", null);
    }catch(err){
        return responseHandler(res, 401, true, "Unauthorized", null);
    }
}

// Get user by id of users table
export const getUserId = async(req, res, next) =>{
    try{
        const { id_user } = req.params;
        const user = await User.findByPk(id_user);

        if(!user){
            return responseHandler(res, 404, true, "User not found", null);
        }

        return responseHandler(res, 200, false, "User found", user);
    }catch(err){
        return responseHandler(res, 401, true, "Unauthorized", null);
    }
}

// Create new user
export const createUser = async (req, res, next ) =>{
    try{
        const { username, email, password, id_rol } = req.body;

        const searchUser = await User.findAll({
            where:{
                email, 
                username
            }
        });

        if(searchUser > 0){
            return responseHandler(res, 409, true, "User already exist", null);
        }

        const hashedPassword = await hashPassword(password);

        const userData = {
            username, 
            email, 
            password: hashedPassword,
            id_rol
        }

        const newUser = await User.create(userData);

        const data = {
            msg: "User created"
        }
       
        return responseHandler(res, 200, false, "User created",data);
    }catch(err){
        return responseHandler(res, 401, true, "Unauthorized", null);
    }
}

