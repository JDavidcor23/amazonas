import React from 'react';
import { BottonInput } from "../../Pages/Register/StyledRegister";
import { ContainerFormSell, SellForm } from "../FormSell/StyledFormSell";
import { fileUpload } from "../../helpers/FileUpload";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import {getProductForEdit } from '../../actions/actionProducts';
import {  useNavigate } from 'react-router-dom';

const FormEdit = () => {
  const navigate = useNavigate()
  const { id } = useSelector((store) => store.login);
  const productSelected =JSON.parse(localStorage.getItem("productSelectForEdit"))
    const formik = useFormik({
        initialValues: {
          id: productSelected.id,
          uid: id,
          url: productSelected.url,
          name: productSelected.name,
          description: productSelected.description,
          category: productSelected.category,
          city: productSelected.city,
          country: productSelected.country,
          price:productSelected.price
        },
        onSubmit: (data) => {
          getProductForEdit(productSelected.id, data)
          alert("Producto guardado con exito")
          setTimeout(()=>{
            navigate("/sell")
          }, 500)
        },
      });
      const handlePictureClick = () => {
        document.querySelector("#fileSelector").click();
      };
      
      const handleFileChanged = (e) => {
        const url = []
        for(let i = 0; i < 3; i++){
          fileUpload(e.target.files[i])
          .then((response) => {
            url.push(response)
            console.log(url);
          })
          .catch((error) => {
            console.log(error.message);
          });
        }
        formik.values.url = url;
      };
    return (
        <ContainerFormSell>
        <SellForm action="" onSubmit={formik.handleSubmit}>
          <h2>Edita yus productos aquí</h2>
          <label htmlFor="">Pais</label>
          <input
            type="text"
            className="form-control"
            name="country"
            value={formik.values.country}
            required
            onChange={formik.handleChange}
          />
          <label htmlFor="">Ciudad</label>
          <input
            type="text"
            className="form-control"
            name="city"
            value={formik.values.city}
            required
            onChange={formik.handleChange}
          />
          <label htmlFor="">Nombre del producto</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formik.values.name}
            required
            onChange={formik.handleChange}
          />
          <label htmlFor="">Precio</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={formik.values.price}
            required
            onChange={formik.handleChange}
          />
          <label htmlFor="">Categoria</label>
          <div className="input-group mb-3">
            <select
              className="custom-select"
              required
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
            >
              <option value="Electrodomesticos">Electrodomesticos</option>
              <option value="Muebles">Muebles</option>
              <option value="Hogar y Cocina">Hogar y Cocina</option>
              <option value="Juguetes">Juguetes</option>
              <option value="Ropa">Ropa</option>
              <option value="Animales">Animales</option>
              <option value="Gaming">Gaming</option>
            </select>
          </div>
          <label htmlFor="">Selecciona 3 imagenes</label>
          <input
            id="fileSelector"
            type="file"
            className="form-control "
            placeholder="url image"
            name="url"
            style={{ display: "none" }}
            onChange={handleFileChanged}
            multiple
            // required
          />
  
          <button
            className="btn btn-dark"
            onClick={handlePictureClick}
            type="button"
          >
            Imagen
          </button>
          <label htmlFor="">Descripción del producto</label>
          <textarea
            className="form-control"
            rows="3"
            name="description"
            value={formik.values.description}
            required
            onChange={formik.handleChange}
          ></textarea>
          <BottonInput type="submit" style={{ marginTop: "20px" }}>
            Guardar
          </BottonInput>
        </SellForm>
      </ContainerFormSell>
    );
};

export default FormEdit;