import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Header from './components/Header.jsx'
import About from './components/About.jsx'

// eslint-disable-next-line react-refresh/only-export-components
const Structure = () => {
  return (
    <div className='bg-black text-white h-fit font-mono'>
      <Header />
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Structure />,
    children:[
      {
        path:'/',
        element:<App />
      },
      {
        path:'/about',
        element:<About />
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <div className=''>
    <RouterProvider router={appRouter} />
  </div>
)
