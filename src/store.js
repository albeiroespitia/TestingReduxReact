import { createStore, combineReducers } from 'redux';

const initialState = {
    products : [
      { id: 1, name: "Hipster Ultimate", price: 299, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-1.jpg" },
      { id: 2, name: "On Motion Live", price: 99, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-2.jpg" },
      { id: 3, name: "Underground Max", price: 149, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" },
    ]
}

const products = (state=initialState.products,action)=>{
    return state;
}

const cart = (state=[],action) => {
    if(action.type === "ADD_TO_CART"){
        return state.concat(action.product);
    }else if(action.type == "DELETE_FROM_CART"){
        return state.filter(product => product.id !== action.product.id)
    }
    return state;
}


export default createStore(combineReducers({ cart: cart, products: products}));
