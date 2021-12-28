import React from "react";
import {
  Nav,
  Ul,
  Li,
  Logo,
  LiCarrito,
  Carrito,
  Span,
  SelectOption,
  Button,
  LiInput,
  InputSearch,
  //Responsive Search
  LiResp,
  Form,
  SelectResp,
} from "./StyledNavbar";
const Navbar = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <Logo
            src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1640477276/amazzonas/rg1jkqcdlfez0tzh0iej.png"
            alt="amazonas logo"
          />
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
            <SelectOption name="select" defaultValue={"DEFAULT"}>
              <option value="DEFAULT" disabled>
                Categorias
              </option>
              <option value="1">Mr</option>
              <option value="2">Mrs</option>
              <option value="3">Ms</option>
            </SelectOption>
            <InputSearch type="text" />
            <Button>
              <img
                src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1640461930/amazzonas/vwlwbedkqoyzpt2ht8sr.png"
                alt=""
                style={{ height: "20px" }}
              />
            </Button>
          </form>
        </LiInput>
        <Li>Iniciar seción</Li>
        <LiCarrito>
          <Carrito
            src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1640461930/amazzonas/qxgnae7wozfqx6i01vxy.png"
            alt=""
          />
          <Span>0</Span>
        </LiCarrito>
      </Ul>
      <LiResp>
        <Form action="">
          <SelectResp name="select" defaultValue={"DEFAULT"}>
            <option value="DEFAULT" disabled>
              Categorias
            </option>
            <option value="1">Mr</option>
            <option value="2">Mrs</option>
            <option value="3">Ms</option>
          </SelectResp>
          <input type="text" style={{ width: "70%" }} />
          <button
            style={{
              width: "10%",
              border: "none",
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
              background: "#febd69",
            }}
          >
            <img
              src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1640461930/amazzonas/vwlwbedkqoyzpt2ht8sr.png"
              alt=""
              style={{ height: "20px" }}
            />
          </button>
        </Form>
      </LiResp>
    </Nav>
  );
};

export default Navbar;
