// src/router.jsx
import { createBrowserRouter } from 'react-router-dom';

import Auth from './pages/customer/Auth';
import VendorRegistration from './pages/vendor/Registration';
import EventPlanning from './pages/customer/EventPlanning';
// import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home/Home';
import NotFound from './pages/shared/NotFound';
import ErrorPage from './components/ErrorPage';
import CorporateLogin from "./pages/corporate/Login";
import CorporateSignUp from "./pages/corporate/SignUp";
import NotFound from './pages/shared/NotFound';
import OtpPage from './pages/customer/OtpVerification';
import VendorList from './pages/customer/VendorList';
import VendorDetails from './pages/customer/VendorDetails';
import Chat from './pages/customer/Chat';
import VendorOnboarding from './pages/vendor/Onboarding';
import VendorDashboard from './pages/vendor/Dashboard';
import VendorChatList from './pages/vendor/ChatList';
import VendorChat from './pages/vendor/Chat';
import CorporateBooking from './pages/corporate/Booking';
// import CorporateSignup from "./pages/corporate/SignUp";
// import ErrorPage from './components/ErrorPage';
import UserDashboard from './pages/customer/Dashboard';
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
 path: '/VendorRegistration', 
    element: <VendorRegistration />,
    errorElement: <ErrorPage />
  },
  { 
    path: '/chat', 
    element: <Chat />,
    errorElement: <ErrorPage />
  },
  { 
    path: '/VendorDetails', 
    element: <VendorDetails />,
    errorElement: <ErrorPage />
  },
  { 
    path: '/vendor/:id', 
    element: <VendorDetails />,
    errorElement: <ErrorPage />
  },
  { 
    path: '/listings', 
    element: <VendorList />,
    errorElement: <ErrorPage />
  },
  { 
    path: '/corporate-signup', 
    element: <CorporateSignup />,
    errorElement: <ErrorPage />
  },
  { 
    path: '/login', 
    element: <Auth />,
    errorElement: <ErrorPage />
  },
  { 
    path: '/signup', 
    element: <Auth />,
    errorElement: <ErrorPage />
  },
  { 
    path: '/CorporateBooking', 
    element: <CorporateBooking />,
    errorElement: <ErrorPage />
  },
  {
    path: '/vendor',
    errorElement: <ErrorPage />,
    children: [
      { path: 'register', element: <VendorOnboarding /> },
      { path: 'dashboard', element: <VendorDashboard /> },
      { path: 'chats', element: <VendorChatList /> },
      { path: 'chat', element: <VendorChat /> },
    ],
  },
  {
    path: '/plan-event',
    errorElement: <ErrorPage />,
    children: [
      { path: 'form', element: <EventPlanning /> },
    ],
  },
  { 
    path: '/otp', 
    element: <OtpPage />,
    errorElement: <ErrorPage />
  },
  { 
    path: '*', 
    element: <NotFound />,
    errorElement: <ErrorPage />
  },
  {
    path: '/dashboard',
    element: <UserDashboard />,
    errorElement: <ErrorPage />,
  }
]);


export default router;
