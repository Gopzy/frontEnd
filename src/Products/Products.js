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

    componentDidMount() {
        this.props.getProducts();
    }

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
        const dName = e.target.elements.prodesc.value;
        const Ddate = e.target.elements.birthday.value
        const obj = {
            pName,
            dName,
            Ddate
        }
        // localStorage.setItem('obj', JSON.stringify(obj));
        console.log("date %%%%%%%%%%%%%%%%%", Ddate);

        this.props.addProducts(obj);
    }

    render() {
        const prod = this.props.products && this.props.products.productsData ? this.props.products.productsData.data : "";
        // console.log("frontEnd Props-->>>>>>>>>>", prod);

        return (
            <div>
                <p>
                    Shopping cart
               </p>

                <Button onClick={this.getProduct} color="primary">Get All products</Button>

                <p>
                    <GetInput getUser={this.getProd} />
                </p>

                {this.props.products && this.props.products.productsData && this.props.products.productsData.data.map((el, index) => {
                    console.log("elements_____>>>", el);
                    return (
                        <ProductList key={el.index} title={el.title} desc={el.desc} date={el.date} prodId={el.id} />
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
