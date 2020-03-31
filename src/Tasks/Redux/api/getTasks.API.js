
import axios from "axios";


const getTasksAPI = async () => {
    console.log("api called");

    return await axios.get("http://localhost:3000/tasks")

}

export default getTasksAPI;