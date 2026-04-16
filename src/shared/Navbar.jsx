import React from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import banner_logo from '../assets/images/logo.png'
import MyNavLink from './MyNavLink';

const Navbar = () => {

const links =
        <>
           <li> <MyNavLink  to='/' >Home</MyNavLink></li>
           <li> <MyNavLink to='/apps'>Apps</MyNavLink></li>
           <li> <MyNavLink className="btn btn-primary" to="/installedApps"> Installation</MyNavLink></li>
        </>

    return (
    <div className='bg-base-100 shadow-sm '>
        <div class="navbar container mx-auto px-5 md:px-8 lg:px-12">
          <div class="navbar-start">
            <div class="dropdown">
              <div tabindex="0" role="button" class="btn mr-3 px-0 btn-ghost lg:hidden">
                <AiOutlineMenuUnfold className='text-2xl' />
              </div>
              <ul
                tabindex="-1"
                class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-base items-center">
                    {links}
              </ul>
            </div>
            <img className='size-8'
             src={banner_logo} alt="logo" />
          </div>
          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1 text-base items-center">
                {links}
            </ul>
          </div>
          
          <div class="navbar-end">
                <button 
                className='btn bg-purple-600 text-base-100 font-semibold md:text-base'>
                  <FaGithub className='md:text-xl' />  Contribute
                </button>
          </div>
        </div>
    </div>
    );
};

export default Navbar;