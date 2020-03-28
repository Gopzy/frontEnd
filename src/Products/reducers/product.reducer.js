import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILED } from "../../types";
// import { FETCH_FALSE } from "./../../../../redux/common/types";
import { STORE_GLOBAL_ERROR } from "../../types";

export default (state = { fetch: false, error: null, productsData: {} }, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return Object.assign({}, state, { fetch: true, error: null });
        case FETCH_PRODUCTS_SUCCESS:
            return Object.assign({}, state, { fetch: false, error: null, productsData: action });
        case STORE_GLOBAL_ERROR:
            return Object.assign({}, state, { fetch: false, error: action.error });
        case FETCH_PRODUCTS_FAILED:
            return Object.assign({}, state, { fetch: false });
        default:
            return state;
    }
}