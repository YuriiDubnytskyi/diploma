const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productInfoSchema = new Schema({
    name:String,
    price:String,
    info:String,
    producer:String,
    properties:Array,
    idProduct:String,
    images:Array
},{
    collection:"productInfo"
})

module.exports = mongoose.model('productInfo', productInfoSchema);