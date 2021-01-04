import * as actionTypes from './actionTypes';
import axios from 'axios'
export const fetchGetProductListSearch = (str) => {
    return function (dispatch) {
      dispatch(getProductList())
      
      return axios.get('/api/user/getProductListSearch/'+str)
        .then( (list) => {
            if(!list.data.err){
              dispatch(getProductListSearchSuccess(list.data))
            }
        })
  
    }
  }
  
  export const getProductList = () => {
    return {
      type: actionTypes.GET_PRODUCTS_LIST,
    }
  }
  
  export const getProductListSearchSuccess = (data) => {
    return {
      type: actionTypes.GET_PRODUCTS_LIST_SEARCH_SUCCESS,
      data
    }
  }