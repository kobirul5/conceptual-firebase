import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/MainLayout/MainLayout';
import Home from '../components/Home';
import About from '../components/About';
import AllTreatment from '../components/AllTreatment';
import MyAppointment from '../components/MyAppointment';
import Profile from '../components/Profile';

const router = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: ()=> fetch("/service.json")
            },
            {
                path: '/about',
                element: <About></About>,
                
            },
            {
                path:'/allTreatment',
                element: <AllTreatment> </AllTreatment>
            },
            {
                path: '/myAppointment',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            }
        ]
    }
])

export default router;