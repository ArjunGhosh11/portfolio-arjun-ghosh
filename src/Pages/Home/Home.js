import React from 'react';
import Banner from './Banner';
import ContactMe from './ContactMe/ContactMe';
import MyProjects from './MyProjects';

const Home = () => {
    return (
        <div className='bg-dark'>
            <Banner></Banner>
            <MyProjects></MyProjects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;