import React from "react";
import Swal from 'sweetalert2'
import { BottonInput } from "../../Pages/Register/StyledRegister";
import { ContainerFormSell, SellForm } from "./StyledFormSell";
import { fileUpload } from "../../helpers/FileUpload";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { registroProductsAsincrono } from "../../actions/actionProducts";
const FormSell = () => {

  const { id } = useSelector((store) => store.login);
  const { products } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      uid: id,
      url: "",
      name: "",
      description: "",
      category: "",
      city: "",
      country: "",
    },
    onSubmit: (data) => {
      
      const productisAlready = products.some(pro => pro.name === data.name)
      if(productisAlready){
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El producto ya está agregado',
        })
      }else{
        dispatch(registroProductsAsincrono(data));
        Swal.fire({
          icon: 'success',
          title: 'Producto Guardado exitosamente',
          showConfirmButton: false,
          timer: 1500
        })
      }
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
        <h2>Añade productos a vender</h2>
        <label htmlFor="">Pais</label>
        <input
          type="text"
          className="form-control"
          name="country"
          required
          onChange={formik.handleChange}
        />
        <label htmlFor="">Ciudad</label>
        <input
          type="text"
          className="form-control"
          name="city"
          required
          onChange={formik.handleChange}
        />
        <label htmlFor="">Nombre del producto</label>
        <input
          type="text"
          className="form-control"
          name="name"
          required
          onChange={formik.handleChange}
        />
        <label htmlFor="">Precio</label>
        <input
          type="number"
          className="form-control"
          name="price"
          required
          onChange={formik.handleChange}
        />
        <label htmlFor="">Categoria</label>
        <div className="input-group mb-3">
          <select
            className="custom-select"
            required
            name="category"
            defaultValue={'DEFAULT'}
            onChange={formik.handleChange}
          >
            <option value="DEFAULT" disabled>Selecciona</option>
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
          required
          onChange={formik.handleChange}
        ></textarea>
        <BottonInput type="submit" style={{ marginTop: "20px" }}>
          Enviar
        </BottonInput>
      </SellForm>
    </ContainerFormSell>
  );
};

export default FormSell;