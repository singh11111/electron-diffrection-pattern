const { date, boolean, string } = require("joi");
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/react-login")
.then(()=>{
    console.log("mangodb connected");
})
.catch(()=>{
    console.log('failed')
})
const newSchema =  new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    // name:{
    //     type:String,
    //     required:true
    // },
    // lastlogin:{
    //     type:Date,
    //     default:Date.now
    // },
    // isVarified:{
    //     type:Boolean,
    //     default:false
    // },
    // resetPasswordToken:String,
    // resetPasswordExpiryAt:Date,
    // verificationToken:String,
    // verificationTokenExpiryAt:Date

}
// ,{timestamps:true}
)
const collection = mongoose.model("collection",newSchema)
module.exports =collection