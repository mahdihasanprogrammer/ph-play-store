import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'

const router = createBrowserRouter([
  {path:'/', element:<h1>welcome to home page</h1>},
  {path: 'app', element : <h1>this is app page</h1>},
  {path: 'install', element: <p>install app</p>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
