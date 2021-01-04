const productTitleSchema = require("../models/productMain")
const productSubTitleSchema = require("../models/productSubMain")
const productListSchema = require("../models/productList")
const wereHouseSchema = require("../models/wereHouse")
const productInfoSchema = require("../models/productInfo")
const userSchema = require("../models/users")
const newsSchema = require("../models/news")
const buyListSellSchema = require("../models/buyList")

const getProductTitle = async () => {
    const Title = productTitleSchema
    return await Title.find({}, (err, list)=>{ 
            if(err) return console.log(err);
            return list;
    });
}
const getProductsSubtitle = async (id) => {
    const SubTitle = productSubTitleSchema
    return await SubTitle.find({idProductTitle:{ $in:`${id}`}}, (err, list)=>{ 
            if(err) return console.log(err);
            return list;
    });
}
//Why it this ??
// const getProductsList = (id) => {
//     console.log('here')
//     const List = productListSchema
//     return new Promise((res,rej)=>{
//          List.aggregate([ 
//                 { $match: { idSubProduct: id } },
//                 { "$lookup": {
//                     from: 'wereHouse',
//                     localField: 'idProduct',
//                     foreignField: 'idWereHouse',
//                     as: 'count'
//                 }
//                 }
//             ]).exec((e,r)=>{
//                 res(r)
//             })
//      }) 
// }


const getProductInfo = async (id) => {
    const Product = productInfoSchema
    return new Promise((res,rej)=>{
        Product.aggregate([ 
            { $match: { idProduct: id } },
            {
                $lookup:
                {
                    from: 'wereHouse',
                    localField: 'idProduct',
                    foreignField: 'idWereHouse',
                    as: 'count'
                }
            }
        ]).exec((e,r)=>{
            res(r)
        })
    }) 
}

const getNews = async (number) =>{
    return new Promise((res,rej)=>{
        const News = newsSchema
        News.find()
            .skip(number-2)
            .limit(2)
            .exec((err,news)=>{
                if (err) rej(err)
                res(news)
            })
    })
}

const updateUser = async (name,phone,gender,surname,age,id) =>{
    return new Promise((res,rej)=>{
        const User = userSchema
        User.findOneAndUpdate({_id:id},{name,phone,gender,surname,age},{new:true , useFindAndModify: false},(err,user)=>{
            if(err) return console.log(err);
            res(user)
        })
    }) 
}

const getNewsID = async (id) =>{
    return new Promise((res,rej)=>{
        const News = newsSchema
        News.findOne({_id:id},((err,news)=>{
            if(err) return console.log(err);
            res(news)
        }))
        
    })
}

const getProductListSearch = async (str) => {
    return new Promise((res,rej)=>{
        const List = productListSchema
        List.find({name:{$regex:'.*'+str+'.*'}}, (err, list)=>{ 
            if(err) return console.log(err);
            res(list);
        });
    }) 
}

const getProductListSearchAll = async () => {
    return new Promise((res,rej)=>{
        const List = productListSchema
        List.find({}, (err, list)=>{ 
            if(err) return console.log(err);
            res(list);
        });
    }) 
}

const getProductList = async (id) => {
    return new Promise((res,rej)=>{
        const List = productListSchema
        List.find({idSubProduct:{ $in:`${id}`}}, function(err, list){ 
            if(err) return console.log(err);
            res(list);
        });
    }) 
}

const addProduct = async (id,newLikeProducts) =>{
    return new Promise((res,rej)=>{
        const User = userSchema
        User.findOneAndUpdate({_id:id},{likeProducts:newLikeProducts},{new:true , useFindAndModify: false},function(err,user){
            if(err) return console.log(err);
            res(user)
        })
    })
}
const getProductsLikeOrBuy = async (ids) => {
    return new Promise((res,rej)=>{
        const List = productListSchema
        List.aggregate([ 
            { $match: { idProduct:{ $in:ids} } },
            {
                $lookup:
                {
                    from: 'wereHouse',
                    localField: 'idProduct',
                    foreignField: 'idWereHouse',
                    as: 'countOfProduct'
                }
            }
        ]).exec((e,r)=>{
            res(r)
        })
    }) 
}


const createBuyListSell = async (email,product) => {
    return new Promise((res,rej)=>{
        const BuyListSell = new buyListSellSchema({email,product,time:new Date()})
        BuyListSell.save((err)=>{
            if(err) return console.log(err);
        }) 
    })
}

const sellCountCalculate = async (products) => {
    const wereHouse = wereHouseSchema
    products.productsBucket.map((el)=>{
        wereHouse.find({idWereHouse:el.idProduct}, function(err, product){ 
            if(err) return console.log(err);
            let sell = Number(product[0].sell)
            let count = Number(product[0].count)
            sell+=el.count
            count-=el.count
            wereHouse.findOneAndUpdate({idWereHouse:el.idProduct},{count:count,sell:sell},{new:true , useFindAndModify: false},function(err){
                if(err) return console.log(err);
            })
        });
    })
}

const getProductsSell = async (email) => {
    return new Promise((res,rej)=>{
        const BuyListSell = buyListSellSchema
        BuyListSell.find({email:{ $in:`${email}`}},(err,list)=>{
            if(err) return console.log(err);
            console.log(list)
            res(list)
        }) 
    }) 
}


const verifyUser = async (id) =>{
    return new Promise((res,rej)=>{
        const User = userSchema
        User.findOneAndUpdate({_id:id},{emailVerify:true},{new:true , useFindAndModify: false},(err,user)=>{
            if(err) return console.log(err);
            res(user)
        })
    }) 
}

module.exports = {
    getProductTitle,
    getProductsSubtitle,
    getProductsList,
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
    verifyUser
}