import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Ul,
  Li,
  Logo,
  Span,
  Button,
  LiInput,
  InputSearch,
  //Responsive Search
  LiResp,
  Form,
  ButtonResp,
} from "./StyledNavbar";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/actionLogin";
import { productListFilterASincrono } from "../../actions/actionProductList";
import { useFormik } from "formik";
const Navbar = () => {
  let url = '';
  const {items} = useSelector(state => state.cart)
  const {name} = useSelector(state => state.login)
  const [ubicacion, setUbicacion] = useState('')
  const sumTotal = () =>{
    const reducer = (acumulador, currentValue) => acumulador + currentValue.quantity
    const sum = items.reduce(reducer,0)
    return sum
  }
  useEffect(() => {
   getCoordenadas();
  },)

 const getCoordenadas = () => {
    navigator.geolocation.getCurrentPosition(position => {
     const { latitude, longitude } = position.coords;
     url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&key=AIzaSyDvS3_rBwM7RJYjDOnPzquTpJVlskDs7nI';
     getUbicacion(url);
   });
   
 }

 const getUbicacion = async(endpoint) => {
   const resp = await fetch(endpoint);
   const {results} = await resp.json();
   setUbicacion(results[0].formatted_address)
 }

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  const formik = useFormik({
    initialValues: {
      search: "",
      
    },
    onSubmit: (data) => {
      dispatch(productListFilterASincrono(data, true))
       setTimeout(()=>{
         navigate("/products");
       },2500)
    }
  });
  const sumCirculo = sumTotal()
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  React.useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, [setIsLoggedIn]);
  return (
    <Nav>
      <Ul>
        {/* <DivResp> */}
          <Li>
          <Link to="/">
            <Logo
              src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1640477276/amazzonas/rg1jkqcdlfez0tzh0iej.png"
              alt="amazonas logo"
            />
          </Link>
        </Li>
        <Li>
          <img
            src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1640461930/amazzonas/gwa6jfschtxjq9unwrt8.png"
            alt=""
            height="20px"
          />
          <p style={{width:"150px"}}>
            {
              ubicacion
            }
          </p>

        </Li>
         <LiInput> 
          <form action="" onSubmit={formik.handleSubmit}>
            <InputSearch 
            type="text" 
            name="search"
            onChange={formik.handleChange}
            required
            />
            <Button type="submit">
              <img
                src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1640461930/amazzonas/vwlwbedkqoyzpt2ht8sr.png"
                alt=""
                style={{ height: "20px"}}
              />
            </Button>
          </form>
         </LiInput> 
        {/* </DivResp> */}
          {isLoggedIn ? (
            <div className="dropdown">
              <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{position:"relative"}}>
                  Hola {name}
                  {sumCirculo > 0 &&
                <Span style={{background:"white", color:"#ffc107", padding:"5px",
              borderRadius:"50%"}}>{sumTotal()}</Span>}
                </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button className="dropdown-item" type="button" onClick={() => handleLogout()}>Cerrar sesión</button>
              <Link to="/shopping_cart" style={{textDecoration:"none"}}>
              <button className="dropdown-item" type="button">Carrito de compras
              {sumCirculo > 0 &&
              <span style={{height:"15px", background:"#ffc107", width:"15px", borderRadius:"50%", display:"inline-block", margin:"0 0 0 5px"}}></span>
              } 
              </button>

              </Link>
            </div>
          </div>
          ) : (
            <Link to="/login" style={{textDecoration:"none", color:"white"}}>
              <Li>Iniciar seción</Li>
            </Link>
          )}
        <Link to="/shopping_cart">
        </Link>
      </Ul>
       <LiResp>
        <Form action="" onSubmit={formik.handleSubmit}>
            <input 
            type="text" 
            name="search"
            onChange={formik.handleChange}
            style={{
              width: "80%",
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
              padding: "2px",
              fontSize: "1.1rem",
            }}
          />
          <ButtonResp>
            <img
              src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1640461930/amazzonas/vwlwbedkqoyzpt2ht8sr.png"
              alt=""
              style={{ height: "20px", margin: "4px 0 0 0" }}
            />
          </ButtonResp>
        </Form>
      </LiResp> 
    </Nav>
  );
};

export default Navbar;
