import { createBrowserRouter } from 'react-router-dom';
import Main from '../../lauout/Main';
import Blog from '../../Pages/Blog/Blog';
import Home from '../../Pages/Home/Home';
import Services from '../../Pages/Services/Services';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://bizon-learning-server.vercel.app/courses'),
                element: <Home></Home>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'services',
                element: <Services></Services>
            }

        ]
    },

])