import * as actionTypes from './actionTypes';
import API from './../../API/API'

export const fetchGetProductList = (id) => {
  return function (dispatch) {
    dispatch(getProductList())
    
    return API.get('/user/getProductList/'+id)
      .then( (list) => {
          if(!list.data.err){
            dispatch(getProductListSuccess(list.data.data))
          }
      })

  }
}


export const getProductList = () => {
  return {
    type: actionTypes.GET_PRODUCTS_LIST,
  }
}

export const getProductListSuccess = (data) => {
  return {
    type: actionTypes.GET_PRODUCTS_LIST_SUCCESS,
    data
  }
}
export const clearProductList = () => {
  return {
    type: actionTypes.CLEAR_PRODUCTS_LIST,
  }
}