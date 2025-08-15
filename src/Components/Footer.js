import React, { useState } from 'react';
import { Facebook, Instagram, Youtube, Linkedin, X, Star, MapPin, Mail, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const [showReviewPopup, setShowReviewPopup] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewData, setReviewData] = useState({
    name: '',
    email: '',
    location: '',
    review: ''
  });

  const handleNavigation = (page) => {
    console.log(`Navigating to ${page}`);
  };

  const handleInputChange = (e) => {
    setReviewData({
      ...reviewData,
      [e.target.name]: e.target.value
    });
  };

  const handleRatingClick = (starRating) => {
    setRating(starRating);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    console.log('Review submitted:', { ...reviewData, rating });
    // Here you would typically send the data to your backend
    alert('Thank you for your review!');
    setShowReviewPopup(false);
    setRating(0);
    setReviewData({ name: '', email: '', location: '', review: '' });
  };

  const handleCloseModal = () => {
    setShowReviewPopup(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      handleCloseModal();
    }
  };

  return (
    <>
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
                onClick={() => setShowReviewPopup(true)}
              >
                <span>Add your Review</span>
              </button>
              
              {/* Contact Information */}
              <div className="contact-info">
                <div className="contact-item">
                  <Mail size={16} className="contact-icon" />
                  <span className="contact-text">support@earnify.com</span>
                </div>
                <div className="contact-item">
                  <Phone size={16} className="contact-icon" />
                  <span className="contact-text">+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <MapPin size={16} className="contact-icon" />
                  <span className="contact-text">New York, USA</span>
                </div>
              </div>
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

      {/* Review Popup Modal */}
      {showReviewPopup && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Share Your Review</h3>
              <button 
                className="close-button"
                onClick={handleCloseModal}
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="review-form">
              {/* Rating Stars */}
              <div className="rating-section">
                <div className="form-label">Rate your experience:</div>
                <div className="stars-container">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={24}
                      className="star"
                      style={{
                        fill: star <= rating ? '#ffd700' : 'transparent',
                        color: star <= rating ? '#ffd700' : '#ccc'
                      }}
                      onClick={() => handleRatingClick(star)}
                    />
                  ))}
                </div>
              </div>

              {/* Form Fields */}
              <div className="form-group">
                <div className="form-label">Name *</div>
                <input
                  type="text"
                  name="name"
                  value={reviewData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <div className="form-label">Email *</div>
                <input
                  type="email"
                  name="email"
                  value={reviewData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <div className="form-label">Location</div>
                <input
                  type="text"
                  name="location"
                  value={reviewData.location}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="City, Country"
                />
              </div>

              <div className="form-group">
                <div className="form-label">Your Review *</div>
                <textarea
                  name="review"
                  value={reviewData.review}
                  onChange={handleInputChange}
                  className="form-textarea"
                  rows={4}
                  required
                  placeholder="Share your experience with Earnify..."
                />
              </div>

              <div className="form-buttons">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="cancel-button"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmitReview}
                  className={`submit-button ${rating === 0 ? 'disabled' : ''}`}
                  disabled={rating === 0 || !reviewData.name || !reviewData.email || !reviewData.review}
                >
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;