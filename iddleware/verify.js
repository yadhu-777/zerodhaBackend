require("dotenv").config()
const {user} = require("../Models/Usermodel");


const jwt = require("jsonwebtoken")
module.exports.VerifyUser=async(req,res)=>{
const token = req.cookies.token;

if(!token){
    return res.json({status:false});
}else{


jwt.verify(token,process.env.Token,async(err,data)=>{

    if(err){
        return res.json({status:false});
    }
    else{
        const User = await user.findById(data.id);
       
        if (User) {
            console.log("came");
             res.json({status:true,user:User.name,email:User.email})
        }
             else {
                res.json({status:false})
            } 
    }
})


}
}