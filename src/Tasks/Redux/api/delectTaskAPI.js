import axios from "axios";


const delectTaskAPI = async (prodId) => {
    console.log("delet tasks api called prodId", prodId);

    return await axios.delete("http://localhost:3000/products/" + prodId)
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