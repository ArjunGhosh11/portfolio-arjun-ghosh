import React from 'react';
import pic from '../../images/pic.png';
import './AboutMe.css'
const AboutMe = () => {
    return (
        <div className='about font-bold text-primary mb-20'>
            <h2 className='text-center text-3xl mb-5'>ABOUT ME</h2>
            <div class="hero  bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={pic} alt="" />
                    <div className='flex flex-col justify-center align-middle lg:ml-[300px]'>
                        <p>Hello everyone!!
                            I am Arjun Ghosh, a junior MERN stack web developer from Bangladesh. Currently I am styding at BRAC University in Computer Science and Engineering Department.
                        </p>
                        <p>
                            I love playing with new technologies and learn about them. Spending my time in learning more about technologies everyday make me feel good. Currently I am looking for amazing projects to work on.
                        </p>
                        <p>
                            Currently I am exploring CP and planning on exploring a data science.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;