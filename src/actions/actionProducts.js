import {typesproducst} from '../types/types'
import { db } from "../firebase/firebaseConfig";
import { addDoc,collection,getDocs,query,where} from "@firebase/firestore";
//  async
export const registroProductsAsincrono =(product)=>{
    return(dispatch)=>{
        addDoc(collection(db, "products"), product)
        .then(resp =>{
            dispatch(registroProductsSincrono(product))
            dispatch(listarProductAsincrono())
        })
        .catch(err =>{
            console.log(err)
        })
    }
}
export const listarProductAsincrono = (id) =>{
    return async(dispatch)=>{
        const q = query(collection(db, "products"), where("uid", "==", id));
        const productList=[];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            productList.push({
                ...doc.data()
            })
        });
        dispatch(listarProductsSincrono(productList))
    }
}

//sincrono
export const eliminarProductsSincrono = (name) =>{
    return{
        type: typesproducst.deleteproduct,
        payload: name
    }
}
export const listarProductsSincrono = (products) =>{
    return{
        type: typesproducst.listproduct,
        payload: products
    }
}

export const registroProductsSincrono = (product) =>{
    return{
        type: typesproducst.registerproduct,
        payload: product
    }
}