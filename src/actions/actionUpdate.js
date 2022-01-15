import {updateProdutc} from '../types/types';

export const actionTrue = (id) =>{
    return{
        type:updateProdutc.updatetrue,
        payload:{
            state:true,
            idPorduct:id
        }
    }
}
export const actionFalse = () =>{
    return{
        type:updateProdutc.updatefalse,
        payload:{
            state:false,
            idPorduct:""
        }
    }
}