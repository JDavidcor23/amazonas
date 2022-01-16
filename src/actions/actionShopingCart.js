import {addShopping} from '../types/types'


export const setItemCart = (item) =>{
    return{
        type: addShopping.add_to_cart,
        payload: item
    }
}