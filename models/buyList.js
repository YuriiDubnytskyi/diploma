const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const buyListSellSchema = new Schema(
    {
        product: Array,
        userId: Schema.ObjectId,
        status: String,
        isOld: Boolean,
        time: Date,
        adress: String,
    },
    {
        collection: "buyListSell",
    }
);

module.exports = mongoose.model("BuyListSell", buyListSellSchema);
