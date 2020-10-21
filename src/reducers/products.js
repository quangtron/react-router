import * as types from '../constants/ActionTypes';

var initialState = [];

const findIndex = (products, id) => {
    let result = -1;

    products.forEach((product, index) => {
        if(product.id === id){
            result = index;
        }
    });

    return result;
}

const products = (state = initialState, action) => {
    let { id, product } = action;
    let index = -1;

    switch(action.type){
        case types.FETCH_PRODUCTS:
            state = action.products;
            return [...state];
        case types.DELETE_PRODUCT:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case types.ADD_PRODUCT:
            state.push(product);
            return [...state];
        case types.UPDATE_PRODUCT:
            index = findIndex(state, product.id);
            state[index] = product;
            return [...state];
        default:
            return [...state];
    }
}

export default products;