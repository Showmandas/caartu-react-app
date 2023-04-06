import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import AboutUs from './components/About/AboutUs';
import Home from './components/Home/Home';
import Items from './components/Items/Items';
import Location from './components/Location/Location';
// import ServiceCards from './components/Items/ServiceCards/ServiceCards';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';


const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    children:[
      {
        path:'/',
        element:<Slider/>
      },
      {
        path:'about',
        element:<AboutUs/>
      },
      {
        path:'services',
        element:<Items/>
      },
      {
        path:'location',
        element:<Location/>
      }, 
      

    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
