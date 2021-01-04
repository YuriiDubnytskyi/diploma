import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    productsBucket:[
        
    ],
    loading:false,
    err:false,
    errMess:'',
    success:false,
    totalPrice:0
};
const getTotalPrice = (data) => {
    let price = 0
    data.forEach((el)=>{
        price+=Number(el.price)
    })
    return price
}

const plusPrice = (data,id,totalPrice) => {
    let price = totalPrice
    data.forEach((el)=>{
        if(el.idProduct === id){
            if(el.countOfProduct[0].count - (el.count + 1) >= 0 ) price+=Number(el.price)
            
        }
    })
    return price
}

const minusPrice = (data,id,totalPrice) => {
    let price = totalPrice
    data.forEach((el)=>{
        if(el.idProduct === id){
            if(el.count -1 !==0 ) price-=Number(el.price)
            
        }
    })
    return price
}

const getProductsBucket = (data) => {
    return data.map((el)=> updateObject(el,{count:1}))
}
const getProductsBucketP = (data,id) => {
    return data.map( (el)=> {
        if(el.idProduct === id){    
                if(el.countOfProduct[0].count - (el.count + 1) >= 0 )  return updateObject(el,{count:el.count + 1})
                return el
        }else{
            return el
        }
    })
        
}
const getProductsBucketM = (data,id) => {
    return data.map( (el)=> {
        if(el.idProduct === id){    
                if(el.count -1 !==0 ) return updateObject(el,{count:el.count - 1})
                return el
        }else{
            return el
        }
    })
}

const productBucket = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_PRODUCTS_BUY_INITIAL:
            return updateObject(state,{
                loading:true
            })
        case actionTypes.GET_PRODUCTS_BUY_FAIL:
            return updateObject(state,{
                err:true,
                errMess:action.mess,
                loading:false,
                success:false,
            })
        case actionTypes.GET_PRODUCTS_BUY_SUCCESS:
            return updateObject(state,{
                success:true,
                loading:false,
                productsBucket:getProductsBucket([...action.data]),
                totalPrice:getTotalPrice([...action.data])
            })
        case actionTypes.ADD_PRICE_PRODUCT:
            return updateObject(state,{
                totalPrice:plusPrice(state.productsBucket,action.id,state.totalPrice),
                productsBucket:getProductsBucketP(state.productsBucket,action.id)
            })
        case actionTypes.MINUS_PRICE_PRODUCT:
            return updateObject(state,{
                totalPrice:minusPrice(state.productsBucket,action.id,state.totalPrice),
                productsBucket:getProductsBucketM(state.productsBucket,action.id)
            })
        case actionTypes.CLEAR_BUCKET:
            return updateObject(state,{
                productsBucket:[],
                loading:false,
                err:false,
                errMess:'',
                success:false,
                totalPrice:0
            })
        default:
            return state;
    }
};

export default productBucket;