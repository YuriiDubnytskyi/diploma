import * as actionTypes from './actionTypes';
import API from './../../API/API'

export const fetchGetNews = (number,variant) => {
    return function (dispatch) {
      dispatch(getNewsInitial())
      
      return API.get('/user/getNews/'+number)
        .then( (news) => {
            if(news.data.err){
              dispatch(getNewsFail(news.data.errMess))
            }else{
				variant == 1 ?
			  	dispatch(getNewsSuccess(news.data.data))
			  :	dispatch(getNewsSuccessMore(news.data.data))
            }
        })

    }
  }

export const getNewsMore = (number) => {
    return function (dispatch) {
      dispatch(moreNewsNumber())
	  dispatch(fetchGetNews(number,2))
	  
    }
  }

export const getNewsInitial = () => {
    return {
      type: actionTypes.GET_NEWS,
    }
  }
export const moreNewsNumber = () => {
    return {
      type: actionTypes.MORE_NEWS,
    }
  }
export const getNewsFail = (mess) => {
    return {
      type: actionTypes.GET_NEWS_FAIL,
      mess
    }
  }
  export const getNewsSuccess = (data) => {
    return {
      type: actionTypes.GET_NEWS_SUCCESS,
      data
    }
  }

  export const getNewsSuccessMore = (data) => {
    return {
      type: actionTypes.GET_NEWS_SUCCESS_MORE,
      data
    }
  }
