import React from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Ul,
  Li,
  Logo,
  LiCarrito,
  Carrito,
  Span,
  Button,
  LiInput,
  InputSearch,
  //Responsive Search
  LiResp,
  Form,
  ButtonResp,
} from "./StyledNavbar";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/actionLogin';
const Navbar = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogout = () => {
      dispatch(logout())
      navigate("/login")
  }


  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  React.useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if(user?.uid){
         setIsLoggedIn(true)
        }
        else{
         setIsLoggedIn(false)
        }
    })

 
  }, [setIsLoggedIn])
  return (
    <Nav>
      <Ul>
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
          <p>Elige tu dirección</p>
        </Li>
        <LiInput>
          <form action="">
            <InputSearch type="text" />
            <Button>
              <img
                src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1640461930/amazzonas/vwlwbedkqoyzpt2ht8sr.png"
                alt=""
                style={{ height: "20px", margin:"4px 0 0 0" }}
              />
            </Button>
          </form>
        </LiInput>
        <Link to="/login" style={{textDecoration:"none", color:"white"}}>
          {isLoggedIn ?
          <button onClick={() => handleLogout()}>Logout</button>
          :<Li>Iniciar seción</Li>}
        </Link>
        <Link to="/shopping_cart">
          <LiCarrito>
            <Carrito
              src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1640461930/amazzonas/qxgnae7wozfqx6i01vxy.png"
              alt=""
            />
            <Span>0</Span>
          </LiCarrito>
        </Link>
      </Ul>
      <LiResp>
        <Form action="">
          <input type="text" style={{ 
            width: "80%",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px", }} />
          <ButtonResp
          >
            <img
              src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1640461930/amazzonas/vwlwbedkqoyzpt2ht8sr.png"
              alt=""
              style={{ height: "20px", margin:"4px 0 0 0" }}
            />
          </ButtonResp>
        </Form>
      </LiResp>
    </Nav>
  );
};

export default Navbar;
