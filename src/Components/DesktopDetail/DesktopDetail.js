import React from 'react';
import {  DesktopDiv, Images, ImgSelect, ContainerImages} from "./StyledDesktopDetail";
 import ReactImageMagnify from 'react-image-magnify';
import {ButtoYellow, ButtoOrange} from '../../containers/AllDetails/StyledAllDetails'
import {
    ContainerPrice,
    Moneda,
  } from "../../Components/CardsProducts/StyledCardsProducts";
const DesktopDetail = ({product}) => {
    const [img, setImg] = React.useState(product.img1)
    const ChangeImg = (img) =>{
        setImg(img)
    }
    return (
        <DesktopDiv>
        <Images>
            <ReactImageMagnify style={{zIndex:"1"}} {...{
            smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                isFluidWidth: false,
                src: img,
                width: 300,
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
                onMouseOver={()=>ChangeImg(product.img1)}
                src={product.img1}
                alt=""
                />
                <ImgSelect
                onMouseOver={()=>ChangeImg(product.img2)}
                src={product.img2}
                alt=""
                />
                <ImgSelect
                onMouseOver={()=>ChangeImg(product.img3)}
                src={product.img3}
                alt=""
                />
            </ContainerImages>
        </Images>
        <div>
        <h2>{product.name}</h2>
        <img
        src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1640918571/amazzonas/wgxk71q9xwrd1ifoldfj.png"
        alt="estrellas"
        width="20%"
        />
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
        <form action="">
            <select name="select" defaultValue={"DEFAULT"}>
            <option value="DEFAULT" disabled>
                Cant
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            </select>
            <div style={{ margin: "20px 0 20px 0" }}>
            <ButtoYellow>Agregar al Carrito</ButtoYellow>
            <ButtoOrange>Comprar ahora</ButtoOrange>
            </div>
        </form>
        <h3>Descripción</h3>
        <p style={{ width: "90%" }}>{product.about}</p>
        </div>
    </DesktopDiv>
    );
};

export default DesktopDetail;