const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password :{
        type : String,
        required : true
    },
    username :{
        type : String,
        default: 'username'
        // required : true
    },
    contact : {
        type : Number,
        required : true
    },
    gender : {
        type : String,
        enum : ['Male', 'Female'],
        required : false
    },
    profile :{
        type : String,
        required: true,
        default:'/Assets/profile-picture-2.jpg'
    },
    occupation :{
        type : String,
        required :false,
        default: 'newbie'
    },
    location :{
        type : String,
        default:'india'
    }
})
module.exports= mongoose.model('User', userSchema)