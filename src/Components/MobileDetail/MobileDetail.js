import React from 'react';
import { ConatinerMobile } from "./StyledMobileDetail";
import {
    ContainerPrice,
    Moneda,
  } from "../../Components/CardsProducts/StyledCardsProducts";
import {ButtoYellow, ButtoOrange} from '../../containers/AllDetails/StyledAllDetails'

const MobileDetail = ({product}) => {
     const [img, setImg] = React.useState(product.url[0])
     const ChangeImg = (img) =>{
         setImg(img)
     }
    return (
        <ConatinerMobile>
            <h2 style={{width:"90%", textAlign:"center", marginTop:"10px"}}>{product.name}</h2>
            <img
                src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1640918571/amazzonas/wgxk71q9xwrd1ifoldfj.png"
                alt="estrellas"
                width="20%"
                />
            <img src={img} alt="" style={{marginTop:"10px", width:"70%"}}/>
            <div style={{ width: "80%", display: "flex", justifyContent: "center", marginTop:"10px" }}>
                <img
                onMouseOver={()=>ChangeImg(product.url[0])}
                src={product.url[0]}
                alt={product.name}
                width="80px"
                style={{ margin: "0 10px" }}
                />
                <img
                onMouseOver={()=>ChangeImg(product.url[1])}
                src={product.url[1]}
                alt={product.name}
                width="80px"
                style={{ margin: "0 10px" }}
                />
                <img
                onMouseOver={()=>ChangeImg(product.url[2])}
                src={product.url[2]}
                alt={product.name}
                width="80px"
                style={{ margin: "0 10px" }}
                />
            </div>
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
            <p style={{ width: "90%" }}>{product.description}</p> 
        </ConatinerMobile>
    );
};

export default MobileDetail;