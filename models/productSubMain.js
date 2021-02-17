const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSubTitleSchema = new Schema(
    {
        productSubTitle: String,
        idProductTitle: Schema.ObjectId,
        isImg: Boolean,
        imgSrc: String,
        imgFolder: String,
        isGroup: Boolean
        
    },
    {
        collection: "productSubTitle",
    }
);

module.exports = mongoose.model("productSubTitle", productSubTitleSchema);
