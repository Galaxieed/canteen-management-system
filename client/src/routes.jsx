import { createBrowserRouter } from 'react-router-dom';
import Homepage from './components/homepage/homepage';
import Dashboard from './components/dashboard/dashboard';
import POS from './components/pos/pos';
import Inventory from './components/inventory/inventory'
import ErrorPage from './components/errorpage/errorpage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />,
        errorElement: <ErrorPage />
    },{
        path: '/dashboard',
        element: <Dashboard />,
        errorElement: <ErrorPage />
    },{
        path: '/pos',
        element: <POS />,
        errorElement: <ErrorPage />
    },{
        path: '/inventory',
        element: <Inventory />,
        errorElement: <ErrorPage />
    }
])

export default router;