import React from 'react';
import { useNavigate } from 'react-router-dom';
import project1 from '../../images/techDownBG.png';
import project2 from '../../images/techBuilderBG.png';
import project3 from '../../images/memoriesBG.png';
const MyProjects = () => {
    const navigate = useNavigate();
    const handleOnClick = index => {
        const url = `/myProjects/${index}`
        navigate(url);
    }
    return (
        <div id='myProjects'>
            <h2 className='lg:text-5xl text-4xl font-bold text-center text-primary'>MY PROJECTS</h2>
            <div className='flex justify-center pl-5 flex-col mx-auto gap-5 mt-10 lg:flex-row'>
                <div class="card w-96 bg-accent rounded-2xl shadow-xl border- image-full">
                    <figure><img src={project1} alt="Shoes" /></figure>
                    <div class="card-body">

                        <div class="card-actions flex-col justify-center items-center mt-7 ">
                            <h2 class="text-xl font-bold text-primary">Tech Down</h2>
                            <button onClick={() => handleOnClick(0)} class="btn btn-accent text-neutral text-bold"><a target='_blank'>Details</a></button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-white rounded-2xl shadow-xl border- image-full">
                    <figure><img src={project2} alt="Shoes" /></figure>
                    <div class="card-body">

                        <div class="card-actions flex-col justify-center items-center mt-7 ">
                            <h2 class="text-xl font-bold text-primary">Tech Builder</h2>
                            <button onClick={() => handleOnClick(1)} class="btn btn-accent text-neutral text-bold"><a>Details</a></button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-accent rounded-2xl shadow-xl border- image-full">
                    <figure><img src={project3} alt="Shoes" /></figure>
                    <div class="card-body">

                        <div class="card-actions flex-col justify-center items-center mt-7 ">
                            <h2 class="text-xl font-bold text-primary">Memories</h2>
                            <button onClick={() => handleOnClick(2)} class="btn btn-accent text-neutral text-bold"><a>Details</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;