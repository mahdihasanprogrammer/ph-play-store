
import AppCard from '../../components/ui/AppCard';
import { RotatingLines } from 'react-loader-spinner';
import useApp from '../../Hooks/useApp';

const Apps = () => {
 
// fetch data using custom useApp hook;
const {apps, loader} = useApp();
  

     
    
    return (
    
    <div className='container mx-auto px-5 md:px-8 lg:px-12 py-15 md:py-20'>
                
                {/* heading section */}
        <div className='text-center space-y-4 mb-10'>
            <h1 className='text-5xl font-bold'> Our All Applications</h1>
            <p className='text-gray-500'>
               Explore All Apps on the Market developed by us. We code for Millions
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
            {apps.map(app => <AppCard app ={app} key={app.id} />)}
        </div>}
    
      
    
    
     </div>  
    
        );
};

export default Apps;