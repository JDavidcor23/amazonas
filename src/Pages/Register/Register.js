import React from "react";
import { Link } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { useDispatch } from "react-redux";
import {registroEmailPasswordNombre} from '../../actions/actionRegister';
import { Container, Form, BottonInput, LinearDiv } from "./StyledRegister";
const Register = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
      name: '',
      email: '',
      pass1: '',
      pass2: ''
  });
  const { name, email, pass1, pass2 } = formValues;

  const handleRegistro = (e) => {
    e.preventDefault();
    dispatch(registroEmailPasswordNombre(email,pass1,name))
}
  return (
    <Container onSubmit={handleRegistro}>
      <img
        src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1640709665/amazzonas/tpifbyb9w3a4bgaqladx.png"
        alt="amazonas logo"
        width="125px"
      />
      <Form action="">
        <h2 style={{ margin: "10px 0" }}>Crea tu cuenta</h2>
        <label htmlFor="" style={{ fontWeight: "bold" }}>
          Tu nombre
        </label>
        <input type="text" style={{ margin: "10px 0" }} 
        name="name"
        value={name}
        onChange={handleInputChange}
        />
        <label htmlFor="" style={{ fontWeight: "bold" }}>
          Correo electrónico
        </label>
        <input type="email" style={{ margin: "10px 0" }} 
        name="email"
        value={email}
        onChange={handleInputChange}
        />
        <label htmlFor="" style={{ fontWeight: "bold" }}>
          Contraseña
        </label>
        <input type="password" style={{ margin: "10px 0" }} 
        name="pass1"
        value={pass1}
        onChange={handleInputChange}
        />
        <label htmlFor="" style={{ fontWeight: "bold" }}>
          Vuelve a escribir la contraseña
        </label>
        <input type="password" style={{ margin: "20px 0" }} 
        name="pass2"
        value={pass2}
        onChange={handleInputChange}
        />
        <BottonInput type="submit">Crea tu cuenta de amazonas</BottonInput>
        <LinearDiv>
          <p style={{ marginTop: "15px" }}>
            ¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link>
          </p>
        </LinearDiv>
      </Form>
    </Container>
  );
};

export default Register;
