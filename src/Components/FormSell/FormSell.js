import React from "react";
import { BottonInput } from "../../Pages/Register/StyledRegister";
import { ContainerFormSell, SellForm } from "./StyledFormSell";
// import "./prueba.css";
const FormSell = () => {
  // const fileImage = (e) => {};
  return (
    <ContainerFormSell>
      <SellForm action="">
        <h2>Añade productos a vender</h2>
        <label htmlFor="">Pais</label>
        <input type="text" />
        <label htmlFor="">Ciudad</label>
        <input type="text" />
        <label htmlFor="">Dirección</label>
        <input type="text" />
        <label htmlFor="">Nombre del producto</label>
        <input type="text" />
        <label htmlFor="">Precio</label>
        <input type="number" />
        <label htmlFor="">Selecciona 3 imagenes</label>
        <div className="file-select" id="src-file1">
          <input type="file" name="src-file1" aria-label="Archivo" />
        </div>
        <label htmlFor="">Descripción del producto</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <BottonInput type="submit" style={{ marginTop: "20px" }}>
          Enviar
        </BottonInput>
      </SellForm>
    </ContainerFormSell>
  );
};

export default FormSell;
