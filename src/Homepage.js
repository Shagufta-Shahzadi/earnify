import React, { useState, useEffect } from 'react';
import './Homepage.css';
import HomePageComponent from './Components/HomePageComponent';
// Import your assets
import heroImage from '../src/Assests/hero-image.png.png'; // Update path as needed
import logo from '../src/Assests/logo.png.png'; // Update path as needed

const Homepage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Add home-page class to body
    document.body.classList.add('home-page');
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 30); // Reduced threshold for smaller header
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('home-page');
    };
  }, []);

  // Handle navigation to different pages
  const handleNavigation = (path) => {
    console.log('Navigate to:', path);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  // Check if current path is active
  const isActivePage = (path) => {
    return window.location.pathname === path;
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="earnify-home-page new-design">
      {/* Compact Header */}
      <header className={`modern-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo-section">
            <img 
              src={logo} 
              alt="Earnify Logo" 
              className="logo-image"
              onClick={() => handleNavigation('/')}
              style={{ cursor: 'pointer' }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <button 
              className={`nav-button ${isActivePage('/') ? 'active' : ''}`}
              onClick={() => handleNavigation('/')}
            >
              Home
            </button>
            <button 
              className={`nav-button ${isActivePage('/creators') ? 'active' : ''}`}
              onClick={() => handleNavigation('/creators')}
            >
              Tasks
            </button>
            <button 
              className={`nav-button ${isActivePage('/credit-stores') ? 'active' : ''}`}
              onClick={() => handleNavigation('/credit-stores')}
            >
              Rewards
            </button>
            <button 
              className={`nav-button ${isActivePage('/how-it-works') ? 'active' : ''}`}
              onClick={() => handleNavigation('/how-it-works')}
            >
              How it works
            </button>
          </nav>

          {/* Desktop Action Button */}
          <div className="desktop-actions">
            <button 
              className="start-earning-btn"
              onClick={() => handleNavigation('/signup')}
            >
              Start Earning
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            <button 
              className={`mobile-nav-button ${isActivePage('/') ? 'active' : ''}`}
              onClick={() => handleNavigation('/')}
            >
              Home
            </button>
            <button 
              className={`mobile-nav-button ${isActivePage('/creators') ? 'active' : ''}`}
              onClick={() => handleNavigation('/tasks')}
            >
              Tasks
            </button>
            <button 
              className={`mobile-nav-button ${isActivePage('/credit-stores') ? 'active' : ''}`}
              onClick={() => handleNavigation('/credit-stores')}
            >
              Rewards
            </button>
            <button 
              className={`mobile-nav-button ${isActivePage('/how-it-works') ? 'active' : ''}`}
              onClick={() => handleNavigation('/how-it-works')}
            >
              How it works
            </button>
            <button 
              className="mobile-start-earning-btn"
              onClick={() => handleNavigation('/signup')}
            >
              Start Earning
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="modern-hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-left">
              <h1 className="hero-title">
                Earn rewards for <br />
                simple <span className="highlight">online tasks</span>
              </h1>
              <p className="hero-description">
                Complete easy tasks like watching ads, taking surveys, and visiting websites. 
                Start earning coins today and redeem them for real rewards!
              </p>
              <div className="download-buttons">
                <button 
                  className="download-btn google-play"
                  onClick={() => handleNavigation('/download/android')}
                  aria-label="Download from Google Play Store"
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" 
                    alt="Get it on Google Play" 
                  />
                </button>
                <button 
                  className="download-btn app-store"
                  onClick={() => handleNavigation('/download/ios')}
                  aria-label="Download from App Store"
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" 
                    alt="Download on the App Store" 
                  />
                </button>
              </div>
            </div>
            <div className="hero-right">
              <div className="hero-image-container">
                {/* Main hero image */}
                <div className="main-hero-image">
                  <img 
                    src={heroImage} 
                    alt="Hero Character" 
                    className="hero-character-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <HomePageComponent/>
    </div>
  );
};

export default Homepage;