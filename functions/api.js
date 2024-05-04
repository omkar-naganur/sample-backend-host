require('dotenv').config()
//console.log(process.env)
const express = require('express');
const serverless = require('serverless-http');
const { User } = require('./models/user');
const { connectToDb } = require('../config/db');
const router = express.Router();



const app = express()
app.use(express.json());

router.get('/', function (req, res) {
  res.send('<h1>Hello World<h1>')
})

router.post("/register",async(req,res)=>{
    try {
        const {name,email,password,phoneNumber,role,addressOfuser} = req.body;
        if(!name.trim() || !email.trim()){
            return res.status(400).send("Name is required"); 
        }
        const user = new User({name,email,password,phoneNumber,role,address:addressOfuser});
        await user.save()
        return res.status(201).send({
            message:"User created!",
            data:user
        });


    } catch (error) {
        return res.status(500).send(error.message);
    }
})

app.use("/.netlify/functions/app", router);
module.exports.handler = serverless(app);
// const handler = serverless(app,{provider:'aws'})
// app.listen(3000,()=>{
// console.log("Server is running");
// connectToDb()
// })
