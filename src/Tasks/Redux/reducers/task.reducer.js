import { FETCH_TASKS, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILED } from "../../types";
import { STORE_GLOBAL_ERROR } from "../../types";

export default (state = { fetch: false, error: null, tasksData: {} }, action) => {
    switch (action.type) {
        case FETCH_TASKS:
            return Object.assign({}, state, { fetch: true, error: null });
        case FETCH_TASKS_SUCCESS:
            return Object.assign({}, state, { fetch: false, error: null, tasksData: action });
        case STORE_GLOBAL_ERROR:
            return Object.assign({}, state, { fetch: false, error: action.error });
        case FETCH_TASKS_FAILED:
            return Object.assign({}, state, { fetch: false });
        default:
            return state;
    }
}