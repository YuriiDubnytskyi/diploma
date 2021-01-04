import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    user:{
        email:'',
        name:'',
        surname:'',
        gender:'',
        age:0,
        phone:0,
        auth:false,
        likeProducts:[],
        bucketProducts:[],
        id:0,
        emailVerify:false
    },
    loading:false,
    err:false,
    errMess:'',
    success:false,
    loadingLike:false,
    errLike:false,
    errMessLike:'',
    successLike:false,
};


const user = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_USER_SUCCESS:
      return updateObject(state,{
        user:{
            email:action.user.email,
            name:action.user.name,
            phone:action.user.phone,
            age:action.user.age,
            surname:action.user.surname || '',
            gender:action.user.gender || '',
            auth:true,
            likeProducts:action.user.likeProducts,
            bucketProducts:state.user.bucketProducts,
            id:action.user.id,
            success:true,
            emailVerify:action.user.emailVerify
        },
        loading:false,
        err:false,
        errMess:'',
        success:true,
    })
    case actionTypes.ADD_USER_FAIL:
        return updateObject(state,{
            err:true,
            errMess:action.mess,
            loading:false
        })
    case actionTypes.ADD_USER:
        return updateObject(state,{
            loading:true
        })
    case actionTypes.CLEAR_USER:
      return updateObject(state,{
        user:{
            email:'',
            success:false,
            name:'',
            surname:'',
            gender:'',
            age:0,
            phone:'',
            auth:false,
            likeProducts:[],
            bucketProducts:[],
            id:0,
            emailVerify:false
        },
        loading:false,
        err:false,
        errMess:'',
        loadingLike:false,
        errLike:false,
        errMessLike:'',
        successLike:false,
    })
    case actionTypes.ADD_LIKE_PRODUCT:
        return updateObject(state,{
            loadingLike:true
        })
    case actionTypes.ADD_LIKE_PRODUCT_FAIL:
        return updateObject(state,{
            loadingLike:false,
            errMessLike:action.mess,
            errLike:true
        })
        //---------
    case actionTypes.ADD_LIKE_PRODUCT_SUCCESS:
        return updateObject(state,{
            user:{...state.user,likeProducts:action.data},
            loadingLike:false,
            success:true
        })
    case actionTypes.ADD_BUY_PRODUCT:
        return updateObject(state,{
            user:{...state.user, bucketProducts:action.data},
        })
    case actionTypes.CLEAR_BUCKET_USER:
            return updateObject(state,{
                user:{...state.user,bucketProducts:[]
                },               
            })
    default:
      return state;
  }
}

export default user;