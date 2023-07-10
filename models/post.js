const mongoose = require("mongoose");
const user = require("./user");
const postSchema = new mongoose.Schema({
    postimg : {
        type : String,
        required : false,
    },
    caption : {
        type : String,
        required : false
    },
    comments : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Comment'
        }
    ], 
    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : user
    }

})
module.exports= mongoose.model('Post', postSchema)
