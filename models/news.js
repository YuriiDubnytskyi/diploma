const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title:String,
    description:String,
    time:String
},{
    collection:"news"
})

module.exports = mongoose.model('news', newsSchema);