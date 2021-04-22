const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema(
    {
        title: String,
        shortDescription: String,
        fullDescription: String,
        imageMain: String,
        time: Date,
    },
    {
        collection: "news",
    }
);

module.exports = mongoose.model("news", newsSchema);
