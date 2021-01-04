import * as actionTypes from './actionTypes';
import axios from 'axios'

export const fetchGetProductsLike = (data) => {
    return function (dispatch) {
      dispatch(getProductsLikeInitial())
      
      return axios.post('/api/user/getProductsLike',{ids:data})
        .then( (products) => {
            if(products.data.err){
              dispatch(getProductsLikeFail(products.data.mess))
            }else{
              dispatch(getProductsLikeSuccess(products.data))
            }
        })

    }
  }



export const getProductsLikeInitial = () => {
    return {
      type: actionTypes.GET_PRODUCTS_LIKE_INITIAL,
    }
  }
export const getProductsLikeFail = (mess) => {
    return {
      type: actionTypes.GET_PRODUCTS_LIKE_FAIL,
      mess
    }
  }
  export const getProductsLikeSuccess = (data) => {
    return {
      type: actionTypes.GET_PRODUCTS_LIKE_SUCCESS,
      data
    }
}
