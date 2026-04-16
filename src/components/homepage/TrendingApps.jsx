import React, { useEffect, useState } from 'react';
import AppCard from '../ui/AppCard';
import {  Puff, RotatingLines } from 'react-loader-spinner';
import { Link } from 'react-router';


const TrendingApps = () => {
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

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
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