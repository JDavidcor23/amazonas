import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {productListFilterASincrono} from '../../actions/actionProductList'
import {LinkCards} from './StyledCardsCategories'

const CardsCategories = ({ cat }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const sendCategory = (category)=>{
    dispatch(productListFilterASincrono("", false, category))
     setTimeout(()=>{
       navigate("/products")
     },1000)
  } 
  return (
    <LinkCards onClick={()=>sendCategory(cat.title)} style={{cursor:"pointer"}}>
      <h3 style={{padding: "20px 0", fontSize: "1rem"}}>{cat.title}</h3>
      <img src={cat.img} alt={cat.title} style={{width: "100%", height:"90%"}} />
    </LinkCards>
  );
};

export default CardsCategories;
