import React from 'react';
import banner_img from '../../assets/images/hero.png';
import play_stor_png from '../../assets/images/fi_16076057.png';
import app_store_png from '../../assets/images/app_store.png'

const Banner = () => {
    return (
        <div className='container mx-auto px-5 md:px-8 lg:px-12 pt-10 md:pt-15 space-y-10 text-center'>

            <div className='space-y-4'>
                <h2 className='font-bold text-4xl md:text-6xl'>We Build <br />
                    <span className='text-purple-500'>Productive </span> Apps
                </h2>
                <p className='md:w-3/4 lg:w-2/3 mx-auto text-gray-500 font-medium'>
                    At HERO.IO we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>
            </div>

            <div className='flex items-center justify-center gap-2 text-base'>
                <button className='btn'>
                    <img className='size-5' src={play_stor_png} alt="play store" />
                    Google Play
                </button>

                <button className='btn'>
                    <img className='size-5' src={app_store_png} alt="app store" />
                    App Store
                </button>
            </div>
            <img className='mx-auto' src={banner_img} alt="banner_image" />
        </div>
    );
};

export default Banner;