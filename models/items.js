const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const items=new Schema({
    title: {
        type: String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        requried:true
    },
    ActualPrice:{
        type:String,
        requried:true
    },
    discount:{
        type:String,
        requried:true
    },
    Price:{
        type:String,
        requried:true
    },
    imagelink:{
        type:String,
        requried:true
    },
    category:{
        type:String,
        requried:true
    },
    itemcount:{
        type:Number,
        required:true
    }
},
{
    timestamps:true
});

const Items=mongoose.model('items',items);
module.exports=Items;