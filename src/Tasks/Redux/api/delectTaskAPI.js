import axios from "axios";


const delectTaskAPI = async (tId) => {
    console.log("delet tasks api called prodId", tId);

    return await axios.delete("http://localhost:3000/tasks/" + tId)
}

export default delectTaskAPI;