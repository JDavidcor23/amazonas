import React from 'react';
import Categories from '../../containers/Categories/Categories'
import {HomeContainer} from './StyledHome.js'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer';

const Home = () => {
    return (
        <HomeContainer>
            <Navbar/>
            <Categories/>
            <Footer/>
        </HomeContainer>
    );
};

export default Home;