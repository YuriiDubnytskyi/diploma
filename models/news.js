const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema(
    {
        title: String,
        shortDescription: String,
        fullDescription: String,
        time: String,
    },
    {
        collection: "news",
    }
);

module.exports = mongoose.model("news", newsSchema);
