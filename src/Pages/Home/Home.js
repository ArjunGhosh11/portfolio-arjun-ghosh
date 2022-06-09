import React from 'react';
import Header from '../Shared/Header/Header';
import Banner from './Banner';
import MyProjects from './MyProjects';

const Home = () => {
    return (
        <div className='bg-dark'>
            <Header></Header>
            <Banner></Banner>
            <MyProjects></MyProjects>
        </div>
    );
};

export default Home;