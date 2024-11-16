import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
   const service = useLoaderData()
   console.log(service)
    return (
        <div>
            <Banner/>
            
        </div>
    );
};

export default Home;