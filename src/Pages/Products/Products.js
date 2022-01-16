import React from 'react';
import CardsProducts from '../../Components/CardsProducts/CardsProducts';
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import {Container} from './StyledProducts'
import { useSelector } from "react-redux";
const Products = () => {
    const {productList} = useSelector(state => state.category)
    return (
        <div>
            <Navbar/>
            <Container>
                     {productList.map((product)=>(
                    <CardsProducts product={product} key={product.name}/>
                ))}       
            </Container>  
            <Footer/>
        </div>
    );
};

export default Products;