
import React from 'react';

const Stats = () => {
    return (
      <div className='bg-linear-to-r from-indigo-500 to-purple-500'>

        <div className='container mx-auto px-5 md:px-8 lg:px-12 py-10 md:py-15 text-center space-y-6 md:space-y-10'>

            <h1 className='text-4xl md:text-5xl font-bold text-base-100'>
                Trusted by Millions, Built for You
            </h1>

            <div className='grid grid-cols-1 md:grid-cols-3 text-base-100 gap-8'>

                {/* card -1 */}
                <div className='space-y-1 md:space-y-2'>
                    <p>Total Downloads</p>
                    <h1 className='text-4xl md:text-5xl font-bold'>29.6M</h1>
                    <p>21% more than last month</p>
                </div>

                {/* card-2 */}
                <div className='space-y-1 md:space-y-2'>
                    <p>Total Reviews</p>
                    <h1 className='text-4xl md:text-5xl font-bold'>906K</h1>
                    <p>46% more than last month</p>
                </div>

                {/* card-3*/}
                <div className='space-y-1 md:space-y-2'>
                    <p>Active Apps</p>
                    <h1 className='text-4xl md:text-5xl font-bold'>132+</h1>
                    <p>31 more will Launch</p>
                </div>
            </div>
        </div>
    </div>  
    );
};

export default Stats;