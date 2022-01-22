import React from "react";
import { useNavigate } from "react-router-dom";
import { CardsTops } from "./StyledTopBestSellers";
import { db } from "../../firebase/firebaseConfig";
import {  doc, getDoc} from "@firebase/firestore";
const TopBestSellers = ({ sellers }) => {

  const navigate = useNavigate()

  const guardarLocalStorage =  async(id) =>{
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    localStorage.setItem("detailId", JSON.stringify(docSnap.data()))
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
