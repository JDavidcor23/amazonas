import React from 'react';
import FormSell from '../../Components/FormSell/FormSell';
import Navbar from '../../Components/Navbar/Navbar';
import TableProducts from '../../Components/TableProducts/TableProducts';
import { listarProductAsincrono } from "../../actions/actionProducts";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Sell = () => {
    const { id } = useSelector((store) => store.login);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(listarProductAsincrono(id))
      }, [dispatch, id])
    return (
        <div>
            <Navbar/>
            <FormSell/>
            <TableProducts/>
        </div>
    );
};

export default Sell;