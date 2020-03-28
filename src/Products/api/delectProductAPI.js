import axios from "axios";


const delectProductAPI = async (prodId) => {
    console.log("delet ProductAPI api called prodId", prodId);

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

export default delectProductAPI;