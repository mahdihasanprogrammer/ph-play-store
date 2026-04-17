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
           <li> <MyNavLink to="/installedApps"> Installation</MyNavLink></li>
           <li> <MyNavLink to="/dashboard"> Dashboard</MyNavLink></li>
        </>

    return (
    <div className='bg-base-100 shadow-sm '>
        <div className="navbar container mx-auto px-5 md:px-8 lg:px-12">

          <div className="navbar-start">

            <div className="dropdown">
              <div tabIndex="0" role="button" className="btn mr-3 px-0 btn-ghost lg:hidden">
                <AiOutlineMenuUnfold className='text-2xl' />
              </div>

              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-base items-center">
                    {links}
              </ul>
            </div>

            <div className='flex items-center gap-2'>
              <img className='size-8'
                src={banner_logo} alt="logo" />
              <h2 className='text-purple-500 font-bold'>HERO.IO</h2>
            </div>

          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-base items-center">
                {links}
            </ul>
          </div>
          
          <div className="navbar-end">
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