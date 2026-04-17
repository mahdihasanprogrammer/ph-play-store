
import AppCard from '../ui/AppCard';
import { RotatingLines } from 'react-loader-spinner';
import { Link } from 'react-router';
import useApp from '../../Hooks/useApp';


const TrendingApps = () => {
  
const {apps, loader} = useApp();
 

return (

<div className='container mx-auto px-5 md:px-8 lg:px-12 py-15 md:py-20'>
            
            {/* heading section */}
    <div className='text-center space-y-4 mb-10'>
        <h1 className='text-5xl font-bold'> Trending Apps</h1>
        <p className='text-gray-500'>
            Explore All Trending Apps on the Market developed by us
        </p>
    </div>

  



  
   { loader ?
    <div className='flex items-center justify-center'>
      <RotatingLines
       color='#a04dff' 
       height="50"
        width="50"/>
    </div> :

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {apps.slice(0,8).map(app => <AppCard app ={app} key={app.id} />)}
    </div>}

    <Link to={`/apps`}
     className='flex justify-center items-center mt-5'>
        <button className='btn text-base-100
         bg-linear-to-r from-indigo-500 to-purple-500'>
            Show All
        </button>
    </Link>


 </div>  

    );
};

export default TrendingApps;