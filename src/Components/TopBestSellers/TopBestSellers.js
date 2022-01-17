import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CardsTops } from "./StyledTopBestSellers";

const TopBestSellers = ({ sellers }) => {

  const {productList} = useSelector(state => state.category)
  const navigate = useNavigate()
  const guardarLocalStorage = (product) =>{
    let productID =productList.find(pro => pro.id === product)
     localStorage.setItem("detailId", JSON.stringify(productID))
     setTimeout(()=>{
      navigate("/detail")
     },1000)
  }
  return (
    <CardsTops onClick={()=>guardarLocalStorage(sellers.id)}>
      <img src={sellers.img} alt="" width="100%" />
    </CardsTops>
  );
};

export default TopBestSellers;
