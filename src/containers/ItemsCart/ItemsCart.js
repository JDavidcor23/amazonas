import React from "react";
import {
  ContainerPrice,
  Moneda,
} from "../../Components/CardsProducts/StyledCardsProducts";
import { products } from "../../data/products";
import {
  ContainerItems,
  ButtonProcesar,
  ContainerP,
  ContainerItemsP,
  ButtonDelete,
  ImgCart,
} from "./StyledItemsCart";

const ItemsCart = () => {
  return (
    <ContainerItems>
      <ContainerP>
        <h2>Carrito</h2>
        <h4 style={{ marginTop: "10px" }}>
          Subtotal(1 productos):<strong>US$299</strong>
        </h4>
        <ButtonProcesar>Procesar pago</ButtonProcesar>
      </ContainerP>
      <div>
        {products.map((pro) => (
          <ContainerItemsP key={pro.id}>
            <ImgCart src={pro.img1} alt="" />
            <div>
              <h2>{pro.name}</h2>
              <ContainerPrice>
                <p style={{ margin: "0 0 0 20px", fontSize: "1.2rem" }}>
                  <Moneda>us$</Moneda>
                  {pro.price}
                </p>
              </ContainerPrice>
              <p>{pro.about}</p>
              <ButtonDelete>Eliminar</ButtonDelete>
            </div>
          </ContainerItemsP>
        ))}
      </div>
    </ContainerItems>
  );
};

export default ItemsCart;
