import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Label } from 'reactstrap';
import getProductsAPI from './api/getProduct.API';
import { getProducts } from './action/getProduct.action';
import { Table } from "react-bootstrap";
import ProductList from './components/productList';
import { addProducts } from './action/addproduct.action';
import GetInput from './components/getInput';



class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // validateAddedProducts= () => {
    //     this.state.
    // }

    getProduct = () => {
        console.log("get product action called..........");
        this.props.getProducts();
    }

    addProduct = () => {
        console.log("Add product action called..........");
        this.props.addProducts();


    }
    getProd = (e) => {
        e.preventDefault();
        const pName = e.target.elements.prodname.value;
        // console.log("user name %%%%%%%%%%%%%%%%%", user);
        this.props.addProducts(pName);


    }

    render() {
        const prod = this.props.products && this.props.products.productsData ? this.props.products.productsData.data : "";
        // console.log("frontEnd Props-->>>>>>>>>>", prod);

        // const product = localStorage.getItem("products");
        return (
            <div>
                <p>
                    Shopping cart
               </p>

                <Button onClick={this.getProduct} color="primary">Get All products</Button>

                <p>
                    {/* <GetInput getUser={this.getProd} /> */}
                    <form onSubmit={this.getProd} >
                        <input type="text" name="prodname"></input>
                        <button type="submit">Submit</button>
                    </form>
                </p>


                {this.props.products && this.props.products.productsData && this.props.products.productsData.data.map((el, index) => {
                    // console.log("elements_____>>>", el);
                    return (
                        <ProductList key={el.index} title={el.title} desc={el.desc} prodId={el.id} />
                    )
                })}


            </div>
        );
    }
}

const mapStateProps = ({ products }) => {
    return {
        products: products.productsData


    };
};
const mapDispatchToProps = dispatch => {
    return {
        getProducts: () => dispatch(getProducts()),
        addProducts: (pName) => dispatch(addProducts(pName))
    };
};
export default connect(
    mapStateProps,
    mapDispatchToProps
)(Products);
