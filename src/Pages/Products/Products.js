import React from 'react';
import CardsProducts from '../../Components/CardsProducts/CardsProducts';
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import {products} from '../../data/products'
import {Container} from './StyledProducts'
const Products = () => {
    return (
        <div>
            <Navbar/>
            <Container>
                {products.map((product)=>(
                    <CardsProducts product={product} key={product.id}/>
                ))}
            </Container>
            <Footer/>
        </div>
    );
};

export default Products;