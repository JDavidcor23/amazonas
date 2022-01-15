import {productList} from '../types/types'

const initialState = {
    productsList: []
}


export const productListReducer = (state = initialState, action) =>{
    switch (action.type) {
        case productList.watchproduct:
            return {
                productList: [...action.payload]
            }
    
        default:
            return state;
    }
}