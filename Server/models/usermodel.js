//rsconst { default: Password } = require('antd/es/input/Password')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['admin','user','partner'],
        required:true,
        default:'user'
    }
})

const usermodel = mongoose.model('User', userSchema)
module.exports=usermodel  