import React from "react";
import { Link } from "react-router-dom";
import { Container, Form, BottonInput } from "../Register/StyledRegister";
import { DivLinearNew, H5, Ir } from "./StyledLogin.js";
import { useDispatch } from "react-redux";
import {useForm } from '../../hooks/useForm';
import { loginGoogle, loginEmailPassword, loginFacebook } from "../../actions/actionLogin";

const Login = () => {
  const dispatch = useDispatch()
  const [ values, handleInputChange ] = useForm({
    email: '',
    password: ''
})

const {email,password} = values;

const handleLogin = (e) => {
   e.preventDefault();
   dispatch(loginEmailPassword(email,password));
}


  const handleGoogle = () => {
    dispatch(loginGoogle());
}
  const handleFacebook= () => {
    dispatch(loginFacebook());
}

  return (
    <Container onSubmit={handleLogin}>
      <img
        src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1640709665/amazzonas/tpifbyb9w3a4bgaqladx.png"
        alt="amazonas logo"
        width="125px"
      />
      <Form action="" onSubmit={handleLogin}>
        <h2 style={{ margin: "10px 0" }}>Iniciar sesión</h2>
        <label htmlFor="" style={{ fontWeight: "bold" }}>
          Correo electrónico
        </label>
        <input style={{ margin: "10px 0" }} 
        type="email"
        placeholder="Enter email"
        name="email"
        value={email}
        multiple
        onChange={handleInputChange}
        />
        <label htmlFor="" style={{ fontWeight: "bold" }}>
          Contraseña
        </label>
        <input type="password" style={{ margin: "10px 0" }} 
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange} />
        <BottonInput style=
        {{ margin: "20px 0" }}
        type="submit">Continuar</BottonInput>
      </Form>
        <BottonInput 
        style={{ margin: "10px 0", background:"white", borderColor:"black", width:"210px"}}
        onClick={handleGoogle}
        ><img src="https://img.icons8.com/color/16/000000/google-logo.png" alt=""/>Iniciar con Google</BottonInput>
        <BottonInput 
        style={{ margin: "10px 0", background:"#3F51B5", color:"white", width:"210px"}}
        onClick={handleFacebook}
        ><img src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1642524270/amazzonas/qijmxlqedsvoe06d3xhp.png" alt="" width="25px"/>Iniciar con Facebook</BottonInput>
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
