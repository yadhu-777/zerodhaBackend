const express = require("express");
const app  = express();
const { Login } =require ("./controller/authlogin");
const { Signup } =require ("./controller/authsign");
const mongoose = require("mongoose");
const { holdings } = require("./Models/HoldingsModel");
require("dotenv").config()
const url =process.env.Mongo_url 
const { positions } = require("./Models/Positionmodel");
const cors = require("cors")
const bodyparser = require("body-parser")
const {order}= require ("./Models/OrderModel");
const {user} = require("./Models/Usermodel");
const {VerifyUser} = require("./iddleware/verify");
const cookieParser = require("cookie-parser");
const Port = process.env.Port || 3000;
const link1 = process.env.Link1;
const link2 = process.env.Link2;
app.listen(Port,()=>{
    console.log("connected ")
})
const connect =()=>mongoose.connect(url);
 connect()
 .then(()=>{
    console.log("connected succesfully")
 })
 .catch((err)=>{
    console.log(err);
 })
 const allowedorigin = [link1,
  link2
 ]
 app.use(cors({ origin: allowedorigin, credentials: true }));
 app.use(cookieParser());
 app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.post("/",VerifyUser);

app.get("/order",async(req,res)=>{
  const orderdetails = await order.find({})
  res.json(orderdetails);
})


app.get("/allposition",async(req,res)=>{
  const allpositions  = await positions.find({})
  res.json(allpositions)
})

app.get("/allholding",async(req,res)=>{
  const allholdings  = await holdings.find({})
  res.json(allholdings)
})
app.post("/neworder",async(req,res)=>{

  const upload = new order({
    name:req.body.name,
      price:req.body.price,
        quantity:req.body.quantity,
          mode:req.body.mode
  })
await upload.save();

})

app.post("/signup",Signup);
app.post("/login",Login);
