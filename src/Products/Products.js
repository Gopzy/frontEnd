import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Label } from 'reactstrap';
import getProductsAPI from './api/getProduct.API';
import { getProducts } from './action/getProduct.action';
import { Table } from "react-bootstrap";
import ProductList from './components/productList';
import { addProducts } from './action/addproduct.action';



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
                    <input type="text" name="prodname"></input>
                    <Button onClick={this.addProduct} color="primary">Enter products</Button>
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
        addProducts: () => dispatch(addProducts())
    };
};
export default connect(
    mapStateProps,
    mapDispatchToProps
)(Products);
