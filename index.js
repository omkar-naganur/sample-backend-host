require('dotenv').config()
//console.log(process.env)
const express = require('express');
const { connectToDb } = require('./config/db');
const serverless = require('serverless-http');
const { User } = require('./models/user');
const router = express.Router();



const app = express()
app.use(express.json());

app.get('/', function (req, res) {
  res.send('<h1>Hello World<h1>')
})

app.post("/register",async(req,res)=>{
    try {
        const {name,email,password,phoneNumber,role,addressOfuser} = req.body;

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

// app.use("/.netlify/functions/app", router);
// const handler = serverless(app,{provider:'aws'})
app.listen(process.env.PORT || 3000,()=>{

    try {
        
        console.log("Server is running");
        connectToDb()
    } catch (error) {
        return res.status(500).send(error.message);
    }
})
