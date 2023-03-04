//this line makes us to use all the libraries associated with the express
const express = require('express');
//getting all the libraries associated with the cookie-parser
const cookieParser = require('cookie-parser');

//here it is calling the express function and puts new express application in app variable
const app = express();

//here simply creating a port to run
const port = 8000;


//ejs does not supports layouts so with this below library we can make it supportable..(layout means positions (i.e css layouts styling a web site..))
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');


//this line is just like an middle war it parses the incomming request with urlencoded payloads and is based on body parser..
app.use(express.urlencoded());

//this line allowss to use the all the cookie libraries..cookies remember the information users have entered ,no need to enter again and again ..when the user moves betweeen pages and pages..and provides security for browsing as well
app.use(cookieParser());

//here  we are getting the assests folder,in order to serve the css and js files we are using a static file...
app.use(express.static('./assets'));

//this line is getting all the libraries associated with the expressLayouts
app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


// use express router
app.use('/', require('./routes'));

// set up the view engine
//below line is used to transfer the webpages using using template files..
app.set('view engine', 'ejs');

//views is just like a library and we are fetching that from the views folder that's why we gave ./ 
app.set('views', './views');


//this below lines are just for running our whole code in the required port..

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});


