const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productTitleSchema = new Schema(
    {
        productTitle: String,
        isImg: Boolean,
        imgSrc: String,
        imgFolder: String,
    },
    {
        collection: "productTitle",
    }
);

module.exports = mongoose.model("productTitle", productTitleSchema);
