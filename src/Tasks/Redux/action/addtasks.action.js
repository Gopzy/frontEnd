import { FETCH_ADD_TASK, FETCH_ADD_TASK_SUCCESS, FETCH_ADD_TASK_FAILED } from "../../types";
import addTasksAPI from "../api/addTasks.API";
import { FETCH_TASKS_SUCCESS } from "../../types";
import getTasksAPI from "../api/getTasks.API";



const addTasks = (obj) => {
    return dispatch => {
        dispatch({
            type: FETCH_ADD_TASK
        });
        addTasksAPI(obj).then(res => {
            if (res) {
                dispatch({
                    type: FETCH_ADD_TASK_SUCCESS,
                    addtskData: res
                });
                dispatch(
                    getTasksAPI().then(res => {
                        dispatch({
                            type: FETCH_TASKS_SUCCESS,
                            tasksData: res
                        });
                    })
                );
            }
        }).catch(error => {
            dispatch({
                type: FETCH_ADD_TASK_FAILED,
                error
            })
        })
    }
}
export { addTasks };