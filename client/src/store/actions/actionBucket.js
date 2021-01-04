import * as actionTypes from './actionTypes';
import axios from 'axios'

export const fetchGetProductsBucket = (data) => {
    return function (dispatch) {
      dispatch(getProductsBucketInitial())
      
      return axios.post('/api/user/getProductsBucket',{ids:data})
        .then( (products) => {
            if(products.data.err){
              dispatch(getProductsBucketFail(products.data.mess))
            }else{
              dispatch(getProductsBucketSuccess(products.data))
              
            }
        })

    }
  }


export const getProductsBucketInitial = () => {
    return {
      type: actionTypes.GET_PRODUCTS_BUY_INITIAL,
    }
  }
export const getProductsBucketFail = (mess) => {
    return {
      type: actionTypes.GET_PRODUCTS_BUY_FAIL,
      mess
    }
  }
export const getProductsBucketSuccess = (data) => {
    return {
      type: actionTypes.GET_PRODUCTS_BUY_SUCCESS,
      data
    }
}
export const addPlusProductBucket = (id) => {
    return {
      type: actionTypes.ADD_PRICE_PRODUCT,
      id
    }
}
export const addMinusProductBucket = (id) => {
    return {
      type: actionTypes.MINUS_PRICE_PRODUCT,
      id
    }
}
export const clearBucket = () => {
  return {
    type: actionTypes.CLEAR_BUCKET,
  }
}