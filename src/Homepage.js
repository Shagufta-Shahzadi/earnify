import React, { useEffect } from 'react';
import './Homepage.css';
import Header from './Components/Header'; // Import the new Header component
import HomePageComponent from './Components/HomePageComponent';
// Import your assets
import heroImage from '../src/Assests/hero-image.png.png'; // Update path as needed
import TestimonialsAndTrust from './Components/TestimonialsAndTrust';
import Footer from './Components/Footer';

const Homepage = () => {
  useEffect(() => {
    // Add home-page class to body
    document.body.classList.add('home-page');
    
    // Cleanup function
    return () => {
      document.body.classList.remove('home-page');
    };
  }, []);

  // Handle navigation to different pages
  const handleNavigation = (path) => {
    console.log('Navigate to:', path);
  };

  return (
    <div className="earnify-home-page new-design">
      {/* Use the separate Header component */}
      <Header />

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
      <TestimonialsAndTrust/>
      <Footer/>
    </div>
  );
};

export default Homepage;