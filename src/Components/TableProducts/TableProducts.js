import React from "react";
import { useSelector } from "react-redux";
const TableProducts = () => {
  const { products } = useSelector((store) => store.products);
  return (
    <div style={{ width: "90%", margin: "0 auto", marginTop: "20px" }}>
      {products.map((pro, id) => (
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={pro.url} alt={pro.name} />
          <div className="card-body">
            <h5 className="card-title">{pro.name}</h5>
            <p className="card-text">$us{pro.price}</p>
            <button className="btn btn-primary mr-3">Editar</button>
            <button className="btn btn-danger">ELiminar</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableProducts;
