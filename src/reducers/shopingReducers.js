import {addShopping} from '../types/types'

const initialState ={
    items:[]
}


export const shopingReducers = (state = initialState, action)=>{
    switch (action.type) {
        case addShopping.add_to_cart:
            return{
                items: [action.payload]
            }
            case addShopping.remove_one_from_cart:
                return{
                    
                }
            case addShopping.remove_all_from_cart:
                return{
                    
                }
            case addShopping.clear_cart:
                return{
    
                }
    
        default:
            return state;
    }
}