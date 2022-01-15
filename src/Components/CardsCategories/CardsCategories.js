import React from "react";
import { useDispatch } from "react-redux";
import {productListASincrono} from '../../actions/actionProductList'
import {LinkCards} from './StyledCardsCategories'

const CardsCategories = ({ cat }) => {
  const dispatch = useDispatch()
  return (
    <LinkCards to="/products"  onClick={()=> dispatch(productListASincrono(cat.title))}>
      <h3 style={{padding: "20px 0", fontSize: "1rem"}}>{cat.title}</h3>
      <img src={cat.img} alt={cat.title} style={{width: "100%", height:"90%"}} />
    </LinkCards>
  );
};

export default CardsCategories;
