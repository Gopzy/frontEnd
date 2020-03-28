import React, { Component } from 'react';
import { delectSelectedProduct } from '../action/delectSelectedProduct.action';
import { Button, Label } from 'reactstrap';
import { connect } from 'react-redux';


class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // prodId: ''
        };
    }

    render() {
        // console.log("ProductList>>>>>>>pppppppppppppppppppppppp", this.props);

        const { title, desc, prodId } = this.props;

        const delectProduct = () => {

            const pId = this.props.prodId;
            // console.log("delectproduct called00000000000000000000000000000");
            this.props.delectSelectedProduct(pId);

        }

        return (
            <div>
                <tr>
                    <th>
                        {title}
                    </th>
                    <td>
                        {desc}
                    </td>
                    <Button className="pull-right" color="success" onClick={delectProduct}>delete</Button>
                </tr>
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
        delectSelectedProduct: (pId) => dispatch(delectSelectedProduct(pId))
    };
};
export default connect(
    mapStateProps,
    mapDispatchToProps
)(ProductList);
