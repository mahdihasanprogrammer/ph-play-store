import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import RootLayout from './layout/RootLayout'
import HomePage from './pages/HomePage/HomePage'
import Apps from './pages/Apps/Apps'
import InstallApps from './pages/InstallApps/InstallApps'
import NotFound from './pages/NotFoundPage/NotFound'
import { router } from './router/router'
import InstalledAppsProvider from './context/InstalledAppsProvider'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InstalledAppsProvider>
        <RouterProvider router={router} />
    </InstalledAppsProvider>
  </StrictMode>,
)
