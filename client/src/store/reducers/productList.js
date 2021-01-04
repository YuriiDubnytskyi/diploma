import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    products:[],
    productsSearch:[],
    loadingList:false
};

const productList = ( state = initialState, action ) => {
    switch ( action.type ) {
        
        case actionTypes.GET_PRODUCTS_LIST:
            return updateObject(state,{
                loadingList:true
            })
        case actionTypes.GET_PRODUCTS_LIST_SUCCESS:
            return updateObject(state,{
                loadingList:false,
                products:[...action.data]
            })   
        case actionTypes.GET_PRODUCTS_LIST_SEARCH_SUCCESS:
            return updateObject(state,{
                loadingList:false,
                productsSearch:[...action.data]
            })
        case actionTypes.CLEAR_PRODUCTS_LIST:
            return updateObject(state,{
                products:[],
                productsSearch:[],
            })
        default:
            return state;
    }
};

export default productList;