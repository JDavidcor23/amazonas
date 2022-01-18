import React from 'react';
import {  DesktopDiv, Images, ImgSelect, ContainerImages} from "./StyledDesktopDetail";
import { useDispatch } from 'react-redux';
 import ReactImageMagnify from 'react-image-magnify';
 import {setItemCart} from '../../actions/actionShopingCart'
import {ButtoYellow, ButtoOrange} from '../../containers/AllDetails/StyledAllDetails'
import {
    ContainerPrice,
    Moneda,
  } from "../../Components/CardsProducts/StyledCardsProducts";
  const DesktopDetail = ({product}) => {
       const [img, setImg] = React.useState(product.url[0])
       const ChangeImg = (img) =>{
           setImg(img)
       }
       const dispatch = useDispatch()
    return (
    <DesktopDiv>
         <Images>
            <ReactImageMagnify style={{zIndex:"1"}} {...{
            smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                isFluidWidth: false,
                src: img,
                width: 350,
                height: 300
            },
            largeImage: {
                src: img,
                width: 1000,
                height: 1000
            }
            }} /> 
            <p style={{textAling: "center", fontSize:"0.9rem", width:"90%", marginTop:"10px"}}>Pasa el mouse encima de la imagen para aplicar zoom</p>
            <ContainerImages>
                <ImgSelect
                onMouseOver={()=>ChangeImg(product.url[0])}
                src={product.url[0]}
                alt={product.name}
                />
                <ImgSelect
                onMouseOver={()=>ChangeImg(product.url[1])}
                src={product.url[1]}
                alt={product.name}
                />
                <ImgSelect
                onMouseOver={()=>ChangeImg(product.url[2])}
                src={product.url[2]}
                alt={product.name}
                />
            </ContainerImages>
        </Images> 
        <div>
        <h2>{product.name}</h2>
        <ContainerPrice>
            <p
            style={{
                margin: "20px 0 0 20px",
                fontSize: "1.6rem",
                color: "#b12704",
            }}
            >
            <Moneda>us$</Moneda>
            {product.price}
            </p>
        </ContainerPrice>
            <ButtoYellow onClick={()=>dispatch(setItemCart(product))}>Agregar al Carrito</ButtoYellow>
            <ButtoOrange>Comprar ahora</ButtoOrange>
        <h3>Descripción</h3>
        <p style={{ width: "90%" }}>{product.description}</p>
        </div>  
    </DesktopDiv>
    );
};

export default DesktopDetail;