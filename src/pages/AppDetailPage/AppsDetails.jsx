import React, { useContext } from 'react';
import { useParams } from 'react-router';
import useApp from '../../Hooks/useApp';
import { RotatingLines } from 'react-loader-spinner';
import download_icon from '../../assets/images/icon-downloads.png';
import rating_icon from '../../assets/images/icon-ratings.png';
import review_icon from '../../assets/images/icon-review.png';
import { InstalledAppsContext } from '../../context/InstalledAppsContext';
import { toast } from 'react-toastify';


const AppsDetails = () => {

const {id} = useParams()

const {loader, apps} = useApp();

const expectedApp  = apps.find(app => app.id == id);
const {  installedApps, setInstalledApps } = useContext(InstalledAppsContext);

const isExist = installedApps.some(app => app.id == id);



const handleInstall = () =>{
   
    console.log('check exist', isExist)

    if(isExist){
        toast.error(`${expectedApp.title} is already installed!`)
    }
    else{
         toast.success(`${expectedApp.title} installed !`);
        setInstalledApps([...installedApps, expectedApp]);
        console.log('install', installedApps)
    }
}




    return (
       <div className='container mx-auto px-5 md:px-8 lg:px-12 py-15 md:py-20'>
        {
            loader ? 
            <div className='flex items-center justify-center'>
                <RotatingLines
                color='#9851ff'
                width={50}
                height={50}
                />
            </div> :


            <div className='p-6 flex flex-col md:flex-row items-center gap-10 shadow'>

                {/* image */}
                <img className='h-52 rounded-2xl' src={expectedApp.image} alt={expectedApp.title} />

                {/* details container */}
                
                <div className='flex-1 space-y-0'>
                    <h2 className=' text-2xl md:text-3xl text-[#001931] font-bold'>{expectedApp.title}</h2>

                    <p className='font-semibold text-xl pb-5 border-b border-gray-300 text-gray-400'> Developed by <span className='text-indigo-500'>{expectedApp.companyName}</span></p>


                    {/* rating , downloads, review card container */}
                    <div className='pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center md:text-left '>

                        {/* downloads */}
                       <div className='space-y-1'>
                            <img className='mx-auto md:mx-0' src={download_icon} alt='download icon' />
                            <p>Downloads</p>
                            <h2 className='text-2xl font-bold'>{expectedApp.downloads}</h2>
                       </div>

                       {/* ratingAvg */}
                       <div className='space-y-1'>
                            <img className='mx-auto md:mx-0' src={rating_icon} alt='download icon' />
                            <p>Average Ratings</p>
                            <h2 className='text-2xl font-bold'>{expectedApp.ratingAvg}</h2>
                       </div>

                       {/* card review */}
                       <div className='space-y-1'>
                            <img className='mx-auto md:mx-0' src={review_icon} alt='download icon' />
                            <p>Total Reviews</p>
                            <h2 className='text-2xl font-bold'>{expectedApp.reviews}</h2>
                       </div>
                    </div>

                  <div className='text-center md:text-left mt-5'>
                      <button  onClick={handleInstall}
                         className={`btn  bg-green-600 text-base-100`}>Install Now ({expectedApp.size} MB)
                    </button>
                  </div>
                </div>
            </div>
        }
       </div>
    );
};

export default AppsDetails;