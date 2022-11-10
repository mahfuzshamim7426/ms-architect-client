import React, { useEffect } from 'react';

const NotFound = () => {

    useEffect(() => {
        document.title = "404 Page Ms-Architect"
    }, [])

    return (
        <div>
            <div className='not-found'>
                <div className='not-found-text font-weight-bold'>404, This Page is not Available</div>
            </div>
        </div>
    );
};

export default NotFound;