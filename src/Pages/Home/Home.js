import React from 'react';
import Categories from '../../containers/Categories/Categories'
import {HomeContainer} from './StyledHome.js'
const Home = () => {
    return (
        <HomeContainer>
            <Categories/>
        </HomeContainer>
    );
};

export default Home;