import * as actionTypes from './actionTypes';
import axios from 'axios'

export const logout = () => {
  
  return function (dispatch) {
    dispatch(removeUser())
    return axios.get('/api/auth/signout')
  }
}


export const fetchUserSign = (email,password,name) => {
    
 
    return function (dispatch) {
      dispatch(addUser())
      return axios.post('/api/auth/sign',{email,password,name,username:'q'})
        .then( (user) => {
            if(user.data.err){
              dispatch(addUserFail(user.data.message))
            }else{
              dispatch(addUserSuccess({
                email:user.data.email,
                likeProducts:user.data.likeProducts,
                id:user.data._id,
                gender:user.data.gender,
                name:user.data.name,
                surname:user.data.surname,
                phone:user.data.phone,
                age:user.data.age,
                emailVerify:user.data.emailVerify
              }))
            }
        })

    }
  }
export const fetchUserLogin = (email,password) => {

    return function (dispatch) {
      dispatch(addUser())
      return axios.post('/api/auth/login',{email,password,username:'q'})
        .then( (user) => {
          if(user.data.err){
            dispatch(addUserFail(user.data.message))
          }else{
            dispatch(addUserSuccess({
				        email:user.data.email,
                likeProducts:user.data.likeProducts,
                id:user.data._id,
                gender:user.data.gender,
                name:user.data.name,
                surname:user.data.surname,
                phone:user.data.phone,
                age:user.data.age,
                emailVerify:user.data.emailVerify
			      }))
          }
        })
      
    }
}

export const addUser = () => {
    return {
      type: actionTypes.ADD_USER,
    }
  }
export const addUserFail = (mess) => {
    return {
      type: actionTypes.ADD_USER_FAIL,
      mess
    }
  }
  export const addUserSuccess = (user) => {
    return {
      type: actionTypes.ADD_USER_SUCCESS,
      user
    }
  }
export const removeUser = () => {
    return {
      type: actionTypes.CLEAR_USER,
  
  }
}

export const fetchAddLikeProduct = (id,newLikeProducts) => {
    
    return function (dispatch) {
      dispatch(addLikeProduct())
      return axios.put('/api/user/addProduct',{id,newLikeProducts})
        .then( (user) => {
            if(user.data.err){
              dispatch(addLikeProductFail(user.data.message))
            }else{
              dispatch(addLikeProductrSuccess(user.data.likeProducts))
            }
        })

    }
  }


export const addLikeProduct = () => {
  return {
    type: actionTypes.ADD_LIKE_PRODUCT,
  }
}
export const addLikeProductFail = (mess) => {
    return {
      type: actionTypes.ADD_LIKE_PRODUCT_FAIL,
      mess
    }
  }
export const addLikeProductrSuccess = (data) => {
    return {
      type: actionTypes.ADD_LIKE_PRODUCT_SUCCESS,
      data
    }
}

export const addBuyProduct = (data) => {
  return {
    type: actionTypes.ADD_BUY_PRODUCT,
    data
  }
}

export const clearBucketUser = () => {
  return {
    type: actionTypes.CLEAR_BUCKET_USER,
  }
}