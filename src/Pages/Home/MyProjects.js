import React from 'react';
import project1 from '../../images/techDownBG.png';
import project2 from '../../images/techBuilderBG.png';
import project3 from '../../images/memoriesBG.png';
const MyProjects = () => {
    return (
        <div id='myProjects'>
            <h2 className='lg:text-5xl text-4xl font-bold text-center text-primary'>MY PROJECTS</h2>
            <div className='flex justify-center pl-5 flex-col mx-auto gap-5 mt-10 lg:flex-row'>
                <div class="card w-96 bg-accent rounded-2xl shadow-xl border- image-full">
                    <figure><img src={project1} alt="Shoes" /></figure>
                    <div class="card-body">

                        <div class="card-actions flex-col justify-center items-center mt-7 ">
                            <h2 class="text-xl font-bold text-primary">Tech Down</h2>
                            <button class="btn btn-accent text-neutral text-bold"><a target='_blank' href="https://assignment-11-281bf.firebaseapp.com/">LIVE SITE</a></button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-white rounded-2xl shadow-xl border- image-full">
                    <figure><img src={project2} alt="Shoes" /></figure>
                    <div class="card-body">

                        <div class="card-actions flex-col justify-center items-center mt-7 ">
                            <h2 class="text-xl font-bold text-primary">Tech Builder</h2>
                            <button class="btn btn-accent text-neutral text-bold"><a target='_blank' href="https://tech-builder-49d52.web.app/">LIVE SITE</a></button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-accent rounded-2xl shadow-xl border- image-full">
                    <figure><img src={project3} alt="Shoes" /></figure>
                    <div class="card-body">

                        <div class="card-actions flex-col justify-center items-center mt-7 ">
                            <h2 class="text-xl font-bold text-primary">Memories</h2>
                            <button class="btn btn-accent text-neutral text-bold"><a target='_blank' href="https://assignment-10-f82c0.web.app/">LIVE SITE</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;