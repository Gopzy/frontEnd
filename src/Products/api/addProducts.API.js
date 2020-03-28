import axios from "axios";


const addProductsAPI = async () => {
    console.log("addProductsAPI api called");

    return await axios.post("http://localhost:3000/products", {

        "title": "pine apple",
        "desc": "drink",
        "prise": 200

    })
    // .then((res) => {
    //     console.log("responce", res);
    // })


}

export default addProductsAPI;