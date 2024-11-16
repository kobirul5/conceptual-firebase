import { NavLink, useLoaderData } from "react-router-dom";
import ServiceCard from "./serviceCard";

const AllTreatment = () => {
    const services = useLoaderData()
    return (
        <div>
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

export default AllTreatment;