import React from "react";
import { Link } from "react-router-dom";
import { Container, Form, BottonInput } from "../Register/StyledRegister";
import { DivLinearNew, H5, Ir } from "./StyledLogin.js";
// import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container>
      <img
        src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1640709665/amazzonas/tpifbyb9w3a4bgaqladx.png"
        alt="amazonas logo"
        width="125px"
      />
      <Form action="">
        <h2 style={{ margin: "10px 0" }}>Iniciar sesión</h2>
        <label htmlFor="" style={{ fontWeight: "bold" }}>
          Correo electrónico
        </label>
        <input type="email" style={{ margin: "10px 0" }} />
        <label htmlFor="" style={{ fontWeight: "bold" }}>
          Contraseña
        </label>
        <input type="password" style={{ margin: "10px 0" }} />
        <BottonInput style={{ margin: "20px 0" }}>Continuar</BottonInput>
      </Form>
      <div style={{ display: "flex" }}>
        <DivLinearNew></DivLinearNew>
        <H5>¿Eres nuevo en Amazonas?</H5>
        <DivLinearNew></DivLinearNew>
      </div>
      <Link to="/register" style={{ textDecoration: "none" }}>
        <Ir>Crea tu cuenta de Amazonas</Ir>
      </Link>
    </Container>
  );
};

export default Login;
