import React from 'react';
import Award from '../Shared/Award/Award';
import Cover from '../Shared/Cover/Cover';
import ServiceProvide from '../Shared/ServiceProvide/ServiceProvide';

const Home = () => {
    return (
        <div>
            <Cover></Cover>
            <ServiceProvide></ServiceProvide>
            <Award></Award>

        </div>
    );
};

export default Home;