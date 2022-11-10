import { createBrowserRouter } from 'react-router-dom';
import Main from '../../lauout/Main';
import AddService from '../../Pages/AddService/AddService';
import Blog from '../../Pages/Blog/Blog';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login/Login';
import SignUp from '../../Pages/Login/SignUp/SignUp';
import MyReviews from '../../Pages/MyReviews/MyReviews';
import ServiceDetails from '../../Pages/ServiceDetails/ServiceDetails';
import Services from '../../Pages/Services/Services';
import NotFound from '../../Pages/Shared/NotFound/NotFound';
import PrivateRoute from '../PrivateRoute/PrivateRoute';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://ms-architect-server.vercel.app/services'),
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'services',
                loader: () => fetch('https://ms-architect-server.vercel.app/services'),
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://ms-architect-server.vercel.app/services/${params.id}`)
            },
            {
                path: 'my-reviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: 'add-service',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }

        ]
    },

])