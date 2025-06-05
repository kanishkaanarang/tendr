import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, fetchUserProfile } from '../redux/authSlice';
import logo from "../assets/logo2.png";
import EventIcon from '@mui/icons-material/Event';
import HistoryIcon from '@mui/icons-material/History';
import BookIcon from '@mui/icons-material/Book';
import PaymentIcon from '@mui/icons-material/Payment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

// Mock API calls (replace with actual API integration)
const fetchUpcomingEvents = async () => {
  return [
    { id: 1, eventName: "Birthday Party", date: "2025-06-15", venue: "The Grand Hall" },
    { id: 2, eventName: "Office Party", date: "2025-06-20", venue: "Sky Lounge" },
  ];
};

const fetchPastEvents = async () => {
  return [
    { id: 3, eventName: "Anniversary Celebration", date: "2025-05-10", venue: "Riverside Gardens" },
  ];
};

const fetchBookings = async () => {
  return [
    { id: 1, vendorName: "Elite Caterers", service: "Catering", status: "Confirmed", date: "2025-06-15" },
    { id: 2, vendorName: "DJ Sparks", service: "Entertainment", status: "Pending", date: "2025-06-20" },
  ];
};

const fetchPayments = async () => {
  return [
    { id: 1, amount: 5000, status: "Completed", date: "2025-06-01", bookingId: 1 },
    { id: 2, amount: 2000, status: "Pending", date: "2025-06-05", bookingId: 2 },
  ];
};

const fetchNotifications = async () => {
  return [
    { id: 1, message: "Your booking with Elite Caterers has been confirmed!", date: "2025-06-01" },
    { id: 2, message: "Reminder: Office Party on 2025-06-20", date: "2025-06-05" },
  ];
};

const fetchGroupBookings = async () => {
  return [
    { id: 1, eventName: "Birthday Party", services: ["Catering", "Entertainment"], status: "Confirmed", date: "2025-06-15" },
  ];
};

const UserDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, profile, loading, error } = useSelector((state) => state.auth);

  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [payments, setPayments] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [groupBookings, setGroupBookings] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchUserProfile()); // Fetch user profile on component mount

    const loadData = async () => {
      const upcoming = await fetchUpcomingEvents();
      const past = await fetchPastEvents();
      const userBookings = await fetchBookings();
      const userPayments = await fetchPayments();
      const userNotifications = await fetchNotifications();
      const userGroupBookings = await fetchGroupBookings();

      setUpcomingEvents(upcoming);
      setPastEvents(past);
      setBookings(userBookings);
      setPayments(userPayments);
      setNotifications(userNotifications);
      setGroupBookings(userGroupBookings);
    };
    loadData();
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout()).then(() => {
      navigate('/');
      setIsModalOpen(false);
    });
  };

  const userInitial = user?.name ? user.name.charAt(0).toUpperCase() : '';

  return (
    <div className="flex h-screen bg-[#F7F4EF]">
      {/* Sidebar */}
      <div className="w-64 bg-[#FFD3C3] p-6 flex flex-col justify-between rounded-r-[40px] shadow-lg">
        <div>
          <div className="mb-10">
            <img src={logo} alt="Tendr Logo" className="h-16 cursor-pointer" onClick={() => navigate('/')} />
          </div>
          <nav className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-[#D48060] font-bold text-lg cursor-pointer hover:bg-[#fbbfa7] p-3 rounded-xl transition-colors duration-300">
              <EventIcon /> Upcoming Events
            </div>
            <div className="flex items-center gap-3 text-[#D48060] font-bold text-lg cursor-pointer hover:bg-[#fbbfa7] p-3 rounded-xl transition-colors duration-300">
              <HistoryIcon /> Past Events
            </div>
            <div className="flex items-center gap-3 text-[#D48060] font-bold text-lg cursor-pointer hover:bg-[#fbbfa7] p-3 rounded-xl transition-colors duration-300">
              <BookIcon /> Bookings
            </div>
            <div className="flex items-center gap-3 text-[#D48060] font-bold text-lg cursor-pointer hover:bg-[#fbbfa7] p-3 rounded-xl transition-colors duration-300">
              <PaymentIcon /> Payments
            </div>
            <div className="flex items-center gap-3 text-[#D48060] font-bold text-lg cursor-pointer hover:bg-[#fbbfa7] p-3 rounded-xl transition-colors duration-300">
              <NotificationsIcon /> Notifications
            </div>
            <div className="flex items-center gap-3 text-[#D48060] font-bold text-lg cursor-pointer hover:bg-[#fbbfa7] p-3 rounded-xl transition-colors duration-300">
              <GroupIcon /> Group Bookings
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold text-[#D48060]">User Dashboard</h1>
          <div className="relative">
            <div
              onClick={() => setIsModalOpen(!isModalOpen)}
              className="w-10 h-10 bg-[#CCAB4A] text-white rounded-full flex items-center justify-center text-xl font-bold shadow-md cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
            >
              {userInitial}
            </div>
            {isModalOpen && (
              <div className="absolute top-12 right-0 w-48 bg-[#F7F4EF] rounded-xl shadow-lg py-2 z-50">
                <div
                  onClick={() => setIsModalOpen(false)}
                  className="flex items-center gap-2 px-4 py-2 text-[#D48060] font-semibold hover:bg-[#FFD3C3] cursor-pointer transition-colors duration-300"
                >
                  <PersonIcon fontSize="small" />
                  <span>Profile</span>
                </div>
                <div
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 text-[#D48060] font-semibold hover:bg-[#FFD3C3] cursor-pointer transition-colors duration-300"
                >
                  <LogoutIcon fontSize="small" />
                  <span>Logout</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* User Profile */}
        <div className="bg-[#FFD3C3] p-6 rounded-[30px] mb-6 shadow-md">
          <h2 className="text-2xl font-bold text-[#D48060] mb-4">Profile</h2>
          {loading && <p className="text-[#D48060]">Loading profile...</p>}
          {error && <p className="text-red-500">Error: {error}</p>}
          {profile && (
            <div className="text-[#D48060] font-semibold">
              <p>Name: {profile.name}</p>
              <p>Email: {profile.email}</p>
              <p>Phone: {profile.phoneNumber}</p>
            </div>
          )}
        </div>

        {/* Upcoming Events */}
        <div className="bg-[#FFD3C3] p-6 rounded-[30px] mb-6 shadow-md">
          <h2 className="text-2xl font-bold text-[#D48060] mb-4">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-[#F7F4EF] p-4 rounded-xl shadow-sm hover:bg-[#fbbfa7] transition-colors duration-300">
                <p className="text-[#D48060] font-semibold">{event.eventName}</p>
                <p className="text-[#D48060]">{event.date}</p>
                <p className="text-[#D48060]">{event.venue}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div className="bg-[#FFD3C3] p-6 rounded-[30px] mb-6 shadow-md">
          <h2 className="text-2xl font-bold text-[#D48060] mb-4">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-[#F7F4EF] p-4 rounded-xl shadow-sm hover:bg-[#fbbfa7] transition-colors duration-300">
                <p className="text-[#D48060] font-semibold">{event.eventName}</p>
                <p className="text-[#D48060]">{event.date}</p>
                <p className="text-[#D48060]">{event.venue}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bookings */}
        <div className="bg-[#FFD3C3] p-6 rounded-[30px] mb-6 shadow-md">
          <h2 className="text-2xl font-bold text-[#D48060] mb-4">Bookings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bookings.map((booking) => (
              <div key={booking.id} className="bg-[#F7F4EF] p-4 rounded-xl shadow-sm hover:bg-[#fbbfa7] transition-colors duration-300">
                <p className="text-[#D48060] font-semibold">{booking.vendorName}</p>
                <p className="text-[#D48060]">{booking.service}</p>
                <p className="text-[#D48060]">Status: {booking.status}</p>
                <p className="text-[#D48060]">{booking.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Payments */}
        <div className="bg-[#FFD3C3] p-6 rounded-[30px] mb-6 shadow-md">
          <h2 className="text-2xl font-bold text-[#D48060] mb-4">Payments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {payments.map((payment) => (
              <div key={payment.id} className="bg-[#F7F4EF] p-4 rounded-xl shadow-sm hover:bg-[#fbbfa7] transition-colors duration-300">
                <p className="text-[#D48060] font-semibold">Amount: ₹{payment.amount}</p>
                <p className="text-[#D48060]">Status: {payment.status}</p>
                <p className="text-[#D48060]">{payment.date}</p>
                <p className="text-[#D48060]">Booking ID: {payment.bookingId}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-[#FFD3C3] p-6 rounded-[30px] mb-6 shadow-md">
          <h2 className="text-2xl font-bold text-[#D48060] mb-4">Notifications</h2>
          <div className="flex flex-col gap-4">
            {notifications.map((notification) => (
              <div key={notification.id} className="bg-[#F7F4EF] p-4 rounded-xl shadow-sm hover:bg-[#fbbfa7] transition-colors duration-300">
                <p className="text-[#D48060] font-semibold">{notification.message}</p>
                <p className="text-[#D48060]">{notification.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Group Bookings */}
        <div className="bg-[#FFD3C3] p-6 rounded-[30px] mb-6 shadow-md">
          <h2 className="text-2xl font-bold text-[#D48060] mb-4">Group Bookings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {groupBookings.map((groupBooking) => (
              <div key={groupBooking.id} className="bg-[#F7F4EF] p-4 rounded-xl shadow-sm hover:bg-[#fbbfa7] transition-colors duration-300">
                <p className="text-[#D48060] font-semibold">{groupBooking.eventName}</p>
                <p className="text-[#D48060]">Services: {groupBooking.services.join(", ")}</p>
                <p className="text-[#D48060]">Status: {groupBooking.status}</p>
                <p className="text-[#D48060]">{groupBooking.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;