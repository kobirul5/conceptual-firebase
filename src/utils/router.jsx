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
                loader: async ()=> {
                    const serviceRes = await  fetch("/service.json")
                    const serviceData = await serviceRes.json()

                    const feedback = await fetch('/happyClients.json')
                    const feedbackData = await feedback.json()
                    return {serviceData, feedbackData}
                }
            },
            {
                path: '/about',
                element: <About></About>,
                
            },
            {
                path:'/allTreatment',
                element: <AllTreatment> </AllTreatment>,
                loader: ()=> fetch("/service.json")
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