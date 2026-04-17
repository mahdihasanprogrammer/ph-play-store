import React, { useContext } from 'react';
import { InstalledAppsContext } from '../../context/InstalledAppsContext';
import { FaStar, FaStreetView } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';
import { toast } from 'react-toastify';



const InstallApps = () => {

  const {installedApps, setInstalledApps} = useContext(InstalledAppsContext);

  const handleUnInstall =(install)=>{
   
    const filteredApps = installedApps.filter(app => app.id !== install.id);
     toast.warning(`Uninstalled ${install.title}`)
     setInstalledApps(filteredApps)

  }


    
    return (
    <div className='container mx-auto px-5 md:px-8 lg:px-12 space-y-4 py-15 md:py-20'>
    { 
     installedApps.length===0 ? <div className='flex px-5 items-center bg-gray-200 rounded-2xl justify-center h-[40vh]'>
        <h2 className='text-3xl font-bold'>No installed app found!</h2>
    </div> : 


        installedApps.map(install => 

        <div key={install.id}
            className='p-5 rounded-xl bg-base-100 border-2 border-gray-200  flex items-center gap-5 flex-wrap'>
        
            <img className='h-16 rounded-xl'
             src={install.image} alt={install.title} />


            {/* text content */}
            <div className='space-y-1 flex-1'>
                <h1 className='text-xl font-medium'>{install.title}</h1>

                {/* rating , downloads, review card container */}
                 <div className='font-medium flex items-center gap-3 md:gap-4 text-base flex-wrap'>

                     {/* downloads */}
                    <div className='flex items-center gap-1 text-green-500'>
                        <MdOutlineFileDownload className='text-xl' />
                         <h2 >{install.downloads}</h2>
                    </div>

                    {/* ratingAvg */}
                    <div className='flex items-center gap-1 text-orange-500'>
                        <FaStar className='text-xl'/>
                         <h2 >{install.ratingAvg}</h2>
                    </div>

                    <p className='text-gray-700'>
                       {install.size} MB
                    </p>

                 </div>
            </div>

            <button onClick={() =>{handleUnInstall(install)}}
             className='btn text-red-600 border-red-600'>Uninstall</button>
        </div>

                )
            }
    </div>
    );
};

export default InstallApps;