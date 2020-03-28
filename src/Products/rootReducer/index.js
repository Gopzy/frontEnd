
import productReducer from "../reducers/product.reducer"

import { combineReducers } from 'redux';

const rootReducer = combineReducers({

    products: productReducer

    //   profileondemand: profielListReducerondemand,
    //   devicedetailsOnDemand: deviceDetailsReducersondemand,

});

export default rootReducer;