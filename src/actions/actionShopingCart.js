import {addShopping} from '../types/types'


export const productListSincrono = (item) =>{
    return{
        type: addShopping.watchproduct,
        payload: item
    }
}