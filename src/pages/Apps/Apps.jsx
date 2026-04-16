import React, { useEffect, useState } from 'react';
import AppCard from '../../components/ui/AppCard';
import { RotatingLines } from 'react-loader-spinner';

const Apps = () => {
 
       const [apps, setApps] = useState([]);
        const [loader, setLoader] = useState(true);
    
    // useEffect(() =>{
    //     fetch('/data.json').then(res => res.json()).then(data => {
    
    //        setTimeout(() =>{
    //          setApps(data)
    //         setLoader(false)
    //        },300 )
    //     })
    
    // },[])
    
     useEffect(()=>{
        const fetchData = async() =>{
            const res =await fetch('/data.json');
            const data = await res.json();
            
            setTimeout( ()=> {
                setApps(data);
                setLoader(false)
            }, 200)
        }
        fetchData();
     },[])
     
    
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
    
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            {apps.map(app => <AppCard app ={app} key={app.id} />)}
        </div>}
    
      
    
    
     </div>  
    
        );
};

export default Apps;