import axios from "axios";


const addProductsAPI = async (obj) => {

    console.log("addProductsAPI api called", obj);

    return await axios.post("http://localhost:3000/products", {

        "title": obj.pName,
        "desc": obj.dName,
        "prise": 200

    })
    // .then((res) => {
    //     console.log("responce", res);
    // })


}

export default addProductsAPI;