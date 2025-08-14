// src/router.jsx
import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home/Home';
import NotFound from './pages/shared/NotFound';
import ErrorPage from './components/ErrorPage';
import CorporateLogin from "./pages/corporate/Login";
import CorporateSignUp from "./pages/corporate/SignUp";

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <Home />,
    errorElement: <ErrorPage />
  },
  { 
    path: '/corporate-login', 
    element: <CorporateLogin />,
    errorElement: <ErrorPage />
  },
  { 
    path: '/corporate-signup', 
    element: <CorporateSignUp />,
    errorElement: <ErrorPage />
  },
  { 
    path: '*', 
    element: <NotFound />,
    errorElement: <ErrorPage />
  }
]);

export default router;
