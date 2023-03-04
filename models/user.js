//models folder :it keeps all the class files that process database operation
//NOTE:what ever the things u mention here will only appear in the mongodb compass like it will store the data what u will give in the sign-up,sign-in,that data is fetching by this below code and will be able to store in the mongodb compass..once go and check mongodb compass after sucessful sign in ,sign up ,and profile pages...
//what ever fields we give here only that would be saved in the  mongodb compass




const mongoose = require('mongoose');

//mongoose schema defines the structure of the document.. ,default values,validators etc..
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


//this below line takes 2 parameters i.e collection name (in database) and collection schema and sored in User
const User = mongoose.model('User', userSchema);
 
// all the stored User is getting exported...
module.exports = User;