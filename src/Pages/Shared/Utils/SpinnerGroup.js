import React from 'react';
import GrowLoader from './spinner';

const SpinnerGroup = () => {
    return (
        <div className='d-flex justify-content-center align-items-center py-5'>
            <GrowLoader />
        </div>
    );
};

export default SpinnerGroup;