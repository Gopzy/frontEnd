import React, { Component } from 'react';
import { delectSelectedProduct } from '../action/delectSelectedProduct.action';
import { Button, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { editSelectedtask } from '../action/editSelectedTask.action'


class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // prodId: ''
        };
    }

    render() {
        console.log("ProductList>>>>>>>pppppppppppppppppppppppp", this.props);

        const { title, desc, date, prodId } = this.props;

        const delectProduct = () => {

            const pId = this.props.prodId;
            // console.log("delectproduct called00000000000000000000000000000");
            this.props.delectSelectedProduct(pId);

        }
        const editProduct = (e) => {

            const pName = e.target.elements.editname.value;
            const dName = e.target.elements.editdesc.value;
            const Ddate = e.target.elements.editDate.value;
            const pId = this.props.prodId;
            const obj = {
                pName,
                dName,
                Ddate,
                pId
            }
            console.log("eddddddddddddddddddddddddddddddddittttttt", obj);


            this.props.editSelectedtask(obj);
        }

        return (
            <form onSubmit={editProduct}>
                <table align="center">
                    {title} &nbsp;&nbsp;
                    {desc}&nbsp;&nbsp;
                    {date} &nbsp;&nbsp;
                    <Button className="pull-right" color="success" onClick={editProduct}>edit</Button>
                    &nbsp;
                    <Button className="pull-right" color="success" onClick={delectProduct}>delete</Button>

                    <br></br>
                    {/* <label for="editname">Edit task:</label>
                        <input type="text" name="editname"></input>
                                &nbsp;&nbsp;

                        <label for="editdesc">Edit Discribtion:</label>
                        <input type="text" name="editdesc"></input>
                                &nbsp;&nbsp;

                        <label for="editDate">edit Date:</label>
                        <input type="date" id="birthday" name="editDate"></input>
                                &nbsp;&nbsp;

                        <button type="submit">Submit to edit</button> */}
                </table>
            </form>
            // <div>
            //     <tr>
            //         <th>
            //             {title}
            //         </th>&nbsp;&nbsp;
            //         <td>
            //             {desc}
            //         </td>&nbsp;&nbsp;
            //         <td>
            //             {date}
            //         </td>&nbsp;
            //         <Button className="pull-right" color="success" onClick={editProduct}>edit</Button>
            //         <td>&nbsp;
            //         <Button className="pull-right" color="success" onClick={delectProduct}>delete</Button>
            //         </td>


            //     </tr>
            // </div>
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
        delectSelectedProduct: (pId) => dispatch(delectSelectedProduct(pId)),
        editSelectedtask: (pId) => dispatch(editSelectedtask(pId))
    };
};
export default connect(
    mapStateProps,
    mapDispatchToProps
)(ProductList);
