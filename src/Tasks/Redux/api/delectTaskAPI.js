import axios from "axios";


const delectTaskAPI = async (tId) => {
    console.log("delet tasks api called prodId", tId);

    return await axios.delete("http://localhost:3000/tasks/" + tId)
    // .then((res) => {
    //     console.log("responce", res);
    // })
    // return (
    //     {
    //         "title": "delet product",
    //         "desc": "AAAAAAAA",
    //         "prise": 11111
    //     }
    // )

}

export default delectTaskAPI;