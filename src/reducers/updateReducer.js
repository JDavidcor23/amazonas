import {updateProdutc} from '../types/types'

const initialState = {
    update: false
}

export const updateReducer = (state = initialState, action) =>{
    switch (action.type) {
        case updateProdutc.updatetrue:
            return {
                update: action.payload
            }
    
        case updateProdutc.updatefalse:
            return {
                update: action.payload
            }
    
        default:
            return state;
    }
}