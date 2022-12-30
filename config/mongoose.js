// //NOTE:NO  NEED THIS WE ARE USING THE MONGODB COMPAS INSTEAD OF ROBO 3T IT IS SO SIMPLE TO CONNECT IN THE MAIN INDEX.JS FILE ONLY



const mongoose=require('mongoose')
mongoose.connect(
    'mongodb://localhost:27017/',
{
    dbName:"codeial_development",
    useNewUrlParser:true,
    useUnifiedTopology:true,
},
(err) =>
    err ? console.log(err) : console.log(
        "connected to codeial_development database")
);
    
const express =require('express');
const app=express();
const cors =require('cors');
console.log("App listen at port 8000");