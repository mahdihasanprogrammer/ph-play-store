import React, { useEffect, useState } from 'react';

const useApp = () => {
   
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
            console.log('useEffect')
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

         return {apps, loader}
};

export default useApp;