import React from 'react';
import Banner from './Banner';
import { NavLink, useLoaderData } from 'react-router-dom';
import ServiceCard from './serviceCard';
import FeedBack from './FeedBack';

const Home = () => {
   const services = useLoaderData()
   console.log(services)
   const {serviceData, feedbackData} = services
    return (
        <div>
            <Banner/>
            <section className='grid grid-cols-4 gap-10  w-[90%] lg-[80%] mx-auto'>
                {
                    serviceData.slice(0,4).map((service, idx)=> <ServiceCard 
                        key={idx}
                        service ={ service}
                    ></ServiceCard>)
                }
            </section>
            <button className="mx-auto block btn my-5 bg-cyan-300">
                <NavLink to="/allTreatment">Show All Treatment</NavLink>
            </button>
            <section>
                {
                    <FeedBack feedbackData={feedbackData}></FeedBack>
                }
            </section>
        </div>
    );
};

export default Home;