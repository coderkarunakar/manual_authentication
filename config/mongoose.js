// //NOTE: WE ARE USING THE MONGODB COMPAS INSTEAD OF ROBO 3T IT IS SO SIMPLE TO CONNECT IN THE MAIN INDEX.JS FILE and we will be connecting like this in config file also...



const mongoose=require('mongoose')
const db = mongoose.connection;

mongoose.connect(
    'mongodb://localhost:27017/',
{
    dbName:"manual_authentication_development",
    useNewUrlParser:true,
    useUnifiedTopology:true,
},
(err) =>
    err ? console.log(err) : console.log(
        "connected to manual authentication database")
);
    
const express =require('express');
const app=express();
const cors =require('cors');
console.log("App listen at port 8000");
module.exports=db;