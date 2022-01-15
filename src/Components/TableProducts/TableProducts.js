import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {eliminarProductsAsincrono} from '../../actions/actionProducts'
import {actionTrue} from '../../actions/actionUpdate'
const TableProducts = () => {
  const { products } = useSelector((store) => store.products);
  const { id } = useSelector((store) => store.login);
  const dispatch = useDispatch();
  return (
    <div style={{ width: "90%", margin: "0 auto", marginTop: "20px", display:"flex", flexWrap:"wrap", justifyContent:"center" }}>
       {products.map((pro, index) => (
        <div className="card" style={{ width: "18rem", margin:"10px" }} key={index}>
          <img className="card-img-top" src={pro.url[0]} alt={pro.name} />
          <div className="card-body">
            <h5 className="card-title">{pro.name}</h5>
            <p className="card-text">$us{pro.price}</p>
            <button className="btn btn-primary mr-3" onClick={()=>dispatch(actionTrue(index))}>Editar</button>
            <button className="btn btn-danger" onClick={()=> dispatch(eliminarProductsAsincrono(pro.name, id))}>ELiminar</button>
          </div>
        </div>
      ))} 
    </div>
  );
};

export default TableProducts;
