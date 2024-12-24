const mongoose=require("mongoose");

const userModel=new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,"First name should be of 3 letters or long"],
        },
        lastname:{
            type:String,
            minlength:[3,"Last name should be of 3 letters or long"],
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },

    socketId:{
        type:String
    }
})

module.exports=mongoose.model("user",userModel);
