import axios from "axios";


const addProductsAPI = async (pName) => {

    console.log("addProductsAPI api called", pName);

    return await axios.post("http://localhost:3000/products", {

        "title": pName,
        "desc": "drink",
        "prise": 200

    })
    // .then((res) => {
    //     console.log("responce", res);
    // })


}

export default addProductsAPI;