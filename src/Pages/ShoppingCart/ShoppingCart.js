import React from 'react';
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import ItemsCart from '../../containers/ItemsCart/ItemsCart';
const ShoppingCart = () => {
    return (
        <div>
            <Navbar/>
            <ItemsCart/>
            <Footer/>
        </div>
    );
};

export default ShoppingCart;