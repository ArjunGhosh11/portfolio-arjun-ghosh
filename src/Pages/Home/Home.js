import React from 'react';
import Header from '../Shared/Header/Header';
import Banner from './Banner';
import ContactMe from './ContactMe/ContactMe';
import MyProjects from './MyProjects';

const Home = () => {
    return (
        <div className='bg-dark'>
            <Header></Header>
            <Banner></Banner>
            <MyProjects></MyProjects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;