import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

let composeEnhancers;
const middleware = [thunk];


composeEnhancers = compose;

const configureStore = rootReducer =>
    createStore(
        rootReducer,
        {},
        composeEnhancers(applyMiddleware(...middleware))
    );

export default configureStore;