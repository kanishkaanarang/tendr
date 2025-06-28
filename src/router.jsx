// src/router.jsx
import { createBrowserRouter } from 'react-router-dom';

import LandingPageNew from './pages/LandingPageNew';
import AuthPage from './pages/AuthPage';
import VendorRegistration from './pages/VendorRegistration';
import VendorDashboard from './pages/VendorDashboard';
import SelectServiceType from './pages/SelectServiceType';
import GroupBooking from './pages/GroupBooking';
import BookServiceCheckout from './pages/BookServiceCheckout';
import PlanFullEvent from './pages/PlanFullEvent';
import EventForm from './pages/EventForm';
import SmartRecommendations from './pages/SmartRecommendations';
import PlanEventCheckout from './pages/PlanEventCheckout';
import WhatsAppFlow from './pages/WhatsAppFlow';
import NotFound from './pages/NotFound';
import OtpPage from './pages/OtpVerification'; // Make sure file name matches
import ListingPage from './pages/ListingPage';
import VendorDetails from './pages/VendorDetails';
import ChatPage from './pages/ChatPage';
import VendorFlow from './pages/VendorFlow';
import CorporateBooking from './pages/CorporateBooking';

const router = createBrowserRouter([
  { path: '/', element: <LandingPageNew /> },
  { path: '/chat', element: <ChatPage /> },
  { path: '/VendorDetails', element: <VendorDetails /> },
  { path: '/listings', element: <ListingPage /> },
  { path: '/login', element: <AuthPage /> },
  { path: '/signup', element: <AuthPage /> },
  { path: '/GroupBooking', element: <GroupBooking /> },
  { path: '/CorporateBooking', element: <CorporateBooking /> },
  {
    path: '/vendor',
    children: [
      { path: 'register', element: <VendorFlow /> },
      { path: 'dashboard', element: <VendorDashboard /> },
    ],
  },
  {
    path: '/book-service',
    children: [
      { path: '', element: <SelectServiceType /> },
      { path: 'checkout', element: <BookServiceCheckout /> },
    ],
  },
  {
    path: '/plan-event',
    children: [
      { path: '', element: <PlanFullEvent /> },
      { path: 'form', element: <EventForm /> },
      { path: 'recommendations', element: <SmartRecommendations /> },
      { path: 'checkout', element: <PlanEventCheckout /> },
    ],
  },
  { path: '/chatbot', element: <WhatsAppFlow /> },
  { path: '/otp', element: <OtpPage /> },
  { path: '*', element: <NotFound /> },
]);

export default router;
