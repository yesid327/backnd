import bcrypt from "bcrypt"

export const hashPassword = async (password) =>{
    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    }catch(err){
        console.log(err)
    }
}

export const comparePassword = async (password, hashPassword) =>{
    try{
        return await bcrypt.compare(password, hashPassword)
    }catch(err){
        console.log(err)
    }
}