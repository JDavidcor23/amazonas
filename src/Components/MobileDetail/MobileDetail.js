import React from 'react';
import { ConatinerMobile } from "./StyledMobileDetail";
import {
    ContainerPrice,
    Moneda,
  } from "../../Components/CardsProducts/StyledCardsProducts";
import {ButtoYellow, ButtoOrange} from '../../containers/AllDetails/StyledAllDetails'

const MobileDetail = ({product}) => {
    const [img, setImg] = React.useState(product.img1)
    const ChangeImg = (img) =>{
        setImg(img)
    }
    return (
        <ConatinerMobile>
            <h2>{product.name}</h2>
            <img
                src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1640918571/amazzonas/wgxk71q9xwrd1ifoldfj.png"
                alt="estrellas"
                width="20%"
                />
            <img src={img} alt="" style={{marginTop:"10px", width:"70%"}}/>
            <div style={{ width: "80%", display: "flex", justifyContent: "center", marginTop:"10px" }}>
                <img
                src={product.img1}
                onMouseOver={()=>ChangeImg(product.img1)}
                alt=""
                width="80px"
                style={{ margin: "0 10px" }}
                />
                <img
                src={product.img2}
                onMouseOver={()=>ChangeImg(product.img2)}
                alt=""
                width="80px"
                style={{ margin: "0 10px" }}
                />
                <img
                src={product.img3}
                onMouseOver={()=>ChangeImg(product.img3)}
                alt=""
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
            <p style={{ width: "90%" }}>{product.about}</p>
        </ConatinerMobile>
    );
};

export default MobileDetail;