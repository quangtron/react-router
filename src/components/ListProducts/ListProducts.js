import React, { Component } from 'react';

class ListProducts extends Component {
    render(){
        return(
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">List Products</h3>
                </div>
                <div className="panel-body">
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListProducts;