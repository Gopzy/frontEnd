
import axios from "axios";


const getProductsAPI = async () => {
    console.log("api called");

    return await axios.get("http://localhost:3000/products")
    // .then((res) => {
    //     console.log("responce", res);
    // })


}

export default getProductsAPI;