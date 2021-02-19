const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wereHouseSchema = new Schema(
    {
        name: String,
        idStorageHouse: Schema.ObjectId,
        count: Number,
    },
    {
        collection: "storageHouse",
    }
);

module.exports = mongoose.model("storageHouse", wereHouseSchema);
