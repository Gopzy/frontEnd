import getTasksAPI from "../api/getTasks.API";
import { FETCH_TASKS, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILED } from "../../types";



const getTasks = () => {
    return dispatch => {
        dispatch({
            type: FETCH_TASKS
        });
        getTasksAPI().then(res => {
            dispatch({
                type: FETCH_TASKS_SUCCESS,
                tasksData: res
            });
        }).catch(error => {
            dispatch({
                type: FETCH_TASKS_FAILED,
                error
            })
        })
    }
}
export { getTasks };
