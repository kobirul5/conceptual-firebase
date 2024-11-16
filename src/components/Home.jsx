import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './serviceCard';

const Home = () => {
   const services = useLoaderData()
   console.log(services)
    return (
        <div>
            <Banner/>
            <section className='grid grid-cols-4 gap-10  w-[90%] lg-[80%] mx-auto'>
                {
                    services.map((service, idx)=> <ServiceCard 
                        key={idx}
                        service ={ service}
                    ></ServiceCard>)
                }
            </section>
        </div>
    );
};

export default Home;