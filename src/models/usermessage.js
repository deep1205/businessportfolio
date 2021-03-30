const mongoose=require("mongoose");
const validator=require("validator");

const userSchema=mongoose.Schema({

name:{
    type:String,
    minlength:3,
    required:true,
}
,
email:
{
    type:String,
    required:true,
    validate(value){
        if(!validator.isEmail(value))
        {throw new Error("Invalid email id")
        }                                   
    }
},
phone:{
    type:String,
    minlength:10,
    required:true,
},
message:{
    type:String,
    minlength:3,
    required:true,
     },

     date:{
         type:Date,
         default:Date.now,  
     }
})


////we need a collection
const User=mongoose.model("User",userSchema);
module.exports=User;
 
