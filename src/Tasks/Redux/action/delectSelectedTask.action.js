import delectTaskAPI from "../api/delectTaskAPI";
import { DELETE_TASK, DELETE_TASK_SUCCESS, DELETE_TASK_FAILED } from "../../types";
import { FETCH_TASKS_SUCCESS } from "../../types";
import getTasksAPI from "../api/getTasks.API";



const delectSelectedTask = (tId) => {
    return dispatch => {
        dispatch({
            type: DELETE_TASK
        });
        delectTaskAPI(tId).then(res => {
            // console.log("RES--------->>>>>>>>>>", res);
            if (res) {
                dispatch({
                    type: DELETE_TASK_SUCCESS,
                    deleteData: res
                });
                dispatch(
                    getTasksAPI().then(res => {
                        // console.log("RES from delete segggggggg--------->>>>>>>>>>", res);

                        dispatch({
                            type: FETCH_TASKS_SUCCESS,
                            tasksData: res
                        });
                    })
                );

            }

        }).catch(error => {
            dispatch({
                type: DELETE_TASK_FAILED,
                error
            })
        })
    }
}
export { delectSelectedTask };