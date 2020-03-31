import { EDIT_TASK, TASK_SUCCESS, EDIT_TASK_FAILED } from "../../types";
import edittaskAPI from "../api/edittask.API";
import { FETCH_TASKS_SUCCESS } from "../../types";
import getTasksAPI from "../api/getTasks.API";

const editSelectedtask = (obj) => {
    return dispatch => {
        dispatch({
            type: EDIT_TASK
        });
        edittaskAPI(obj).then(res => {
            if (res) {
                dispatch({
                    type: TASK_SUCCESS,
                    editData: res
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
                type: EDIT_TASK_FAILED,
                error
            })
        })
    }
}
export { editSelectedtask };