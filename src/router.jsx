// src/router.jsx
import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";
import Auth from "./pages/customer/Auth";
import VendorRegistration from "./pages/vendor/Registration";
import EventPlanningForm from "./pages/customer/EventPlanning.jsx"; // ✅ use the new form
import NotFound from "./pages/shared/NotFound";
import ErrorPage from "./components/ErrorPage";
import CorporateLogin from "./pages/corporate/Login.jsx";
import CorporateSignup from "./pages/corporate/SignUp.jsx";

import OtpPage from "./pages/customer/OtpVerification";
import VendorList from "./pages/customer/VendorList";
import VendorDetails from "./pages/customer/VendorDetails";
import Chat from "./pages/customer/Chat";

import AdminDashboard from "./pages/admin/Dashboard";
import VendorOnboarding from "./pages/vendor/Onboarding";
import VendorDashboard from "./pages/vendor/Dashboard";
import VendorChatList from "./pages/vendor/ChatList";
import VendorChat from "./pages/vendor/Chat";

import CorporateBooking from "./pages/corporate/Booking";
import UserDashboard from "./pages/customer/Dashboard";

import RefundPolicy from "./pages/info/RefundPolicy";
import CancellationPolicy from "./pages/info/CancellationPolicy";
import ContactUs from "./pages/info/ContactUs.jsx";

import ChooseBooking from "./pages/customer/ChooseBooking";
// import AltBookingFlow from "./pages/customer/AltBookingFlow"; // ❌ no longer needed if using bookingType flag

import CorporateDashboard from "./pages/corporate/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/AdminDashboard",
    element: <AdminDashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/CorporateDashboard",
    element: <CorporateDashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/UserDashboard",
    element: <UserDashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/corporate-login",
    element: <CorporateLogin />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/corporate-signup",
    element: <CorporateSignup />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/VendorRegistration",
    element: <VendorRegistration />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/chat",
    element: <Chat />,
    errorElement: <ErrorPage />,
  },
  {
    // legacy static route, keep for compatibility
    path: "/VendorDetails",
    element: <VendorDetails />,
    errorElement: <ErrorPage />,
  },
  {
    // preferred dynamic route
    path: "/vendor/:id",
    element: <VendorDetails />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/listings",
    element: <VendorList />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/listings/:vendorType",
    element: <VendorList />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Auth />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <Auth />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/CorporateBooking",
    element: <CorporateBooking />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/vendor",
    errorElement: <ErrorPage />,
    children: [
      { path: "register", element: <VendorOnboarding /> },
      { path: "dashboard", element: <VendorDashboard /> },
      { path: "chats", element: <VendorChatList /> },
      { path: "chat", element: <VendorChat /> },
    ],
  },

  // ✅ New booking entry
  {
    path: "/booking",
    element: <ChooseBooking />,
    errorElement: <ErrorPage />,
  },

  // ✅ Single form route (reads ?bookingType=you-do-it|let-us-do-it)
  {
    path: "/plan-event",
    errorElement: <ErrorPage />,
    children: [{ path: "form", element: <EventPlanningForm /> }],
  },

  // ℹ️ Keep info pages
  {
    path: "/contact-us",
    element: <ContactUs />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/refund-policy",
    element: <RefundPolicy />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cancellation-policy",
    element: <CancellationPolicy />,
    errorElement: <ErrorPage />,
  },

  // ❌ Remove duplicate path to the old component; if you still need it, point it to EventPlanningForm
  {
    path: "/event-planning",
    element: <EventPlanningForm />,
    errorElement: <ErrorPage />,
  },

  // 404
  {
    path: "*",
    element: <NotFound />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
