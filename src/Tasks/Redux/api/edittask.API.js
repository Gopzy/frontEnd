import axios from "axios";


const edittaskAPI = async (obj) => {

    console.log("edittaskAPI api called", obj);

    return await axios.patch("http://localhost:3000/tasks/" + obj.pId, {

        "title": obj.pName,
        "desc": obj.dName,
        "date": obj.Ddate
    })
}

export default edittaskAPI;