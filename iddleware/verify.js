const {user} = require("../Models/Usermodel");

require("dotenv").config()
const jwt = require("jsonwebtoken")
module.exports.VerifyUser=async(req,res,next)=>{
const token = req.cookies.token;
console.log("came")
if(!token){
    return res.json({status:false});
}
jwt.verify(token,process.env.Token,async(err,data)=>{

    if(err){
        return res.json({status:false});
    }
    else{
        const User = await user.findById(data.id);
       
        if (User) {
            return res.json({status:true,user:User.name,email:User.email})
        }
            else return res.json({status:false})
    }
})

}