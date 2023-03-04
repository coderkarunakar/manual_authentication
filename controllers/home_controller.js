
//cookies are just like a piece  of data it tells that users have returned to a particular website..page
module.exports.home = function(req, res){

    //when u go to home page after successful sign in ,sign up ,this below prints the cookie user id ,how many times we refresh we  get printed on the terminal..
    console.log(req.cookies);

    //with this below line we can change the value of the cookie here ..only ..and we can see it when we inspect page..when we navigate through a website it provides the information...
    res.cookie('user_id', 43);

// this renders the home .ejs file and we will be able to see home as a title in the tab page..

    return res.render('home', { 
        
    // this below title is linked with home.ejs file and +tab as well 
        title: "Home"
    });
}

// module.exports.actionName = function(req, res){}