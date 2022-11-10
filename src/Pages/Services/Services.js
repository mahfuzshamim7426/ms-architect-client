import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceProvide from '../Shared/ServiceProvide/ServiceProvide';

const Services = () => {
    const allServices = useLoaderData()

    return (
        <div>
            <ServiceProvide sectionTitle={'All sevices'} allServices={allServices}></ServiceProvide>
        </div>
    );
};

export default Services;