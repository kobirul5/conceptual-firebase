import React from 'react';

const ServiceCard = ({ service }) => {
    const {treatment, image, description,cost} = service
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt={treatment}
                    className="rounded-xl" />
            </figure>
            <div className="card-body space-y-3">
                <div className='card-title'>
                <h2 className="card-title">{treatment}</h2>
                <div className="badge badge-secondary">{cost} tk</div>
                </div>
                <p title={description}>{description.slice(0,100)}.......</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Checkout More</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;