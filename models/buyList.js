const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const buyListSellSchema = new Schema({
    product:Array,
    email:String,
    time:String
},{
    collection:"buyListSell"
})

module.exports = mongoose.model('BuyListSell', buyListSellSchema);