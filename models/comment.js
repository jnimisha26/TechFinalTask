const mongoose = require("mongoose");
const user = require("./user");
const post = require("./post");

const commentSchema = new mongoose.Schema({
    postid :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'post'
    },
    author :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    comment :{
        type : String
    }
})
module.exports = mongoose.model('Comment' , commentSchema)