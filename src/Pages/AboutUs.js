import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Eye, Target, Shield, Users, Lightbulb, Globe } from 'lucide-react';
import './AboutUs.css';

// Import your phone mockup asset
import phoneMockup from '../Assests/mobile-mockup.png';

const AboutUs = () => {
  useEffect(() => {
    // Animation observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="aboutus-page">
      {/* Header Component */}
      <Header />
       
      {/* Hero Section */}
      <section className="aboutus-hero-section">
        <div className="aboutus-container">
          <div className="aboutus-hero-content">
            <div className="aboutus-hero-text">
              <h1>About Us</h1>
              <p>
                Earnify was born with one simple mission: to make earning money online
          easy and accessible for everyone. With the rise of digital opportunities,
          we saw the need for a platform that connects users with real rewards
          for completing simple tasks like watching ads, taking surveys, and 
          visiting websites.
              </p>
              <p>
               Think of us as the bridge that makes digital earning a part of
          everyday life. We're built on trust, designed for simplicity, and
          driven to empower users worldwide. Whether it's earning pocket money
          or building passive income, Earnify gives you the freedom to manage
          your earning journey effortlessly—anytime, anywhere.
              </p>
            </div>
  
              <div className="aboutus-phone-mockup">
                <div className="aboutus-phone-container">
                  {/* Imported phone mockup asset */}
                  <img 
                    src={phoneMockup}
                    alt="Phone Mockup" 
                    className="aboutus-phone-asset"
                  />
                </div>
              </div>
              
               
              {/* Background Card with Full Image */}
             
              
                {/* User Image */}
                <div className="aboutus-user-image">
                  <img src="https://media.istockphoto.com/id/1470808049/photo/young-indian-male-employee-freelancer-businessman-stands-with-a-smartphone-in-hand.jpg?s=612x612&w=0&k=20&c=5RPz1A5m5-XMCCfZ1MX7WBFY-Nsl4KQvSTP_szHGFKw=" alt="Happy User" />
                </div>
             
      
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="aboutus-vision-mission">
        <div className="aboutus-container">
          <div className="aboutus-vm-grid">
            
            {/* Left Side - Image */}
            <div className="aboutus-vm-visual animate-on-scroll slide-in-left">
              <div className="aboutus-image-container">
                <img 
                  src="https://d.newsweek.com/en/full/2138885/business-people-working-together.jpg" 
                  alt="Digital Innovation and Technology"
                />
              </div>
            </div>
            
            {/* Right Side - Content */}
            <div className="aboutus-vm-content">
              
              {/* Vision Block */}
              <div className="aboutus-vision-block animate-on-scroll slide-in-right">
                <div className="aboutus-vm-item">
                  <div className="aboutus-icon-circle">
                    <Eye size={28} />
                  </div>
                  <div className="aboutus-vm-text">
                    <h3>Our Vision</h3>
                    <p>To become the global standard for integrating digital assets into everyday life.</p>
                  </div>
                </div>
              </div>
              
              {/* Mission Block */}
              <div className="aboutus-mission-block animate-on-scroll slide-in-right" style={{animationDelay: '0.2s'}}>
                <div className="aboutus-vm-item">
                  <div className="aboutus-icon-circle">
                    <Target size={28} />
                  </div>
                  <div className="aboutus-vm-text">
                    <h3>Our Mission</h3>
                    <p>To eliminate the complexity of managing and using digital assets, providing a simple and secure solution accessible to everyone.</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="aboutus-values-section">
        <div className="aboutus-container">
          {/* Section Header */}
          <div className="aboutus-values-header animate-on-scroll">
            <h2>Our Values</h2>
            <h3>What Drives Us</h3>
            <p>
              At Earnify, we're all about pushing boundaries to make earning online smarter and
              more accessible. With a focus on trust, simplicity, and global connections,
              we're redefining how people interact with digital opportunities.
            </p>
            <p className="aboutus-values-subtitle">
              We center our company around four main values:
            </p>
          </div>

          {/* Values Grid */}
          <div className="aboutus-values-grid">
            
            {/* Trust Card */}
            <div className="aboutus-value-card animate-on-scroll" style={{animationDelay: '0.1s'}}>
              <div className="aboutus-value-icon">
                <Shield size={28} />
              </div>
              <h4>Trust</h4>
              <p>Secure, stable, and reliable—your assets are in safe hands.</p>
            </div>

            {/* Accessibility Card */}
            <div className="aboutus-value-card animate-on-scroll" style={{animationDelay: '0.2s'}}>
              <div className="aboutus-value-icon">
                <Users size={28} />
              </div>
              <h4>Accessibility</h4>
              <p>Simple, intuitive solutions anyone can use.</p>
            </div>

            {/* Innovation Card */}
            <div className="aboutus-value-card animate-on-scroll" style={{animationDelay: '0.3s'}}>
              <div className="aboutus-value-icon">
                <Lightbulb size={28} />
              </div>
              <h4>Innovation</h4>
              <p>Always evolving with cutting-edge technology.</p>
            </div>

            {/* Global Reach Card */}
            <div className="aboutus-value-card animate-on-scroll" style={{animationDelay: '0.4s'}}>
              <div className="aboutus-value-icon">
                <Globe size={28} />
              </div>
              <h4>Global Reach</h4>
              <p>Tailored services for users everywhere.</p>
            </div>

          </div>
        </div>
      </section>
      
      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default AboutUs;