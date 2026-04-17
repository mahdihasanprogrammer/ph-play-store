import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/HomePage/HomePage";
import Apps from "../pages/Apps/Apps";
import InstallApps from "../pages/InstallApps/InstallApps";
import NotFound from "../pages/NotFoundPage/NotFound";
import AppsDetails from "../pages/AppDetailPage/AppsDetails";
import Dashboard from "../pages/dashboard/Dashboard";


export const router = createBrowserRouter([
  {
    path:'/',
    Component: RootLayout,
    children: [
      {
        path:'/', Component: HomePage, 
      },
      {
        path:'/apps',Component:Apps,
      },
      {
        path:'/installedApps', Component: InstallApps
      },
      {
        path:'/dashboard',Component: Dashboard
      },
      {
        path: '/apps/:id',
        Component: AppsDetails
      }
     
    ],
    errorElement: <NotFound/>
  }
])