const mongoose=require('mongoose');
const jwt = require("jsonwebtoken")

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    usertype:{
        type:String,
        default: "individual",
        enum: ['individual', 'organization','waste-collector','recycle-company', 'admin']
    },
    termsAccepted: {
        type: Boolean,
        required: true
    },
});

const User = mongoose.model('User',UserSchema);
module.exports=User;

// UserSchema.methods.generateToken = async function () {
//     try {
//         return jwt.sign({
//             userId: this._id.toString(),
//             email:this.email,
//             isAdmin:this.isAdmin,
//         },secret.secret,{expiresIn: "1h"});
//     } catch (error) {
//         console.error(error)
//     }
// };


