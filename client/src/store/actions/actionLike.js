import * as actionTypes from "./actionTypes";
import API from "./../../API/API";
import { deleteProductLikeUser } from "./actionsUser";

export const fetchGetProductsLike = (data) => {
    return function (dispatch) {
        dispatch(getProductsLikeInitial());

        return API.post("/user/getProductsLike", { ids: data }).then((products) => {
            if (products.data.err) {
                dispatch(getProductsLikeFail(products.data.errMess));
            } else {
                dispatch(getProductsLikeSuccess(products.data.data));
            }
        });
    };
};

export const getProductsLikeInitial = () => {
    return {
        type: actionTypes.GET_PRODUCTS_LIKE_INITIAL,
    };
};
export const getProductsLikeFail = (mess) => {
    return {
        type: actionTypes.GET_PRODUCTS_LIKE_FAIL,
        mess,
    };
};
export const getProductsLikeSuccess = (data) => {
    return {
        type: actionTypes.GET_PRODUCTS_LIKE_SUCCESS,
        data,
    };
};

export const removeLikeProduct = (data, id) => {
    return function (dispatch) {
        dispatch(getProductsLikeInitial());

        return API.put("/user/removeProductLike", { data, id }).then((products) => {
            if (products.data.err) {
                dispatch(getProductsLikeFail(products.data.errMess));
            } else {
                dispatch(deleteProductLikeUser(products.data.data.likeProducts));
                dispatch(fetchGetProductsLike(products.data.data.likeProducts));
            }
        });
    };
};
