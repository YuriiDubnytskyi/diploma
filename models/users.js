const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:String,
    password:String,
    likeProducts:Array,
    name:String,
    surname:String,
    gender:String,
    age:Number,
    phone:Number,
    emailVerify:Boolean
},{
    collection:"userData"
})

module.exports = mongoose.model('User', userSchema);