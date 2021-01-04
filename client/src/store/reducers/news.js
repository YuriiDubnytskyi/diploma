import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    newsNumber:2,
    news:[],
    loading:false,
    err:false,
    errMess:'',
    success:false,
    maxNumber:false
};

const getMaxNumber = (arr) => arr.length === 0 ? true : false

const news = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_NEWS:
            return updateObject(state,{
                loading:true
            })
        case actionTypes.GET_NEWS_FAIL:
            return updateObject(state,{
                err:true,
                errMess:action.mess,
                loading:false,
            })
        case actionTypes.GET_NEWS_SUCCESS:
            return updateObject(state,{
                loading:false,
                news:[...action.data],
            })
        case actionTypes.GET_NEWS_SUCCESS_MORE:
            return updateObject(state,{
                loading:false,
                news:[...state.news,...action.data],
                maxNumber:getMaxNumber(action.data)
            })
        case actionTypes.MORE_NEWS:
            return updateObject(state,{
                newsNumber:state.newsNumber+=2
            
            })
        default:
            return state;
    }
};

export default news;