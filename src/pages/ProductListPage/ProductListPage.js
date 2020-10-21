import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ListProducts from '../../components/ListProducts/ListProducts';
import ProductItem from '../../components/ProductItem/ProductItem';
import { actFetchProductsRequest, actDeleteProductRequest } from '../../actions/index';

class ProductListPage extends Component {
    componentDidMount(){
        this.props.fetchAllProducts();
    }
    
    onDelete = id => {
        this.props.onDeleteProduct(id);
    }
    showProducts = products => {
        let result = null;

        if(products.length > 0){
            result = products.map((product, index) => {
                return(
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
                    />
                )
            })
        }

        return result;
    }

    render(){
        let { products } = this.props;
        
        return(
            <div>
                <Link to="/product/add" className="btn btn-primary">Add product</Link><hr />
                <ListProducts>
                    {this.showProducts(products)}
                </ListProducts>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        products: state.products
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        fetchAllProducts: _ => {
            dispatch(actFetchProductsRequest());
        },
        onDeleteProduct: id => {
            dispatch(actDeleteProductRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);