import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Award from '../Shared/Award/Award';
import Cover from '../Shared/Cover/Cover';
import QuickContact from '../Shared/QuickContact/QuickContact';
import ServiceProvide from '../Shared/ServiceProvide/ServiceProvide';

const Home = () => {
    const allServices = useLoaderData()
    useEffect(() => {
        document.title = "Ms-Architect Home Page"
    }, [])
    return (
        <div>
            <Cover></Cover>
            <ServiceProvide sectionTitle={'Services'} allServices={allServices?.slice(0, 3)}></ServiceProvide>
            <Award></Award>
            <QuickContact></QuickContact>

        </div>
    );
};

export default Home;