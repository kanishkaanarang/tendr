// src/pages/Home/Home.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import tendrLogo from '../../assets/logos/tendr-logo-secondary.png';
import PlatformFlow from '../../components/PlatformFlow';
import BasicSpeedDial from '../../components/BasicSpeedDial';
import Footer from '../../components/Footer';

// WhatsApp icon
import { FaWhatsapp } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Logo should navigate to the home route (works from other pages as well)
  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    window.open('https://wa.me/9211668427', '_blank');
  };

  const handleSignInClick = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  // removed sign up - not needed per requirements

  const handleBookingSelect = (e) => {
    const val = e.target.value;
    if (!val) return;
    if (val === 'corporate') {
      navigate('/corporate'); // your corporate booking route
    } else if (val === 'celebration') {
      navigate('/booking'); // general booking / choose booking
    }
    // reset select to default (optional)
    e.target.selectedIndex = 0;
  };

  const handleVendorSelect = (e) => {
    const val = e.target.value;
    if (!val) return;
    if (val === 'register') {
      navigate('/vendor/register');
    } else if (val === 'portfolio') {
      navigate('/listings'); // vendor listings / portfolio area
    }
    e.target.selectedIndex = 0;
  };

  const handledropdownChange = (event) => {
    const selectedValue = event.target.value;
    if (!selectedValue) return;
    if (selectedValue === 'timeline-picker') {
      navigate('/timeline-picker');
    } else if (selectedValue === 'aftermovie') {
      navigate('/aftermovie');
    } else if (selectedValue === 'checklist') {
      navigate('/checklist-picker');
    } else if (selectedValue === 'budget') {
      navigate('/budget-picker');
    } else if (selectedValue === 'invitation') {
      navigate('/invitation');
    } else if (selectedValue === 'our-products') {
      navigate('/gift-hampers-cakes');
    }
    event.target.selectedIndex = 0;
  };

  const handleGiftHampersClick = (e) => {
    e.preventDefault();
    navigate('/gift-hampers-cakes');
  };

  const handlePartnerClick = (e) => {
    e.preventDefault();
    navigate('/vendor/register');
  };

  const handleCorporateClick = (e) => {
    e.preventDefault();
    navigate('/corporate-signup');
  };

  const services = [
    { id: 1, title: 'Photography', image: 'https://artincontext.org/wp-content/uploads/2022/07/What-Is-the-Definition-of-Fine-Art-Photography.avif' },
    { id: 2, title: 'Entertainment', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop' },
    { id: 3, title: 'Decor', image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=400&h=300&fit=crop' },
    { id: 4, title: 'Catering', image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop' }
  ];

  const events = [
    { id: 1, title: 'Dinner Eve', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&h=400&fit=crop' },
    { id: 2, title: 'Family Gathering', image: 'https://belvederebanquets.com/wp-content/uploads/2024/02/Belvedere-Family-Reunion-Ideas-Create-New-Memories-With-Fun-Activities.jpg' },
    { id: 3, title: 'Lunch Celebrations', image: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?w=500&h=400&fit=crop' },
    { id: 4, title: 'Marriage Ceremony', image: 'https://seasons5.com.au/wp-content/uploads/2024/06/luxury-wedding-trends.jpg' },
    { id: 5, title: 'Magical Ring Ceremony', image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=500&h=400&fit=crop' }
  ];

  const features = [
    { id: 1, icon: '🏢', title: 'Corporate Events', description: 'Meetings, conferences, and seminars' },
    { id: 2, icon: '🎯', title: 'Team Building', description: 'Engaging activities and workshops' },
    { id: 3, icon: '🏆', title: 'Award Ceremonies', description: 'Recognition events and galas' }
  ];

  return (
    <div className="App">
      {/* Speed dial (floating) */}
      <div className={`sticky bottom-2 right-1 z-50 transform transition-all duration-500 ${scrolled ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}`}>
        <BasicSpeedDial />
      </div>

      {/* Header / Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 bg-white shadow transition-transform duration-500 ease-in-out ${scrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}>
        <div className="nav">
          <a href="/" className="logo" onClick={handleLogoClick}>
            <img src={tendrLogo} alt="Tendr - We Curate You Celebrate" className="logo-img" />
          </a>

          <div className="nav-buttons">
            {/* Tendr Utilities dropdown */}
            <select className="mx-4 nav-select" onChange={handledropdownChange} defaultValue="">
              <option value="" disabled> Our Products </option>
              <option value="checklist"> Checklist </option>
              <option value="timeline-picker"> Timeline </option>
              <option value="budget"> Budget Allocator </option>
              <option value="aftermovie"> Aftermovie </option>
              <option value="invitation"> Invitation Flyers </option>
            </select>

            {/* Vendors dropdown */}
            <select className="mx-4 nav-select" onChange={handleVendorSelect} defaultValue="">
              <option value="" disabled> About Vendors </option>
              <option value="register"> Register as Vendor </option>
              <option value="portfolio"> Vendor Portfolio </option>
            </select>

            {/* Booking dropdown */}
            <select className="mx-4 nav-select" onChange={handleBookingSelect} defaultValue="">
              <option value="" disabled> Booking </option>
              <option value="corporate"> Corporate Booking </option>
              <option value="celebration"> Other Celebrations </option>
            </select>


            {/* Gift Hampers link (kept as quick link) */}
            <a href="/gift-hampers-cakes" className="nav-link mx-4" onClick={handleGiftHampersClick}> Gift Hampers & Cakes </a>

            {/* WhatsApp icon */}
            <a
              href="https://wa.me/9211668427"
              className="contact-icon whatsapp-icon"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp"
            >
              <FaWhatsapp size={22} />
            </a>

            {/* Only Sign in (Sign up removed intentionally) */}
            <a href="/login" className="sign-in mx-4" onClick={handleSignInClick}> Sign in </a>
          </div>
        </div>
      </nav> 


      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Experience Event Planning</h1>
          <p className="hero-subtitle">We Curate You Celebrate</p>
          <button className="cta-button" onClick={() => navigate('/booking')}> Booking </button>
        </div>
      </section>

      {/* Services */}
      <section className="services-section" id="services">
        <div className="services-container">
          <h2 className="section-title">Explore Services</h2>
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <div 
                  className="service-image" 
                  style={{ backgroundImage: `url('${service.image}')` }}
                ></div>
                <h3>{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Booking Section */}
      <section className="corporate-booking-section">
        <div className="corporate-container">
          <div className="corporate-content">
            <div className="corporate-text">
              <span className="corporate-badge">Professional Services</span>
              <h2 className="corporate-title">Corporate Event Planning</h2>
              <p className="corporate-description">
                Elevate your business events with our comprehensive corporate planning services. 
                From executive meetings to large-scale conferences, we handle every detail with 
                professional excellence.
              </p>
              <div className="corporate-features">
                {features.map((feature) => (
                  <div key={feature.id} className="feature-item">
                    <div className="feature-icon">{feature.icon}</div>
                    <div className="feature-text">
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#corporate-contact" className="corporate-btn" onClick={(e) => { e.preventDefault(); navigate('/corporate'); }}>
                Book Corporate Events
              </a>
            </div>
            <div className="corporate-image">
              <div className="corporate-img" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=500&fit=crop')` }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Gallery */}
      <section className="events-section" id="events">
        <div className="events-container">
          <div className="events-header">
            <p className="events-subtitle">A tour of events we have executed.</p>
            <h2 className="events-title">A Glimpse Into Our Events</h2>
          </div>
          <div className="events-grid">
            {events.map(event => (
              <div key={event.id} className="event-card">
                <div className="event-image" style={{ backgroundImage: `url('${event.image}')` }}>
                  <div className="event-overlay">
                    <h3>{event.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="partner-section">
        <div className="partner-content">
          <h2>Become a Partner</h2>
          <p>3 easy steps to join the tendr!</p>
          <button className="partner-btn" onClick={() => navigate('/vendor/register')}> Start Here </button>
          <div className="partner-visual"></div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home