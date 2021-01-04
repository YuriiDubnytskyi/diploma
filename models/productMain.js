const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productTitleSchema = new Schema({
    productTitle:String,
    idProductTitle:String
},{
    collection:"productTitle"
})

module.exports = mongoose.model('productTitle', productTitleSchema);