
import taskReducer from "../reducers/task.reducer"

import { combineReducers } from 'redux';

const rootReducer = combineReducers({

    tasks: taskReducer

});

export default rootReducer;