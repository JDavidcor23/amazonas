import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {eliminarProductsAsincrono} from '../../actions/actionProducts'
import { useNavigate } from "react-router-dom";

const TableProducts = () => {
  const { products } = useSelector((store) => store.products);
  const { id } = useSelector((store) => store.login);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleEdit = (id) =>{
    const productSelected = products.find(pro => pro.id === id)
    localStorage.setItem("productSelectForEdit",JSON.stringify(productSelected))
    setTimeout(()=>{
      navigate("/edit")
    }, 500 )
  }
  return (
    <div style={{ width: "90%", margin: "0 auto", marginTop: "20px", display:"flex", flexWrap:"wrap", justifyContent:"center" }}>
       {products.map((pro) => (
        <div className="card" style={{ width: "18rem", margin:"10px" }} key={pro.id}>
          <img className="card-img-top" src={pro.url[0]} alt={pro.name} />
          <div className="card-body">
            <h5 className="card-title">{pro.name}</h5>
            <p className="card-text">$us{pro.price}</p>
            <button className="btn btn-primary mr-3" onClick={()=>handleEdit(pro.id)}>Editar</button>
            <button className="btn btn-danger" onClick={()=> dispatch(eliminarProductsAsincrono(pro.name, id))}>ELiminar</button>
          </div>
        </div>
      ))} 
    </div>
  );
};

export default TableProducts;
