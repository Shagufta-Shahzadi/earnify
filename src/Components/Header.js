import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import LoginSignupPopup from '../Components/LoginSignupPopup';
// Import your logo asset
import logo from '../Assests/logo.png.png'; // Update path as needed

const Header = () => {
  // Remove isScrolled state as we don't want scroll effects
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showPortalDropdown, setShowPortalDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Remove scroll effect listener entirely
  // The header will remain fixed and unchanged

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowPortalDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle navigation to different pages
  const handleNavigation = (path) => {
    // Close all dropdowns and menus before navigation
    setShowPortalDropdown(false);
    setIsMobileMenuOpen(false);
    
    // If using React Router, you should use navigate() or Link components
    // For now, using window.location for navigation
    window.location.href = path;
  };

  // Handle Start Earning button click - toggle dropdown
  const handleStartEarningClick = () => {
    setShowPortalDropdown(!showPortalDropdown);
    setIsMobileMenuOpen(false); // Close mobile menu if open
  };

  // Handle portal selection
  const handlePortalSelection = (portalType) => {
    setShowPortalDropdown(false);
    setIsMobileMenuOpen(false); // Close mobile menu
    
    if (portalType === 'admin') {
      // Navigate to Admin Dashboard
      window.location.href = '/AdminDashboard';
    } else if (portalType === 'user') {
      // Show login popup for user portal
      setShowLoginPopup(true);
    }
  };

  // Check if current path is active
  const isActivePage = (path) => {
    return window.location.pathname === path;
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setShowPortalDropdown(false); // Close dropdown when opening mobile menu
  };

  // Close all menus when component unmounts or page changes
  useEffect(() => {
    return () => {
      setIsMobileMenuOpen(false);
      setShowPortalDropdown(false);
    };
  }, []);

  return (
    <>
    {/* Header without scroll class - always same appearance */}
    <header className="modern-header">
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
            className={`nav-button ${isActivePage('/how-it-works') ? 'active' : ''}`}
            onClick={() => handleNavigation('/how-it-works')}
          >
            How it works
          </button>
          <button 
            className={`nav-button ${isActivePage('/AboutUs') ? 'active' : ''}`}
            onClick={() => handleNavigation('/AboutUs')}
          >
            About Us
          </button>
           <button 
            className={`nav-button ${isActivePage('/contact') ? 'active' : ''}`}
            onClick={() => handleNavigation('/contact')}
          >
            Contact
          </button>
        </nav>

        {/* Desktop Action Button with Dropdown */}
        <div className="desktop-actions" ref={dropdownRef}>
          <button 
            className="start-earning-btn"
            onClick={handleStartEarningClick}
          >
            Start Earning
          </button>

          {/* Portal Selection Dropdown */}
          {showPortalDropdown && (
            <div className="portal-dropdown">
              <button 
                className="portal-option user-portal"
                onClick={() => handlePortalSelection('user')}
              >
                <div className="portal-info">
                  <span className="portal-title">User Portal</span>
                </div>
              </button>
              <button 
                className="portal-option admin-portal"
                onClick={() => handlePortalSelection('admin')}
              >
                <div className="portal-info">
                  <span className="portal-title">Admin Portal</span>
                </div>
              </button>
            </div>
          )}
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
            className={`mobile-nav-button ${isActivePage('/tasks') ? 'active' : ''}`}
            onClick={() => handleNavigation('/tasks')}
          >
            Tasks
          </button>
          <button 
            className={`mobile-nav-button ${isActivePage('/rewards') ? 'active' : ''}`}
            onClick={() => handleNavigation('/rewards')}
          >
            Rewards
          </button>
          <button 
            className={`mobile-nav-button ${isActivePage('/how-it-works') ? 'active' : ''}`}
            onClick={() => handleNavigation('/how-it-works')}
          >
            How it works
          </button>

          {/* Mobile Portal Options */}
          <div className="mobile-portal-section">
            <h4 className="mobile-portal-title">Choose Portal</h4>
            <button 
              className="mobile-portal-btn user-portal"
              onClick={() => handlePortalSelection('user')}
            >
              👤 User Portal
            </button>
            <button 
              className="mobile-portal-btn admin-portal"
              onClick={() => handlePortalSelection('admin')}
            >
              ⚙️ Admin Portal
            </button>
          </div>
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