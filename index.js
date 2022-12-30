const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('./assets'));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


// use express router
app.use('/', require('./routes'));

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});



// THIS IS STEPS TO CONNECT OUR MONGODB COMPASS DATABASE TO OUR  CODING 


// const mongoose=require('mongoose')
// mongoose.connect(
//     'mongodb://localhost:27017/',
// {
//     dbName:"codeial_development",
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
// },
// (err) =>
//     err ? console.log(err) : console.log(
//         "connected to codeial_development database")
// );
    
// // const express =require('express');
// // const app=express();
// const cors =require('cors');
// console.log("App listen at port 8000");