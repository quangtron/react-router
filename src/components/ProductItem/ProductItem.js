import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {
    onDelete = id => {
        if(confirm('Are you sure?')){//eslint-disable-line
            this.props.onDelete(id);
        }
    }

    render(){
        let { product, index } = this.props;
        let statusProduct = product.status ? 'available' : 'unavailable';
        let statusClass = product.status ? 'success' : 'warning';
        return(
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label label-${statusClass}`}>
                        {statusProduct}
                    </span>
                </td>
                <td>
                    <Link to={`/product/${product.id}/edit`} className="btn btn-success">Edit</Link>&nbsp;
                    <button type="button" className="btn btn-danger" onClick={() => this.onDelete(product.id)}>Delete</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;