import {typesproducst} from '../types/types'

const initialState = {
    products: []
}

export const registerProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesproducst.registerproduct:
            return {
                products: [action.payload]
            }
        case typesproducst.listproduct:
            return {
                products: [...action.payload]
            }
        case typesproducst.deleteproduct:
            return {
                products: state.employees.filter(emp => emp.name !== action.payload)
            }
        default:
            return state;
    }
}