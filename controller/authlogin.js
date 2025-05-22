const {user} = require("../Models/Usermodel");
const bcrypt = require("bcrypt");
const {secrettoken} = require("../utils/secrettoken");
module.exports.Login = async(req,res,next)=>{
    try{

        const {email,password} = req.body;
        const User = await  user.findOne({email});
        if(!User){
         return   res.json({message:"user not found"})
        }
        const authuser = await bcrypt.compare(password,User.password)
        if(!authuser){
            return res.json({message:"password incorrect"});
        }
        const token = secrettoken(User._id);
        res.cookie("token",token,{
          
            httpOnly:false,
            
                    });



                    res.status(201).json({message:"user logged inn",success:true});
                    next()
    }
    catch(err){
        console.log(err)
    }
}