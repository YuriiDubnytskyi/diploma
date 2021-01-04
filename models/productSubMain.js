const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSubTitleSchema = new Schema({
    productSubTitle:String,
    idProductSubTitle:String,
    idProductTitle:String,
},{
    collection:"productSubTitle"
})

module.exports = mongoose.model('productSubTitle', productSubTitleSchema);