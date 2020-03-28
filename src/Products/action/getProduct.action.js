import getProductsAPI from "../api/getProduct.API";
import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILED } from "../../types";



const getProducts = () => {
    return dispatch => {
        dispatch({
            type: FETCH_PRODUCTS
        });
        getProductsAPI().then(res => {
            // console.log("RES--------->>>>>>>>>>", res);

            dispatch({
                type: FETCH_PRODUCTS_SUCCESS,
                productsData: res
            });
        }).catch(error => {
            dispatch({
                type: FETCH_PRODUCTS_FAILED,
                error
            })
        })
    }
}
export { getProducts };
