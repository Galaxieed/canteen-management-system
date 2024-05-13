import { createBrowserRouter } from 'react-router-dom';
import Homepage from './components/homepage/homepage';
import ErrorPage from './components/errorpage/errorpage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />,
        errorElement: <ErrorPage />
    }
])

export default router;