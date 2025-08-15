import React, { useState, useEffect } from 'react';
import './Header.css';
import LoginSignupPopup from '../Components/LoginSignupPopup';
// Import your logo asset
import logo from '../Assests/logo.png.png'; // Update path as needed

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 30); // Reduced threshold for smaller header
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle navigation to different pages
  const handleNavigation = (path) => {
    console.log('Navigate to:', path);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  // Handle Start Earning button click
  const handleStartEarningClick = () => {
    setShowLoginPopup(true);
    setIsMobileMenuOpen(false); // Close mobile menu if open
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
    <>
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
            onClick={handleStartEarningClick}
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
            onClick={handleStartEarningClick}
          >
            Start Earning
          </button>
        </div>
      </div>
    </header>

    {/* Login Popup */}
    {showLoginPopup && (
      <LoginSignupPopup onClose={() => setShowLoginPopup(false)} />
    )}
    </>
  );
};

export default Header;