import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { InstalledAppsContext } from '../../context/InstalledAppsContext';
import useApp from '../../Hooks/useApp';

const Dashboard = () => {

const {installedApps} = useContext(InstalledAppsContext);
const {apps} = useApp()

const totalApps = apps.length;
const uninstalled = totalApps - installedApps.length;


const data = [
    {name: 'Installed', value:installedApps.length, fill: '#9719f5'},
    {name: 'Uninstalled', value: uninstalled, fill: '#3719f5'}
]
 return (

<div className='container mx-auto px-5 md:px-8 lg:px-12 py-5 text-center'>
    <h2 className='text-3xl font-semibold mb-6'>Installed and Uninstalled apps</h2>

    <PieChart
     style={{ width: '100%',
             maxWidth: '400px',
            maxHeight: '70vh',
            margin:'auto',
            aspectRatio: 1 }}
            responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Legend/>
      <Tooltip/>
    
    </PieChart>
</div>
    );
};

export default Dashboard;