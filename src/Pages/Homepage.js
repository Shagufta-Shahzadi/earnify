import React, { useEffect } from 'react';
import './Homepage.css';
import Header from '../Components/Header';
import HomePageComponent from '../Components/HomePageComponent';
import heroImage from '../Assests/hero-image.png.png';
import TestimonialsAndTrust from '../Components/TestimonialsAndTrust';
import Footer from '../Components/Footer';

const Homepage = () => {
  useEffect(() => {
    // Add home-page class to body
    document.body.classList.add('homepage-body');
    
    // Cleanup function
    return () => {
      document.body.classList.remove('homepage-body');
    };
  }, []);

  // Handle navigation to different pages
  const handleNavigation = (path) => {
    console.log('Navigate to:', path);
  };

  return (
    <div className="homepage-earnify-container homepage-new-design">
      {/* Use the separate Header component */}
      <Header />

      {/* Hero Section */}
      <section className="homepage-modern-hero-section">
        <div className="homepage-hero-container">
          <div className="homepage-hero-content">
            <div className="homepage-hero-left">
              <h1 className="homepage-hero-title">
                Earn rewards for <br />
                simple <span className="homepage-highlight">online tasks</span>
              </h1>
              <p className="homepage-hero-description">
                Complete easy tasks like watching ads, taking surveys, and visiting websites. 
                Start earning coins today and redeem them for real rewards!
              </p>
              <div className="homepage-download-buttons">
                <button
                  className="homepage-download-btn homepage-google-play"
                  onClick={() => handleNavigation('/download/android')}
                  aria-label="Download from Google Play Store"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                    alt="Get it on Google Play"
                  />
                </button>
                <button
                  className="homepage-download-btn homepage-app-store"
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
            <div className="homepage-hero-right">
              <div className="homepage-hero-image-container">
                {/* Main hero image */}
                <div className="homepage-main-hero-image">
                  <img
                    src={heroImage}
                    alt="Hero Character"
                    className="homepage-hero-character-img"
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