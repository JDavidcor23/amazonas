import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import { loginReducer } from '../reducers/loginReducer';
import { registerReducer } from '../reducers/registerReducer';
import { registerProductsReducer } from '../reducers/productsReducers';
import { productListReducer } from '../reducers/productListReducer';
import { shopingReducers } from '../reducers/shopingReducers';

const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    products:registerProductsReducer,
    category:productListReducer,
    cart: shopingReducers,

})


export const store = createStore(
    reducers,
    composeEnhancers( 
        applyMiddleware(thunk))
   
)