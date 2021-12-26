import React from "react";
import {
  Nav,
  Ul,
  Li,
  Logo,
  LiCarrito,
  Span,
  SelectOption,
  Button,
  InputSearch,
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
            style={{ height: "30px", padding: "0 10px 0 0" }}
          />
          Elige tu dirección
        </Li>
        <Li>
          <form action="">
            <SelectOption name="select">
              <option value="value1">Value 1</option>
              <option value="value2" selected>
                Value 2
              </option>
              <option value="value3">Value 3</option>
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
        </Li>
        <Li>Iniciar seción</Li>
        <Li>Devoluciones Y Pedidos</Li>
        <LiCarrito>
          <img
            src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1640461930/amazzonas/qxgnae7wozfqx6i01vxy.png"
            alt=""
            style={{ height: "30px" }}
          />
          <Span>0</Span>
        </LiCarrito>
      </Ul>
    </Nav>
  );
};

export default Navbar;
