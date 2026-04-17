import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { Link } from 'react-router';

const AppCard = ({app}) => {
    return (
          <Link to={`/apps/${app.id}`}
           className="card bg-base-100  shadow-sm card-body space-y-4 ">
              <figure>
               <img className='h-44 rounded-2xl ' src={app.image} alt={app.title} />
              </figure>

              <div className=" space-y-4">
                <h2 className="card-title">{app.title}</h2>
          
               <div className='flex items-center justify-between gap-4 font-semibold '>

                   <span className='flex items-center gap-3 py-1 px-3 bg-green-50 text-green-600 rounded-sm'>
                      <FiDownload />{app.downloads}
                   </span>

                   <span className='flex items-center gap-3 py-1 px-3 bg-orange-100 text-amber-600 rounded-sm'>
                           <FaStar/> {app.ratingAvg}
                   </span>
               </div>
              </div>
            </Link>
    );
};

export default AppCard;