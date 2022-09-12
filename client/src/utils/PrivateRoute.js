import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from './Auth';
const PrivateRoute = () => {

    const loggedInUser = isAuthenticated();
    // const loggedInUser = true;

    return (
        loggedInUser ? <Outlet /> : <Navigate to='/login' />
    )
};

export default PrivateRoute;