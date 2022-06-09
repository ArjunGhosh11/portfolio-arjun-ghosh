import React from 'react';
import Header from '../Shared/Header/Header';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='bg-dark'>
            <Header></Header>
            <Banner></Banner>
        </div>
    );
};

export default Home;