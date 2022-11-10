import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceProvide from '../Shared/ServiceProvide/ServiceProvide';
import SpinnerGroup from '../Shared/Utils/SpinnerGroup';

const Services = () => {
    const allServices = useLoaderData()

    return (
        <div>
            {!allServices && <SpinnerGroup />}

            {allServices && <ServiceProvide sectionTitle={'All sevices'} allServices={allServices}></ServiceProvide>}
        </div>
    );
};

export default Services;