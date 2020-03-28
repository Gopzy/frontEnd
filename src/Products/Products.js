import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Label } from 'reactstrap';
import getProductsAPI from './api/getProduct.API';
import { getProducts } from './action/getProduct.action';


class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // validateAddedProducts= () => {
    //     this.state.
    // }

    addProduct = () => {
        console.log("Add product action called..........");
        this.props.getProducts();


    }

    render() {
        console.log("frontEnd Props-->>>>>>>>>>", this.props);

        const product = localStorage.getItem("products");
        return (
            <div>
                <p>
                    Shopping cart
               </p>

                <Button onClick={this.addProduct} color="primary">add product</Button>

                <Label>{product}</Label>
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
        getProducts: () => dispatch(getProducts())
    };
};
export default connect(
    mapStateProps,
    mapDispatchToProps
)(Products);

// export default Products;