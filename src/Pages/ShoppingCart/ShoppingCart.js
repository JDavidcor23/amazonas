import React from 'react';
import Navbar from '../../Components/Navbar/Navbar'
import ItemsCart from '../../containers/ItemsCart/ItemsCart';
const ShoppingCart = () => {
    return (
        <div>
            <Navbar/>
            <ItemsCart/>
        </div>
    );
};

export default ShoppingCart;