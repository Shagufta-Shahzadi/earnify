import React, { useState, useEffect } from 'react';
import { DollarSign, TrendingUp, Gift, Smartphone } from 'lucide-react';
import './HomePageComponent.css';
import mockupImage from '../Assests/mobile-mockup.png';
import heroImage from '../Assests/banner 2.png';

const HomePageComponent = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-cycle through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('HomePageComponent__animate--visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animateElements = document.querySelectorAll('.HomePageComponent__animate');
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: Smartphone,
      title: "Sign Up & Start",
      description: "Create your account in seconds and start exploring available tasks immediately."
    },
    {
      icon: TrendingUp,
      title: "Complete Simple Tasks",
      description: "Watch ads, take surveys, visit websites, and complete other easy online tasks."
    },
    {
      icon: DollarSign,
      title: "Earn Coins",
      description: "Get rewarded with coins for every task you complete successfully."
    },
    {
      icon: Gift,
      title: "Redeem Rewards",
      description: "Convert your earned coins to real money via PayPal, Easypaisa, or gift cards."
    }
  ];

  return (
    <div className="HomePageComponent">
      {/* How It Works Section */}
      <section className="HomePageComponent__howItWorks HomePageComponent__animate">
        <div className="HomePageComponent__container">
          <h2 className="HomePageComponent__sectionTitle">
            How Earnify Works
          </h2>
          
          <div className="HomePageComponent__gridLayout">
            {/* Left Side - Steps */}
            <div className="HomePageComponent__stepsContainer">
              <div className="HomePageComponent__stepsList">
                {steps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div
                      key={index}
                      onClick={() => setActiveStep(index)}
                      className={`HomePageComponent__stepCard ${
                        activeStep === index ? 'HomePageComponent__stepCard--active' : ''
                      }`}
                    >
                      <div className={`HomePageComponent__stepIcon ${
                        activeStep === index ? 'HomePageComponent__stepIcon--active' : ''
                      }`}>
                        <IconComponent />
                      </div>
                      <div className="HomePageComponent__stepContent">
                        <h3 className="HomePageComponent__stepTitle">
                          {step.title}
                        </h3>
                        <p className="HomePageComponent__stepDescription">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Side - Mobile Mockup Image */}
            <div className="HomePageComponent__imageContainer">
              <div className="HomePageComponent__mockupWrapper">
                {/* Mobile App Mockup */}
                <img 
                  src={mockupImage}
                  alt="Mobile App Mockup"
                  className="HomePageComponent__mockupImage"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Task Categories Preview Section */}
      <section className="HomePageComponent__taskCategories HomePageComponent__animate">
        <div className="HomePageComponent__container">
          <h2 className="HomePageComponent__sectionTitle">
            Task Categories Preview
          </h2>
          
          {/* Task Mobile Mockups Row */}
          <div className="HomePageComponent__videosRow">
            {[
              { title: "Watch Ads", index: 1 },
              { title: "Surveys", index: 2 },
              { title: "Visit Sites", index: 3 },
              { title: "Download Apps", index: 4 }
            ].map((task) => (
              <div 
                key={task.index}
                className="HomePageComponent__videoContainer"
              >
                <h3 className="HomePageComponent__videoTitle">{task.title}</h3>
                <img 
                  src={mockupImage}
                  alt={`${task.title} Mobile Mockup`}
                  className="HomePageComponent__taskMockupImage"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="HomePageComponent__ctaSection HomePageComponent__animate">
        <div className="HomePageComponent__container">
          <div className="HomePageComponent__ctaContent">
            <div className="HomePageComponent__ctaLeft">
              <div className="HomePageComponent__ctaBadge">Powered by Trusted Reward Partners</div>
              <h2 className="HomePageComponent__ctaTitle">
                Start Earning Real Rewards Today
              </h2>
              <p className="HomePageComponent__ctaDescription">
                Join Earnify now and turn your free time into cash, gift cards, and exclusive perks.
                Simple tasks, real income — it's that easy!
              </p>
              <button className="HomePageComponent__ctaButton">
                Join & Start Earning <span className="HomePageComponent__ctaArrow">→</span>
              </button>
            </div>
            <div className="HomePageComponent__ctaRight">
              <img 
                src={heroImage} 
                alt="Professional with laptop" 
                className="HomePageComponent__ctaImage"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePageComponent;