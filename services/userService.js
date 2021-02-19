const mongoose = require("mongoose");
const productTitleSchema = require("../models/productMain");
const productSubTitleSchema = require("../models/productSubMain");
const productListSchema = require("../models/productList");
const wereHouseSchema = require("../models/wereHouse");
const productInfoSchema = require("../models/productInfo");
const userSchema = require("../models/users");
const newsSchema = require("../models/news");
const buyListSellSchema = require("../models/buyList");
const ObjectId = mongoose.Types.ObjectId;

const getProductTitle = async () => {
    try {
        const Title = productTitleSchema;
        const titleList = await Title.find({});
        return { err: false, data: titleList };
    } catch (error) {
        return { err: true, errMess: error };
    }
};

const getProductsSubtitle = async (id) => {
    try {
        const SubTitle = productSubTitleSchema;
        const subTitleList = await SubTitle.find({ idProductTitle: { $in: `${id}` } });
        return { err: false, data: subTitleList };
    } catch (error) {
        return { err: true, errMess: error };
    }
};

const getProductInfo = async (id) => {
    try {
        const Product = productInfoSchema;
        const product = await Product.aggregate([
            { $match: { idProduct: ObjectId(id) } },
            {
                $lookup: {
                    from: "storageHouse",
                    localField: "idProduct",
                    foreignField: "idStorageHouse",
                    as: "count",
                },
            },
        ]);
        return { err: false, data: product };
    } catch (error) {
        return { err: true, errMess: error };
    }
};

const getNews = async (number) => {
    try {
        const News = newsSchema;
        const newsList = await News.find()
            .skip(number - 2)
            .limit(2);
        return { err: false, data: newsList };
    } catch (error) {
        return { err: true, errMess: error };
    }
};

const updateUser = async (name, phone, gender, surname, age, id) => {
    try {
        const User = userSchema;
        const update = await User.findOneAndUpdate(
            { _id: id },
            { name, phone, gender, surname, age },
            { new: true, useFindAndModify: false }
        );
        return { err: false, data: update, successUpdate: true };
    } catch (error) {
        return { err: true, errMess: error };
    }
};

const getNewsID = async (id) => {
    try {
        const News = newsSchema;
        const news = await News.findOne({ _id: id });
        return { err: false, data: news };
    } catch (error) {
        return { err: true, errMess: error };
    }
};

const getProductListSearch = async (str) => {
    try {
        const List = productListSchema;
        const searchList = await List.find({ name: { $regex: ".*" + str + ".*" } });
        return { err: false, data: searchList };
    } catch (error) {
        return { err: true, errMess: error };
    }
};

const getProductListSearchAll = async () => {
    try {
        const List = productListSchema;
        const searchList = await List.find({});
        return { err: false, data: searchList };
    } catch (error) {
        return { err: true, errMess: error };
    }
};

const getProductList = async (id) => {
    try {
        const List = productListSchema;
        const productList = await List.find({ idSubProduct: { $in: `${id}` } });
        return { err: false, data: productList };
    } catch (error) {
        return { err: true, errMess: error };
    }
};

const addProduct = async (id, newLikeProducts) => {
    try {
        const User = userSchema;
        const addLike = await User.findOneAndUpdate(
            { _id: id },
            { likeProducts: newLikeProducts },
            { new: true, useFindAndModify: false }
        );
        return { err: false, data: addLike, success: true };
    } catch (error) {
        return { err: true, errMess: error };
    }
};
const getProductsLikeOrBuy = async (ids) => {
    try {
        const List = productListSchema;
        ids = ids.map((userId) => new ObjectId(userId));
        const likeBuyList = await List.aggregate([
            { $match: { _id: { $in: ids } } },
            {
                $lookup: {
                    from: "storageHouse",
                    localField: "_id",
                    foreignField: "idStorageHouse",
                    as: "countOfProduct",
                },
            },
        ]);
        console.log(likeBuyList);
        return { err: false, data: likeBuyList };
    } catch (error) {
        return { err: true, errMess: error };
    }
};

const createBuyListSell = async (userId, email, product, adress) => {
    try {
        const BuyListSell = new buyListSellSchema({
            userId,
            status: "Pending",
            isOld: false,
            email,
            product,
            adress,
            time: new Date(),
        });
        await BuyListSell.save();
        return { err: false, success: false };
    } catch (error) {
        return { err: true, errMess: error };
    }
};

const sellCountCalculate = async (products) => {
    try {
        const wereHouse = wereHouseSchema;
        await products.productsBucket.map((el) => {
            wereHouse.find({ idStorageHouse: el._id }, function (err, product) {
                if (err) return console.log(err);
                let count = Number(product[0].count);
                count -= el.count;
                wereHouse.findOneAndUpdate(
                    { idStorageHouse: el._id },
                    { count: count },
                    { new: true, useFindAndModify: false },
                    function (err) {
                        if (err) return console.log(err);
                    }
                );
            });
        });
        return { err: false, success: true };
    } catch (error) {
        return { err: true, errMess: error };
    }
};

const getProductsSell = async (id) => {
    try {
        const BuyListSell = buyListSellSchema;
        const buyProduct = await BuyListSell.find({ userId: { $in: ObjectId(id) } });
        return { err: false, data: buyProduct };
    } catch (error) {
        return { err: true, errMess: error };
    }
};

const verifyUser = async (id) => {
    try {
        const User = userSchema;
        const verify = await User.findOneAndUpdate(
            { _id: id },
            { emailVerify: true },
            { new: true, useFindAndModify: false }
        );
        return { err: false, data: verify, successVerify: true };
    } catch (error) {
        return { err: true, errMess: error };
    }
};

const deleteAccount = async (id) => {
    try {
        const User = userSchema;
        const deleted = await User.deleteOne({ _id: id }, { new: true, useFindAndModify: false });
        return { err: false, data: deleted, successDeleted: true };
    } catch (error) {
        return { err: true, errMess: error };
    }
};

module.exports = {
    getProductTitle,
    getProductsSubtitle,
    getProductInfo,
    getNews,
    updateUser,
    getNewsID,
    getProductListSearch,
    getProductListSearchAll,
    getProductList,
    addProduct,
    getProductsLikeOrBuy,
    sellCountCalculate,
    createBuyListSell,
    getProductsSell,
    verifyUser,
    deleteAccount,
};
