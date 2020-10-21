import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from '../../actions';

class ProductActionPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: false
        }
    }

    componentDidMount(){
        const { match } = this.props;
        if(match){
            let { id } = match.params;
            this.props.onEditProduct(id);
        }
    }
    // static getDerivedStateFromProps(props, state){
    //     const { match, itemEditting } = props;

    //     if(!match){
    //         return null;
    //     }
    //     if(itemEditting.id !== state.id){
    //         return {
    //             id: itemEditting.id,
    //             txtName: itemEditting.name,
    //             txtPrice: itemEditting.price,
    //             chkbStatus: itemEditting.status
    //         };
    //     }

    //     return null;
    // }
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEditting){
            let { itemEditting } = nextProps;
            this.setState({
                id: itemEditting.id,
                txtName: itemEditting.name,
                txtPrice: itemEditting.price,
                chkbStatus: itemEditting.status
            });
        }
    }

    onChange = e => {
        let target = e.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        })
    }
    onSave = e => {
        e.preventDefault();

        let { id, txtName, txtPrice, chkbStatus } = this.state;
        let { history, onAddProduct, onUpdateProduct } = this.props;
        let product = {
            id: id,
            name: txtName,
            price: +txtPrice,
            status: chkbStatus
        }

        if(id !== ''){
            onUpdateProduct(product);
            history.goBack();
        } else {
            onAddProduct(product);
            history.goBack();
        }
    }

    render(){
        let { id, txtName, txtPrice, chkbStatus } = this.state;

        return(
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave} >
                    <legend>{ id === '' ? 'Add Product' : 'Edit Product' }</legend>
                
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" className="form-control" name="txtName" value={txtName} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Price:</label>
                        <input type="number" className="form-control" name="txtPrice" value={txtPrice} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Status:</label>&nbsp;
                        <label>
                            <input type="checkbox" name="chkbStatus" value={chkbStatus} checked={chkbStatus} onChange={this.onChange} /> Available
                        </label>
                    </div>
                    <Link to="/products" className="btn btn-primary">Back</Link>&nbsp;
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        itemEditting: state.itemEditting
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: product => {
            dispatch(actAddProductRequest(product));
        },
        onEditProduct: id => {
            dispatch(actGetProductRequest(id));
        },
        onUpdateProduct: product => {
            dispatch(actUpdateProductRequest(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);