import React, { useState } from 'react';
import { InstalledAppsContext } from './InstalledAppsContext';

const InstalledAppsProvider = ({children}) => {
const [installedApps, setInstalledApps] = useState([]);
const [isInstall, setIsInstall] = useState(false)

const data ={
    installedApps,
    setInstalledApps,
    isInstall, 
    setIsInstall
    
}
    return (
        <InstalledAppsContext.Provider value={data}>
            {children}
        </InstalledAppsContext.Provider>
    );
};

export default InstalledAppsProvider;