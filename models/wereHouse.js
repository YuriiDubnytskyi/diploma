const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wereHouseSchema = new Schema({
    name:String,
    idWereHouse:String,
    count:String,
    sell:String
},{
    collection:"wereHouse"
})

module.exports = mongoose.model('wereHouse', wereHouseSchema);