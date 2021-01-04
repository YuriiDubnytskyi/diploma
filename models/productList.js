const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productListSchema = new Schema({
    name:String,
    price:String,
    idProduct:String,
    idSubProduct:String,
    image:String
},{
    collection:"productList"
})
module.exports = mongoose.model('productList', productListSchema);