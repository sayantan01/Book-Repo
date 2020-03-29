const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let Book=new Schema(
    {
        name:
        {
            type:String,
            required:true
        },
        author:
        {
            type:String,
            required:true
        },
        price:
        {
            type:Number,
            required:true
        }
    }
);

module.exports=mongoose.model('books',Book);