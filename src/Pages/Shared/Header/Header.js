import React from 'react';
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div class="navbar bg-accent text-neutral ">
            <div class="navbar-start ">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow font-bold bg-accent rounded-box w-52">
                        <li> <Link to='/home'><a>HOME</a></Link> </li>
                        <li> <a href='#myProjects'>MY PROJECTS</a> </li>
                        <li> <a href='#getInTouch'>GET IN TOUCH</a> </li>
                        <li><Link to='/blogs'><a>BLOGS</a></Link></li>
                        <li><Link to='/about'><a>ABOUT</a></Link></li>
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">   <p className='fw-bolder'><span className=' text-xl font-bold '>ARJUN GHOSH</span></p></a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><Link to='/home'><a><p className='font-bold'>HOME</p></a></Link></li>
                    <li><a href='#myProjects'><p className='font-bold'>MY PROJECTS</p></a></li>
                    <li><a href='#getInTouch'><p className='font-bold'>GET IN TOUCH</p></a></li>
                    <li><Link to='/blogs'><a><p className='font-bold'>BLOGS</p></a></Link></li>
                    <li><Link to='/about'><a><p className='font-bold'>ABOUT</p></a></Link></li>
                </ul>
            </div>
            <div class="navbar-end">
                <a target="_blank" href='https://drive.google.com/file/d/1xDYIxW5Yg3IysouS0dFNaJF3JjbJra81/view' className="btn text-primary">DOWNLOAD RESUME</a>
            </div>
        </div>
    );
};

export default Header;