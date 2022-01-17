import {productList} from '../types/types';
import { db } from "../firebase/firebaseConfig";
import { collection,getDocs} from "@firebase/firestore";

export const productListFilterASincrono = (name, search=false, category="") =>{
    return async(dispatch)=>{
        const product=[];
        const querySnapshot =  await getDocs(collection(db,"products"))
        querySnapshot.forEach((doc) => {
            product.push({
                id :doc.id,
                uid :doc.data().uid,
                description :doc.data().description,
                category :doc.data().category,
                price :doc.data().price,
                url :doc.data().url,
                country :doc.data().country,
                city :doc.data().city,
                name :doc.data().name,
            })
        }); 
         if(search){
             let productSearchched = product.filter(pro => pro.name.toLowerCase().includes(name.search.toLowerCase()))
              dispatch(productListSincrono(productSearchched))
            }else{
             let productSearchched = product.filter(pro => pro.category.toLowerCase().includes(category.toLowerCase()))
              dispatch(productListSincrono(productSearchched))
         }
    }
}


export const productListSincrono = (products) =>{
    return{
        type: productList.watchproduct,
        payload: products
    }
}