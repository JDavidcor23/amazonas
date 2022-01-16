import React from "react";
import { useSelector } from "react-redux";
import {
  ContainerPrice,
  Moneda,
} from "../../Components/CardsProducts/StyledCardsProducts";
import {
  ContainerItems,
  ButtonProcesar,
  ContainerP,
  ContainerItemsP,
  ButtonDelete,
  ImgCart,
} from "./StyledItemsCart";

const ItemsCart = () => {
  const {items} = useSelector(state => state.cart)
  const sumTotal = () =>{
    const reducer = (acumulador, currentValue) => acumulador + currentValue.price
    const sum = items.reduce(reducer,0)
    return sum
  }
    return (
      <ContainerItems>
      {items.length === 0 ?
      <p></p>:
      <ContainerP>
        <h2>Carrito</h2>
        <h4 style={{ marginTop: "10px" }}>
          Subtotal(1 productos):<strong>US${sumTotal()}</strong>
        </h4>
        <ButtonProcesar>Procesar pago</ButtonProcesar>
      </ContainerP>}
      <div>
      {items.length === 0 ?
      <p>No tienes productos aun</p>:
      items.map((pro) => (
        <ContainerItemsP key={pro.name}>
          <ImgCart src={pro.url[0]} alt="" />
          <div>
            <h2>{pro.name}</h2>
            <ContainerPrice>
              <p style={{ margin: "0 0 0 20px", fontSize: "1.2rem" }}>
                <Moneda>us$</Moneda>
                {pro.price}
              </p>
            </ContainerPrice>
            <p>{pro.description}</p>
            <ButtonDelete>Eliminar</ButtonDelete>
          </div>
        </ContainerItemsP>
      ))
      }
      </div>
    </ContainerItems>
  );
};

export default ItemsCart;
