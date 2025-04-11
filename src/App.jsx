import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import './App.css'

import LandingPage from './pages/LandingPage';
import ExploreVendors from './pages/ExploreVendors';
import AuthPage from './pages/AuthPage';
import VendorRegistration from './pages/VendorRegistration';
import VendorDashboard from './pages/VendorDashboard';
import SelectServiceType from './pages/SelectServiceType';
import VendorListings from './pages/VendorListings';
import BookServiceCheckout from './pages/BookServiceCheckout';
import PlanFullEvent from './pages/PlanFullEvent';
import EventForm from './pages/EventForm';
import SmartRecommendations from './pages/SmartRecommendations';
import PlanEventCheckout from './pages/PlanEventCheckout';
import WhatsAppFlow from './pages/WhatsAppFlow';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  { path: '/explore', element: <ExploreVendors /> },
  { path: '/login', element: <AuthPage /> },
  { path: '/signup', element: <AuthPage /> },
  {
    path: '/vendor',
    children: [
      { path: 'register', element: <VendorRegistration /> },
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
    path: '/vendors/:category',
    element: <VendorListings />,
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
  { path: '*', element: <NotFound /> },
]);

function App() {
  return (
  <div>
    <RouterProvider router={router} />
  </div>
  )
}

export default App
