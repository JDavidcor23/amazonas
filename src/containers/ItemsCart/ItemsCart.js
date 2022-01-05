import React from "react";
import {
  ContainerPrice,
  Moneda,
} from "../../Components/CardsProducts/StyledCardsProducts";
import { products } from "../../data/products";
import { ContainerItems, ButtonProcesar, ContainerP } from "./StyledItemsCart";

const ItemsCart = () => {
  return (
    <ContainerItems>
      <ContainerP>
        <h2>Carrito</h2>
        <h4
          style={{ fontSize: "1.5rem", marginTop: "10px", textAlign: "center" }}
        >
          Subtotal(1 productos):<strong>US$299</strong>
        </h4>
        <ButtonProcesar>Procesar pago</ButtonProcesar>
      </ContainerP>
      <div>
        {products.map((pro) => (
          <div key={pro.id}>
            <img src={pro.img1} alt="" />
            <div>
              <h2>{pro.name}</h2>
              <ContainerPrice>
                <p style={{ margin: "0 0 0 20px", fontSize: "1.2rem" }}>
                  <Moneda>us$</Moneda>
                  {pro.price}
                </p>
              </ContainerPrice>
              <p>{pro.about}</p>
              <button>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </ContainerItems>
  );
};

export default ItemsCart;
