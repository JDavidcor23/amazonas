import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearItemsCart } from '../../actions/actionShopingCart';

const FormPay = () => {
    const {items} = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const sumTotal = () =>{
        const reducer = (acumulador, currentValue) => acumulador + (currentValue.price * currentValue.quantity)
        const sum = items.reduce(reducer,0)
        return sum
      }
      const handleSubmit =(e)=>{
          e.preventDefault();
      }
    return (
        <div style={{margin:"0 0 20px 0"}}>
            {items.length === 0 ?
            <img
            style={{ height: "80vh" }}
            src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1642380867/amazzonas/kn0npp51sj0hlcffpdne.jpg"
            alt="404"
            />:
            <form style={{width: "90%", display: "flex",flexDirection:"column",margin:"0 auto", marginTop:"30px", padding:"20px"}} onSubmit={handleSubmit}>
                <h2 style={{margin:"0 0 20px 0"}}>Paga tus productos aquí</h2>
            <div className="form-group">
                <label>Numero de tarjeta</label>
                <input type="number" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                required
                />
            </div>
            <div className="form-group">
                <label >Fecha de Vencimiento</label>
                <input type="date" 
                className="form-control" 
                id="exampleInputPassword1"
                placeholder="dd/mm/aaaa"
                required
                />
            </div>
            <div className="form-group">
                <label >CVC</label>
                <input type="number" 
                className="form-control" 
                id="exampleInputPassword1"
                required
                />
            </div>
            <div className="form-group" style={{display:"flex", flexDirection:"column"}}>
                <p style={{fontSize:"1.8rem"}} >Total:US${sumTotal()}</p>
                <button type="submit" className="btn btn-warning" style={{width:"200px"}} onClick={()=> dispatch(clearItemsCart())}>Pagar</button>
            </div>
            </form>}
        </div>
    );
};

export default FormPay;