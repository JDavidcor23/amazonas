import {productList} from '../types/types';
import { db } from "../firebase/firebaseConfig";
import { collection,getDocs,query,where} from "@firebase/firestore";

export const productListASincrono = (category) =>{
    return async(dispatch)=>{
        const q = query(collection(db, "products"), where("category", "==", category));
        const product=[];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            product.push({
                ...doc.data()
            })
        }); 
         dispatch(productListSincrono(product))
    }
}


export const productListSincrono = (products) =>{
    return{
        type: productList.watchproduct,
        payload: products
    }
}