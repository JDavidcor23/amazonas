import React from "react";
import Swal from "sweetalert2";

import { useDispatch, useSelector } from "react-redux";
import { clearItemsCart } from "../../actions/actionShopingCart";
import { useNavigate } from "react-router-dom";
import { paySchema } from "../../Validations/payValidation";
const FormPay = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sumTotal = () => {
    const reducer = (acumulador, currentValue) =>
      acumulador + currentValue.price * currentValue.quantity;
    const sum = items.reduce(reducer, 0);
    return sum;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = {
      creditCard: e.target[0].value,
      date: e.target[1].value,
      number: e.target[2].value,
    }
    const isValid = await paySchema.isValid(formData)
    if(isValid){
      dispatch(clearItemsCart());
      Swal.fire({
        icon: "success",
        title: "Transacción realizada correctamente",
        showConfirmButton: false,
        timer: 2000,
      });
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };
  return (
    <div
      style={{ margin: "0 auto", display: "flex", justifyContent: "center" }}
    >
      {items.length === 0 ? (
        <img
          style={{ height: "80vh" }}
          src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1642380867/amazzonas/kn0npp51sj0hlcffpdne.jpg"
          alt="404"
        />
      ) : (
        <form
          style={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
            margin: "0 auto",
            marginTop: "30px",
            padding: "20px",
          }}
          onSubmit={handleSubmit}
        >
          <h2 style={{ margin: "0 0 20px 0" }}>Paga tus productos aquí</h2>
          <div className="form-group">
            <img
              src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1642520839/amazzonas/mswab4bnxalq4zykdzpr.png"
              alt="Visa, Mastercard, American express Logo"
              width="150px"
            />
            <br />
            <label>Numero de tarjeta</label>
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="form-group">
            <label>Fecha de Vencimiento</label>
            <input
              type="date"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="dd/mm/aaaa"
              required
            />
          </div>
          <div className="form-group">
            <label>CVC</label>
            <input
              type="number"
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>
          <div
            className="form-group"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <p style={{ fontSize: "1.8rem" }}>Total:US${sumTotal()}</p>
            <button
              type="submit"
              className="btn btn-warning"
              style={{ width: "200px" }}
              // onClick={() => payProducts()}
            >
              Pagar
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FormPay;
