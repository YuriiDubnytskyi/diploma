import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    productsLike:[
        
    ],
    loading:false,
    err:false,
    errMess:'',
    success:false,
};

const productList = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_PRODUCTS_LIKE_INITIAL:
            return updateObject(state,{
                loading:true
            })
        case actionTypes.GET_PRODUCTS_LIKE_FAIL:
            return updateObject(state,{
                err:true,
                errMess:action.mess,
                loading:false,
                success:false,
            })
        case actionTypes.GET_PRODUCTS_LIKE_SUCCESS:
            return updateObject(state,{
                success:true,
                loading:false,
                productsLike:[...action.data]
            })
        default:
            return state;
    }
};

export default productList;