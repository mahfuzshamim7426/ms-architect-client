import { createBrowserRouter } from 'react-router-dom';
import Main from '../../lauout/Main';
import Home from '../../Pages/Home/Home';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://bizon-learning-server.vercel.app/courses'),
                element: <Home></Home>
            }

        ]
    },

])