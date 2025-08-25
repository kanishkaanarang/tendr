// src/router.jsx
import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home/Home';
import NotFound from './pages/shared/NotFound';
import ErrorPage from './components/ErrorPage';
import CorporateLogin from "./pages/corporate/Login";
import CorporateSignUp from "./pages/corporate/SignUp";
import EventPlanning from "./pages/customer/EventPlanning";
import CustomerAuth from "./pages/customer/Auth";

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
    path: '/login',
    element: <CustomerAuth />,
    errorElement: <ErrorPage />
  },
  {
    path: '/signup',
    element: <CustomerAuth />,
    errorElement: <ErrorPage />
  },
  { 
    path: '/corporate-signup', 
    element: <CorporateSignUp />,
    errorElement: <ErrorPage />
  },
  { 
    path: '/plan-event/form', 
    element: <EventPlanning />, 
    errorElement: <ErrorPage />
  },
  { 
    path: '*', 
    element: <NotFound />,
    errorElement: <ErrorPage />
  }
]);

export default router;
