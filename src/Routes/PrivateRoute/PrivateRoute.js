import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    // Fix login reload
    const location = useLocation();

    if (loading) {
        return <div>Loading...</div>
    }

    if (user && user.uid) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;