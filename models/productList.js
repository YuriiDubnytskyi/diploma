const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productListSchema = new Schema(
    {
        name: String,
        price: String,
        idSubProduct: Schema.ObjectId,
        imageMain: String,
        shortInfo: String,
        groupName: String,
    },
    {
        collection: "productList",
    }
);
module.exports = mongoose.model("productList", productListSchema);
