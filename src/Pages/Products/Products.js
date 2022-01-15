import React from 'react';
import CardsProducts from '../../Components/CardsProducts/CardsProducts';
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import {Container} from './StyledProducts'
import { useSelector } from "react-redux";
const Products = () => {
    const [product, setProduct] = React.useState("initialState")
    const {productList} = useSelector(state => state.category)
    React.useEffect(() => {
        setProduct(productList)
    }, [product])
    console.log(productList)
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