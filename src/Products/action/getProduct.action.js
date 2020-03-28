import getProductsAPI from "../api/getProduct.API";
import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILED } from "../../types";



const getProducts = () => {
    return dispatch => {
        dispatch({
            type: FETCH_PRODUCTS
        });
        getProductsAPI().then(res => {
            console.log("RES--------->>>>>>>>>>", res);

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





// const getProducts = () => {
//     console.log("get products action getting called");

//     getProductsAPI().then(res => {
//         console.log("Responce ID----------->>>>>>>>>>>>>", res)

//         // let products = res.title;
//         // localStorage.setItem('products', JSON.stringify(products));
//     })

//     // return dispatch => {
//     //     dispatch({
//     //         type: FETCH_PRODUCTS
//     //     });
//     //     getProductsAPI().then(res => {
//     //         console.log("Responce----------->>>>>>>>>>>>>", res)

//     //storing permission/authorities in localstore
//     // let permissions = res.data.authorities.permissions
//     // console.log("--------------------->>>>>", permissions);
//     // localStorage.setItem('permissions', JSON.stringify(permissions));

//     // dispatch({
//     //     type: FETCH_AUTHORITIES_SUCCESS,
//     //     authoritesData: res
//     // });
//     //     })
//     // }
// }
// export { getProducts };