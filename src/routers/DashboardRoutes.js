import {Routes, Route, Navigate
} from 'react-router-dom';
import Sell from '../Pages/Sell/Sell';
import ShoppingCart from '../Pages/ShoppingCart/ShoppingCart';
import Detail from '../Pages/Detail/Detail';
import Edit from '../Pages/Edit/Edit';
import Pay from '../Pages/Pay/Pay';

const DashboardRoutes = () => {
    return (
        <Routes>
            <Route path="/edit" element={<Edit/>}/>
            <Route path="/pay" element={<Pay/>}/>
            <Route path="/detail" element={<Detail/>}/>
            <Route path="/sell" element={<Sell/>}/>
            <Route path="/shopping_cart" element={<ShoppingCart/>}/>
            <Route path='*' element={<Navigate to="/" />} />
        </Routes>
    );
};

export default DashboardRoutes;
