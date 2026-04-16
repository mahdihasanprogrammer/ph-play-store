import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter, Outlet } from 'react-router'
import RootLayout from './layout/RootLayout'
import HomePage from './pages/HomePage/HomePage'
import Apps from './pages/Apps/Apps'
import InstallApps from './pages/InstallApps/InstallApps'
import NotFound from './pages/NotFoundPage/NotFound'

const router = createBrowserRouter([
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
      }
     
    ],
    errorElement: <NotFound/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
