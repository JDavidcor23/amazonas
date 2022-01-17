import React from "react";
import { useSelector } from "react-redux";
import {
  ContainerPrice,
  Moneda,
} from "../../Components/CardsProducts/StyledCardsProducts";
import { useDispatch } from 'react-redux';
import {clearItemsCart, delFromCart} from '../../actions/actionShopingCart'
import {
  ContainerItems,
  ButtonProcesar,
  ContainerP,
  ContainerItemsP,
  ButtonDelete,
  ImgCart,
} from "./StyledItemsCart";
import { useNavigate } from "react-router-dom";

const ItemsCart = () => {
  const navigate = useNavigate()
  const {items} = useSelector(state => state.cart)
  const dispatch = useDispatch()
   const sumTotal = () =>{
     const reducer = (acumulador, currentValue) => acumulador + (currentValue.price * currentValue.quantity)
     const sum = items.reduce(reducer,0)
     return sum
   }
  console.log(items)
    return (
      <ContainerItems>
      {items.length === 0 ?
      <img
      style={{ height: "80vh" }}
      src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1642380867/amazzonas/kn0npp51sj0hlcffpdne.jpg"
      alt="404"
      />
              :
      <ContainerP>
        <h2>Carrito</h2>
        <h4 style={{ marginTop: "10px" }}>
           Subtotal(1 productos):<strong>US${sumTotal()}</strong> 
        </h4>
        <ButtonProcesar onClick={()=>navigate("/pay")}>Procesar pago</ButtonProcesar>
        <ButtonProcesar onClick={()=> dispatch(clearItemsCart())} style={{background:"red", color:"white"}}>Limpiar Carrito</ButtonProcesar>
      </ContainerP>}
      <div>
      {items.length === 0 ?
      <p></p>:
      items.map((pro) => (
        <ContainerItemsP key={pro.name}>
          <ImgCart src={pro.url[0]} alt="" />
          <div>
            <h2>{pro.name}</h2>
            <ContainerPrice>
              <p style={{ margin: "0 0 0 20px", fontSize: "1.2rem" }}>
                <Moneda>us$</Moneda>
                {pro.price} x {pro.quantity} = {pro.price * pro.quantity}
              </p>
            </ContainerPrice>
            <p>{pro.description}</p>
            <ButtonDelete onClick={()=> dispatch(delFromCart(pro.name))} style={{background:"grey", margin:"0 10px 0 0"}}>Eliminar uno</ButtonDelete>
            <ButtonDelete onClick={()=> dispatch(delFromCart(pro.name, true))}>Eliminar todos</ButtonDelete>
          </div>
        </ContainerItemsP>
      ))
      }
      </div>
    </ContainerItems>
  );
};

export default ItemsCart;
