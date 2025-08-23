import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import tendrLogo from '../../assets/logos/tendr-logo-secondary.png';
import PlatformFlow from "../../components/PlatformFlow";

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

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleWhatsAppClick = () => {
    console.log('WhatsApp button clicked');
  };

  const handleSignInClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const handleBookingClick = () => {
    navigate('/plan-event/form');
  };

  const handlePartnerClick = () => {
    navigate('/vendor/register');
  };

  const handleCorporateClick = () => {
    navigate('/corporate-signup');
  };

  const services = [
    {
      id: 1,
      title: 'Photography',
      image: 'https://artincontext.org/wp-content/uploads/2022/07/What-Is-the-Definition-of-Fine-Art-Photography.avif'
    },
    {
      id: 2,
      title: 'Entertainment',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Decor',
      image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Catering',
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop'
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Dinner Eve',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Family Gathering',
      image: 'https://belvederebanquets.com/wp-content/uploads/2024/02/Belvedere-Family-Reunion-Ideas-Create-New-Memories-With-Fun-Activities.jpg'
    },
    {
      id: 3,
      title: 'Lunch Celebrations',
      image: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?w=500&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Marriage Ceremony',
      image: 'https://seasons5.com.au/wp-content/uploads/2024/06/luxury-wedding-trends.jpg'
    },
    {
      id: 5,
      title: 'Magical Ring Ceremony',
      image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=500&h=400&fit=crop'
    }
  ];

  const features = [
    {
      id: 1,
      icon: '🏢',
      title: 'Corporate Events',
      description: 'Meetings, conferences, and seminars'
    },
    {
      id: 2,
      icon: '🎯',
      title: 'Team Building',
      description: 'Engaging activities and workshops'
    },
    {
      id: 3,
      icon: '🏆',
      title: 'Award Ceremonies',
      description: 'Recognition events and galas'
    }
  ];

  const footerSections = [
  {
    title: 'Services',
    links: [
      { text: 'Corporate Events', href: '#' },
      { text: 'Weddings', href: '#' },
      { text: 'Private Parties', href: '#' },
      { text: 'Virtual Events', href: '#' },
      { text: 'Catering', href: '#' }
    ]
  },
  {
    title: 'Platform',
    links: [
      { text: 'Event Planning', href: '/event-planning' }
    ]
  },
  {
    title: 'Company',
    links: [
      { text: 'About Us', href: '#' },
      { text: 'Careers', href: '#' }
    ]
  },
  {
    title: 'Support',
    links: [
      { text: 'Contact Us', href: '/contact-us' },
      { text: 'Refund Policy', href: '/refund-policy' },
      { text: 'Cancellation Policy', href: '/cancellation-policy' }
    ]
  }
];


  const socialMedia = [
    { icon: '📘', label: 'Facebook', href: '#' },
    { icon: '📷', label: 'Instagram', href: '#' },
    { icon: '🐦', label: 'Twitter', href: '#' },
    { icon: '💼', label: 'LinkedIn', href: '#' }
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`nav-container ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav">
          <a href="#" className="logo" onClick={handleLogoClick}>
            <img src={tendrLogo} alt="tendr - We Curate You Celebrate" className="logo-img" />
          </a>
          <div className="nav-buttons">
            <a 
              href="https://wa.me/9211668427" 
              className="contact-icon whatsapp-icon" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
            >
              💬
            </a>
            <a href="/login" className="sign-in" onClick={handleSignInClick}>
              Sign in
            </a>
            <a href="/signup" className="sign-up" onClick={handleSignUpClick}>
              Sign Up
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Experience Event Planning</h1>
            <p className="hero-subtitle">We Curate You Celebrate</p>
            <a href="/plan-event/form" className="cta-button" onClick={handleBookingClick}>
              Booking
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="services-container">
          <h2 className="section-title">Explore Services</h2>
          <div className="services-grid">
            {services.map((service) => (
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
              <a href="#corporate-contact" className="corporate-btn" onClick={handleCorporateClick}>
                Book Corporate Events
              </a>
            </div>
            <div className="corporate-image">
              <div 
                className="corporate-img" 
                style={{ 
                  backgroundImage: `url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=500&fit=crop')` 
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <PlatformFlow />

      {/* Events Gallery */}
      <section className="events-section" id="events">
        <div className="events-container">
          <div className="events-header">
            <p className="events-subtitle">A tour of events we have executed.</p>
            <h2 className="events-title">A Glimpse Into Our Events</h2>
          </div>
          <div className="events-grid">
            {events.map((event) => (
              <div key={event.id} className="event-card">
                <div 
                  className="event-image" 
                  style={{ backgroundImage: `url('${event.image}')` }}
                >
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
          <a href="#start" className="partner-btn" onClick={handlePartnerClick}>
            Start Here
          </a>
          <div className="partner-visual"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
  <div className="footer-container">

    {/* Left Column */}
    <div className="footer-brand">
      <h1>TENDR</h1>
      <p>Empowering your celebrations with curated planning and unforgettable experiences.</p>
      <br />
      <p><strong>Email:</strong> <a href="mailto:contacttendr@gmail.com">contacttendr@gmail.com</a></p>
      <p><strong>Phone:</strong> +91-9211668427</p>
      <p><strong>Address:</strong> DELHI NCR</p>
      <button className="back-to-top">↑ Back to Top</button>
    </div>

    {/* Services */}
    <div className="footer-col">
      <h3>Services</h3>
      <ul>
        <li><a href="#">Corporate Events</a></li>
        <li><a href="#">Photography</a></li>
        <li><a href="#">Private Parties</a></li>
        <li><a href="#">Decoration</a></li>
        <li><a href="#">Catering</a></li>
        <li><a href="#">DJ</a></li>
      </ul>
    </div>

    {/* Platform */}
    <div className="footer-col">
      <h3>Platform</h3>
      <ul>
        <li><a href="#">Event Planning</a></li>
      </ul>
    </div>

    {/* Company */}
    <div className="footer-col">
      <h3>Company</h3>
      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
    </div>

    {/* Support */}
    
  <div className="footer-col">
  <h3>Support</h3>
  <ul>
    <li><a href="/contact-us">Contact Us</a></li>
    <li><a href="/refund-policy">Refund Policy</a></li>
    <li><a href="/cancellation-policy">Cancellation Policy</a></li>
  </ul>
</div>
</div>


  {/* Social Media */}
  <div className="footer-social">
    <a href="#"><i className="icon">📘</i></a>
    <a href="#"><i className="icon">📸</i></a>
    <a href="#"><i className="icon">🐦</i></a>
    <a href="#"><i className="icon">🎥</i></a>
  </div>

  {/* Bottom */}
  <div className="footer-bottom">
    <p>© 2025 tendr. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
  </div>
</footer>

    </div>
  );
};

export default Home;
