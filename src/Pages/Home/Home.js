import React from 'react';
import Award from '../Shared/Award/Award';
import Cover from '../Shared/Cover/Cover';
import QuickContact from '../Shared/QuickContact/QuickContact';
import ServiceProvide from '../Shared/ServiceProvide/ServiceProvide';

const Home = () => {
    return (
        <div>
            <Cover></Cover>
            <ServiceProvide></ServiceProvide>
            <Award></Award>
            <QuickContact></QuickContact>

        </div>
    );
};

export default Home;