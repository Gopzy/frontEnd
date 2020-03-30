import axios from "axios";


const addTasksAPI = async (obj) => {

    console.log("add tasks api called", obj);

    return await axios.post("http://localhost:3000/tasks", {

        "title": obj.pName,
        "desc": obj.dName,
        "date": obj.Ddate,
        "price": 200

    })
    // .then((res) => {
    //     console.log("responce", res);
    // })


}

export default addTasksAPI;