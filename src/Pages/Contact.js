import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, X } from 'lucide-react';
import './Contact.css';

const ContactUs = ({ isOpen = true, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
    if (onClose) onClose();
  };

  const handleClose = () => {
    if (onClose) onClose();
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen && onClose) return null;

  return (
    <div className="contact-modal-overlay" onClick={handleBackgroundClick}>
      {/* Background with Overlay */}
      <div className="contact-background">
        <div className="contact-overlay"></div>
      </div>

      {/* Close Button */}
      <button className="modal-close-button" onClick={handleClose}>
        <X className="close-icon" />
      </button>

      {/* Desktop Layout */}
      <div className="desktop-layout">
        <div className="contact-container">
          
          {/* Left Side - Contact Info */}
          <div className="contact-info">
            <div className="contact-header">
              <h1 className="contact-title">Contact Us</h1>
              <p className="contact-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                et dolore magna aliqua.
              </p>
            </div>

            <div className="contact-details">
              {/* Phone */}
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone className="icon" />
                </div>
                <div className="contact-text">
                  <p className="contact-label">Phone</p>
                  <p className="contact-value">+923-4996-6954-8505</p>
                </div>
              </div>

              {/* Email */}
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail className="icon" />
                </div>
                <div className="contact-text">
                  <p className="contact-label">Email</p>
                  <p className="contact-value">contact@earnify.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin className="icon" />
                </div>
                <div className="contact-text">
                  <p className="contact-label">Address</p>
                  <p className="contact-value">
                    Office # 123, IT Tower,<br />Gulberg III, Lahore
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Compact Contact Form */}
          <div className="contact-form-container compact">
            <h2 className="form-title">Send Message</h2>
            
            <div className="contact-form">
              {/* Name Field */}
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input compact"
                  placeholder="Full Name"
                />
              </div>

              {/* Email Field */}
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input compact"
                  placeholder="Email Address"
                />
              </div>

              {/* Message Field */}
              <div className="form-group">
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea compact"
                  placeholder="Your message..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button onClick={handleSubmit} className="submit-button compact">
                <Send className="button-icon" />
                <span>Send</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="mobile-layout">
        {/* Mobile Header */}
        <div className="mobile-header">
          <h1 className="mobile-title">Contact Us</h1>
          <p className="mobile-description">
            Get in touch with us for any queries.
          </p>
        </div>

        {/* Mobile Contact Cards */}
        <div className="mobile-contact-cards">
          <div className="mobile-contact-card">
            <Phone className="mobile-icon" />
            <div className="mobile-contact-info">
              <p className="mobile-contact-value">+923-4996-6954-8505</p>
              <p className="mobile-contact-label">Phone</p>
            </div>
          </div>

          <div className="mobile-contact-card">
            <Mail className="mobile-icon" />
            <div className="mobile-contact-info">
              <p className="mobile-contact-value">contact@earnify.com</p>
              <p className="mobile-contact-label">Email</p>
            </div>
          </div>
        </div>

        {/* Mobile Compact Form */}
        <div className="mobile-form-container">
          <div className="mobile-form compact">
            <h2 className="mobile-form-title">Send Message</h2>
            
            <div className="mobile-form-fields">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mobile-input"
                placeholder="Full Name"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mobile-input"
                placeholder="Email"
              />

              <textarea
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleInputChange}
                className="mobile-textarea"
                placeholder="Your message..."
              ></textarea>

              <button onClick={handleSubmit} className="mobile-submit-button">
                <Send className="mobile-button-icon" />
                <span>Send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;