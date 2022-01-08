import {Routes, Route, Navigate
} from 'react-router-dom';
import Sell from '../Pages/Sell/Sell';
import ShoppingCart from '../Pages/ShoppingCart/ShoppingCart';
import Detail from '../Pages/Detail/Detail';


const DashboardRoutes = () => {
    return (
        <Routes>
            <Route path="/detail" element={<Detail/>}/>
            <Route path="/sell" element={<Sell/>}/>
            <Route path="/shopping_cart" element={<ShoppingCart/>}/>
            <Route path='*' element={<Navigate to="/" />} />
        </Routes>
    );
};

export default DashboardRoutes;
