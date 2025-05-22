const {user} = require("../Models/Usermodel");
const {secrettoken} = require("../utils/secrettoken.js");
module.exports.Signup=async(req,res,next)=>{
 try{
         
       const {name,email,password} = req.body;

    const  existingUser = await user.findOne({email});

    if(existingUser){
        return res.json({message:"user already exist"});
       
    }else{
const User = await user.create({name,email,password});

    const token = secrettoken(User._id);
    res.cookie("token",token,{
        httpOnly:false,
        withCredentials:true
    });
    res.status(201).json({message:"user signed",success: true});
    
next();
    }
    
 }
 catch(err){
    console.log(err);
 }

}
