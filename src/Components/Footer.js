import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const handleNavigation = (page) => {
    console.log(`Navigating to ${page}`);
  };

  return (
    <footer className="custom-footer">
      <div className="footer-container">
        
        {/* Left Section - Brand Info */}
        <div className="footer-left">
          <div className="footer-logo">
            <h3>Earnify</h3>
          </div>
          <div className="footer-description">
            <p>Earnify helps you turn your free time into real rewards. Complete tasks, earn coins, and redeem for cash, gift cards, or exclusive perks.</p>
          </div>
          <div className="footer-social">
            <h4 className="footer-social-title">Follow Us</h4>
            <div className="footer-social-icons">
              <div 
                className="footer-social-icon" 
                onClick={() => window.open('https://facebook.com', '_blank')}
                role="button"
                tabIndex={0}
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </div>
              <div 
                className="footer-social-icon" 
                onClick={() => window.open('https://instagram.com', '_blank')}
                role="button"
                tabIndex={0}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </div>
              <div 
                className="footer-social-icon" 
                onClick={() => window.open('https://youtube.com', '_blank')}
                role="button"
                tabIndex={0}
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </div>
              <div 
                className="footer-social-icon" 
                onClick={() => window.open('https://linkedin.com', '_blank')}
                role="button"
                tabIndex={0}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="footer-middle">
          <div className="footer-services">
            <h4 className="footer-links-title">Features</h4>
            <ul className="footer-links">
              <li><button className="footer-link-btn" onClick={() => handleNavigation('tasks')}>Daily Tasks</button></li>
              <li><button className="footer-link-btn" onClick={() => handleNavigation('rewards')}>Rewards & Redemption</button></li>
              <li><button className="footer-link-btn" onClick={() => handleNavigation('referrals')}>Referral Program</button></li>
              <li><button className="footer-link-btn" onClick={() => handleNavigation('leaderboard')}>Leaderboard</button></li>
            </ul>
          </div>
          <div className="footer-company">
            <h4 className="footer-links-title">Company</h4>
            <ul className="footer-links">
              <li><button className="footer-link-btn" onClick={() => handleNavigation('about')}>About Us</button></li>
              <li><button className="footer-link-btn" onClick={() => handleNavigation('contact')}>Contact</button></li>
              <li><button className="footer-link-btn" onClick={() => handleNavigation('privacy')}>Privacy Policy</button></li>
              <li><button className="footer-link-btn" onClick={() => handleNavigation('terms')}>Terms & Conditions</button></li>
            </ul>
          </div>
        </div>

        {/* Right Section - Contact CTA */}
        <div className="footer-right">
          <h4 className="footer-right-title">Get Started</h4>
          <div className="footer-contact">
            <p>Join thousands of users earning rewards every day.</p>
            <button 
              className="footer-contact-btn"
              onClick={() => handleNavigation('signup')}
            >
              Sign Up Now
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; 2025 Earnify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;