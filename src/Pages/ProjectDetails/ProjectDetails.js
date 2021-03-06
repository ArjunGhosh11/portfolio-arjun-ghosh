import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const ProjectDetails = () => {
    // const [projects, setProjects] = useState([]);
    // const [project, setProject] = useState({});
    const index = useParams().index;
    // console.log(index)
    // useEffect(() => {
    //     fetch('https://raw.githubusercontent.com/ArjunGhosh11/portfolio-arjun-ghosh/main/public/projects.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data);
    //             setProjects(data);

    //         })
    // }, []);

    const projects = [
        {
            "index": 0,
            "name": "TECH DOWN",
            "liveSite": "https://assignment-11-281bf.firebaseapp.com/",
            "client": "https://github.com/ArjunGhosh11/tech-down-client",
            "server": "https://github.com/ArjunGhosh11/tech-down-server",
            "description": [
                "It is an inventory management website that manages the stocks of different gadgets and devices.",
                " If you want to know about me then click the ABOUT option on the nav bar.",
                "You can login or register to our website by going to the login page. It will send an email verification after you register using email and password.",
                "Inventory management,Manage Items, Add new Item and My Items are protected routes and can only be accessed after you are logged in.",
                "By clicking on the Update Stock button on the home page you can update the quantity of the particular inventory item"
            ],
            "technology": "CSS, JS, React, Firebase,react bootstrap, React Hook Form, React Router, Node JS, Node Express, MongoDB.",
            "img": [
                "https://ghosh-rj11.nimbusweb.me/box/attachment/7065185/55mhvrccn9nis0rlb5p6/83VJHhyUy7hGeBRJ/screenshot-assignment-11-281bf.firebaseapp.com-2022.06.10-12_52_08.png",
                "https://ghosh-rj11.nimbusweb.me/box/attachment/7065218/0l90wfrc7lwa0exflaa3/M8uzQxrpnyu25wAI/screenshot-assignment-11-281bf.firebaseapp.com-2022.06.10-12_55_58.png",
                "https://ghosh-rj11.nimbusweb.me/box/attachment/7065245/ldxuszva3qmpm5tx6yaw/DaR7MXFi3ksavJL4/screenshot-assignment-11-281bf.firebaseapp.com-2022.06.10-12_58_33.png"
            ]
        },
        {
            "index": 1,
            "name": "TECH BUILDER",
            "liveSite": "https://tech-builder-49d52.web.app/",
            "client": "https://github.com/ArjunGhosh11/tech-builder-client",
            "server": "https://github.com/ArjunGhosh11/tech-builder-server",
            "description": [
                "Admin and user have different levels of access in the websites dashboard.",
                "Users can register using email and password or can use a Google account to sign in. ",
                "Users or Admin must sign in to view the dashboard or to place an order. ",
                "Users will be able to manage their orders from the dashboard and add reviews. An admin will be able to add other admins, manage all orders, manage parts, etc."
            ],
            "technology": "JS, React, Firebase, Tailwind, DAISY UI, React Hook Form, React Router, Node JS, Node Express, MongoDB.",
            "img": [
                "https://ghosh-rj11.nimbusweb.me/box/attachment/7065849/y3dmfxnil6z8b9lb86sh/JQAFcadJD83ikYhH/screenshot-tech-builder-49d52.web.app-2022.06.10-14_29_21.png",
                "https://ghosh-rj11.nimbusweb.me/box/attachment/7065861/k6xxe9wbd0c1omvur9r5/MJhXe8lhR1f8Y5hg/screenshot-tech-builder-49d52.web.app-2022.06.10-14_31_28.png",
                "https://ghosh-rj11.nimbusweb.me/box/attachment/7065872/k4bielkoe5u67icwvsqn/baZ4K9Ubi6b3UrQy/screenshot-tech-builder-49d52.web.app-2022.06.10-14_33_22.png"
            ]
        },
        {
            "index": 2,
            "name": "MEMORIES",
            "liveSite": "https://assignment-10-f82c0.web.app/",
            "client": "https://github.com/ArjunGhosh11/memories",
            "server": "unavailable",
            "description": [
                "It is a website of an independent service provider catering to people who need photo shoot services.",
                "Our home page clearly shows our services and you can choose any of the three services we are providing.",
                "The Blogs page as the answer to your question. If you want to know about me then click the ABOUT option on the nav bar.",
                "You can login to our website by going to the login page",
                "If it is your first time, you can also register in by clicking the link on the login page which will redirect you to the registration page.",
                "And If you want to book any service then click the proceed to check out button , it will take you to the checkout page"
            ],
            "technology": "HTML, CSS, JS, React, Firebase,react bootstrap, React Hook Form, React Router.",
            "img": [
                "https://ghosh-rj11.nimbusweb.me/box/attachment/7065886/0d5a0b86o36tspaat116/l84LYJKMhFAEpROV/screenshot-assignment-10-f82c0.web.app-2022.06.10-14_35_15.png",
                "https://ghosh-rj11.nimbusweb.me/box/attachment/7065900/uh2ccqni48s3e39oq0gh/8YBKgzJ6wfGbsFM7/screenshot-assignment-10-f82c0.web.app-2022.06.10-14_37_06.png",
                "https://ghosh-rj11.nimbusweb.me/box/attachment/7065908/vcr6qs4fu9g3q03cuusx/iV04LPJENGp9wfpc/screenshot-assignment-10-f82c0.web.app-2022.06.10-14_38_15.png"
            ]
        }
    ]

    // useEffect(() => {
    //     setProject(projects[index])
    //     console.log(project);
    // }, [projects])

    // if (!projects) {
    //     return <p>Loading</p>
    // }
    const { name, server, liveSite, client, description, technology, img } = projects[index];


    return (
        <div className='container mx-auto mt-10'>
            <h2 className='font-bold text-3xl text-center'>{name}</h2>
            <div className='flex justify-around m-10'>
                <a href={liveSite} target="_blank"><button className='btn btn-accent rounded-3xl px-5 '>LIVE SITE</button></a>
                <a href={client} target="_blank" rel="noopener noreferrer"><button className='btn btn-accent rounded-3xl px-5 '>CLIENT SIDE</button></a>
                {
                    (server === "unavailable") ? "" : <a href={server} target="_blank"><button className='btn btn-accent rounded-3xl px-5 '>SERVER SIDE</button></a>
                }
            </div>
            <div className='container lg:mx-20'>
                <h4 className='text-xl mx-10 text-primary'>PROJECT DETAILS:</h4>
                <ul className='my-5 mx-10'>
                    {description?.map(point => <li>={point}</li>)}
                </ul>
                <h4 className='text-xl text-primary mx-10'>TECHNOLOGIES USED:</h4>
                <p className='mx-10'>{technology}</p>
            </div>
            <div className='w-90  flex justify-center flex-col gap-5 mt-10'>
                {
                    img.map(i => <img className='w-90 lg:w-[1000px] lg:mx-auto' alt='' src={i}></img>)
                }
            </div>
        </div>
    );
};

export default ProjectDetails;