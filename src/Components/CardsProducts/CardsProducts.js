import React from "react";
import { ContainerPrice, Moneda, Cero, LinkCards } from "./StyledCardsProducts";
const CardsProducts = ({ product }) => {
  const guardarLocalStorage = (id) =>{
    localStorage.setItem("detailId", id)
  }
  return (
    <LinkCards to="/detail" onClick={()=> guardarLocalStorage(product.id)}>
      <img src={product.img1} alt={product.name} width="100%" />
      <h6>{product.name}</h6>
      <p>{product.date}</p>
      <img
        src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1640918571/amazzonas/wgxk71q9xwrd1ifoldfj.png"
        alt="estrellas"
        width="30%"
      />
      <ContainerPrice>
        <p>{product.link}</p>
        <p style={{ margin: "0 0 0 20px", fontSize: "1.2rem" }}>
          <Moneda>us$</Moneda>
          {product.price}
          <Cero>00</Cero>
        </p>
      </ContainerPrice>
    </LinkCards>
  );
};

export default CardsProducts;
