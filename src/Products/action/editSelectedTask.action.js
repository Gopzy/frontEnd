import getProductsAPI from "../api/getProduct.API";
import { EDIT_TASK, TASK_SUCCESS, EDIT_TASK_FAILED } from "../../types";
import edittaskAPI from "../api/edittask.API";
import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILED } from "../../types";

const editSelectedtask = (obj) => {
    console.log("edit action called fffffffffffffffffffffffffffffffffffffffffffffff");

    return dispatch => {
        dispatch({
            type: EDIT_TASK
        });
        edittaskAPI(obj).then(res => {
            // console.log("RES--------->>>>>>>>>>", res);
            if (res) {
                dispatch({
                    type: TASK_SUCCESS,
                    editData: res
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
                type: EDIT_TASK_FAILED,
                error
            })
        })
    }
}
export { editSelectedtask };