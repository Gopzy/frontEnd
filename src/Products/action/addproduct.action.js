import { FETCH_ADD_PRODUCTS, FETCH_ADD_PRODUCTS_SUCCESS, FETCH_ADD_PRODUCTS_FAILED } from "../../types";
import addProductsAPI from "../api/addProducts.API";
import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILED } from "../../types";
import getProductsAPI from "../api/getProduct.API";



const addProducts = (pName) => {
    return dispatch => {
        dispatch({
            type: FETCH_ADD_PRODUCTS
        });
        addProductsAPI(pName).then(res => {
            // console.log("RES--------->>>>>>>>>>", res);
            if (res) {
                dispatch({
                    type: FETCH_ADD_PRODUCTS_SUCCESS,
                    addPrdData: res
                });
                dispatch(
                    getProductsAPI().then(res => {
                        // console.log("RES from delete segggggggg--------->>>>>>>>>>", res);
                        dispatch({
                            type: FETCH_PRODUCTS_SUCCESS,
                            productsData: res
                        });
                    })
                );
            }

        }).catch(error => {
            dispatch({
                type: FETCH_ADD_PRODUCTS_FAILED,
                error
            })
        })
    }
}
export { addProducts };