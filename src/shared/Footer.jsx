import React from 'react';
import  banner_logo from '../assets/images/logo.png'
import { FaFacebookF, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#001931] text-base-100'>
             <div className='container mx-auto px-5 md:px-8 lg:px-12 pt-8 pb-6 md:py-10'>

                 <div className='flex items-center justify-between'>
                    {/* logo  */}
                      <div className='flex items-center gap-2'>
                        <img className='size-8'
                         src={banner_logo} alt="logo" />
                        <h2 className='text-base-100 font-bold'>HERO.IO</h2>
                      </div>

                    {/* social links */}
                      <div>
                        <h1 className='mb-3 text-xl font-semibold'>Social links</h1>
                        <ul className='flex items-center gap-4'>
                            <li className='text-[#001931] bg-base-100 p-1 rounded-full'><FaXTwitter /></li>

                            <li className='text-[#001931] bg-base-100 p-1 rounded-full'><FaLinkedin /></li>

                            <li className='text-[#001931] bg-base-100 p-1 rounded-full'><FaFacebookF/></li>

                        </ul>
                      </div>

                 </div>
                 
                 <p className='text-center mt-10'>
                    Copyright © 2026 - All right reserved
                 </p>
             </div>

        </div>
    );
};

export default Footer;