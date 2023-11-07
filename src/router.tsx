import { createBrowserRouter } from 'react-router-dom';

import Login from './screens/Login';
import App from './App';
import Home from './screens/Admin/Home';

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <Login />,
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/products',
        element: <>Products</>,
      },
      {
        path: '/suppliers',
        element: <>Suppliers</>,
      },
    ],
  },
]);

export default router;
