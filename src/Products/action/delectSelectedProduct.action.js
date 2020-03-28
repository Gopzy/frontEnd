import delectProductAPI from "../api/delectProductAPI";
import { DELETE_PRODUCTS, DELETE_PRODUCTS_SUCCESS, DELETE_PRODUCTS_FAILED } from "../../types";
import getProductsAPI from "../api/getProduct.API";
import { getProducts } from "./getProduct.action";
import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILED } from "../../types";



const delectSelectedProduct = (pId) => {
    return dispatch => {
        dispatch({
            type: DELETE_PRODUCTS
        });
        delectProductAPI(pId).then(res => {
            // console.log("RES--------->>>>>>>>>>", res);
            if (res) {
                dispatch({
                    type: DELETE_PRODUCTS_SUCCESS,
                    deleteData: res
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
                type: DELETE_PRODUCTS_FAILED,
                error
            })
        })
    }
}
export { delectSelectedProduct };