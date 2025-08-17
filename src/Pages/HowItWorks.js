import React, { useState, useEffect } from 'react';
import './HowItWorks.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import LoginSignupPopup from '../Components/LoginSignupPopup';

// Step Component with Animation
const HiwStepCard = ({ stepNumber, title, description, icon, color, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 200);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById(`step-${index}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [index]);

  return (
    <div 
      id={`step-${index}`}
      className={`hiw-step-card ${isVisible ? 'animate-fade-in-up' : ''}`}
    >
      <div className={`hiw-step-icon ${color}`}>
        <div className="hiw-step-number">{stepNumber}</div>
        <div className="hiw-step-icon-symbol">{icon}</div>
      </div>
      <div className="hiw-step-content">
        <h3 className="hiw-step-title">{title}</h3>
        <p className="hiw-step-description">{description}</p>
      </div>
    </div>
  );
};

// Task Type Component with Start Earning Button
const HiwTaskTypeCard = ({ icon, title, description, reward, time, index, onStartEarning }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById(`task-${index}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [index]);

  return (
    <div 
      id={`task-${index}`}
      className={`hiw-task-type-card ${isVisible ? 'animate-fade-in-up' : ''}`}
    >
      <div className="hiw-task-icon">
        {icon}
      </div>
      <div className="hiw-task-info">
        <h4 className="hiw-task-title">{title}</h4>
        <p className="hiw-task-description">{description}</p>
        <div className="hiw-task-details">
          <span className="hiw-task-reward">💰 {reward} coins</span>
          <span className="hiw-task-time">⏱️ {time}</span>
        </div>
        <button 
          className="hiw-start-earning-btn"
          onClick={onStartEarning}
        >
          Start Earning
        </button>
      </div>
    </div>
  );
};

// Compact Earning Calculator Component
const HiwEarningCalculator = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('earning-calculator');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      id="earning-calculator"
      className={`hiw-earning-calculator-compact ${isVisible ? 'animate-fade-in' : ''}`}
    >
      <h3>Daily Earning Potential</h3>
     <div className="hiw-calculator-compact-grid">
  <div className="hiw-calc-compact-item">
    <div className="hiw-calc-compact-number">50</div>
    <div className="hiw-calc-compact-label">Video Ads</div>
    <div className="hiw-calc-compact-value">500 coins</div>
  </div>
  <div className="hiw-calc-compact-item">
    <div className="hiw-calc-compact-number">10</div>
    <div className="hiw-calc-compact-label">Surveys</div>
    <div className="hiw-calc-compact-value">1000 coins</div>
  </div>
  <div className="hiw-calc-compact-item">
    <div className="hiw-calc-compact-number">20</div>
    <div className="hiw-calc-compact-label">Website Visits</div>
    <div className="hiw-calc-compact-value">300 coins</div>
  </div>
  <div className="hiw-calc-compact-item">
    <div className="hiw-calc-compact-number">5</div>
    <div className="hiw-calc-compact-label">App Downloads</div>
    <div className="hiw-calc-compact-value">250 coins</div>
  </div>
  <div className="hiw-calc-compact-total">
    <div className="hiw-total-coins">Total: 2050 coins/day</div>
    <div className="hiw-total-money">≈ $6-12 daily</div>
  </div>
</div>
    </div>
  );
};

// FAQ Component with Plus Icon
const HiwFAQItem = ({ question, answer, isOpen, onToggle, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById(`faq-${index}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [index]);

  return (
    <div 
      id={`faq-${index}`}
      className={`hiw-faq-item ${isVisible ? 'animate-fade-in-left' : ''}`}
    >
      <button className="hiw-faq-question" onClick={onToggle}>
        <span>{question}</span>
        <span className={`hiw-faq-plus ${isOpen ? 'hiw-open' : ''}`}>+</span>
      </button>
      {isOpen && (
        <div className="hiw-faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

// Updated Requirements Component with Modern Design
const HiwRequirementsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('requirements-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const requirements = [
    {
      icon: "📱",
      title: "Mobile Device",
      description: "A smartphone or tablet with internet connectivity to access tasks and earn rewards on the go."
    },
    {
      icon: "🌐",
      title: "Stable Internet",
      description: "Reliable internet connection to ensure smooth task completion and real-time reward tracking."
    },
    {
      icon: "⏰",
      title: "Spare Time",
      description: "Just a few minutes daily to complete simple tasks and maximize your earning potential."
    },
    {
      icon: "✅",
      title: "Basic Skills",
      description: "Simple reading and clicking abilities - no special technical knowledge required to get started."
    },
    {
      icon: "🎯",
      title: "Focus & Attention",
      description: "Ability to follow simple instructions and complete tasks accurately for better rewards."
    },
    {
      icon: "💳",
      title: "Payment Method",
      description: "Valid payment account (PayPal, bank account) to receive your earned rewards and bonuses."
    }
  ];

  const gradients = [
    "linear-gradient(135deg, #667eea, #764ba2)",
    "linear-gradient(135deg, #f093fb, #f5576c)",
    "linear-gradient(135deg, #4facfe, #00f2fe)",
    "linear-gradient(135deg, #43e97b, #38f9d7)",
    "linear-gradient(135deg, #fa709a, #fee140)",
    "linear-gradient(135deg, #a8edea, #fed6e3)"
  ];

  return (
    <section 
      id="requirements-section"
      className="hiw-requirements-section"
    >
      <div className="hiw-container">
        <div className="hiw-section-header">
          <h2 className="hiw-section-title">What You Need to Get Started</h2>
          <p className="hiw-section-subtitle">Simple requirements to begin your earning journey. No complex setup or special equipment needed.</p>
        </div>
        <div className="hiw-requirements-grid">
          {requirements.map((requirement, index) => (
            <div 
              key={index}
              className={`hiw-requirement-item ${isVisible ? 'animate-fade-in-up' : ''}`}
              style={{ 
                animationDelay: `${index * 150}ms`,
                '--gradient': gradients[index % gradients.length]
              }}
            >
              <div 
                className="hiw-req-icon"
                style={{
                  background: gradients[index % gradients.length]
                }}
              >
                <span className="icon-emoji">{requirement.icon}</span>
              </div>
              <h4>{requirement.title}</h4>
              <p>{requirement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main How It Works Page Component
const HowItWorks = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    // Hero animation on page load
    setTimeout(() => setHeroVisible(true), 300);
    
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Check if user is logged in (you'll need to implement this logic)
  const isLoggedIn = () => {
    // Check localStorage, context, or your authentication state
    return localStorage.getItem('userToken') !== null;
  };

  // Handle Start Earning button click
  const handleStartEarning = () => {
    if (isLoggedIn()) {
      // Navigate to dashboard
      window.location.href = '/dashboard';
    } else {
      // Show login popup
      setShowLoginPopup(true);
    }
  };

  const steps = [
    {
      stepNumber: "01",
      title: "Sign Up & Verify",
      description: "Create your free account in just 2 minutes. Verify your email to unlock all earning opportunities.",
      icon: "👤",
      color: "hiw-step-blue"
    },
    {
      stepNumber: "02", 
      title: "Complete Tasks",
      description: "Choose from video ads, surveys, or website visits. Each task takes just a few minutes to complete.",
      icon: "📋",
      color: "hiw-step-green"
    },
    {
      stepNumber: "03",
      title: "Earn Coins",
      description: "Get rewarded instantly after completing each task. Watch your coin balance grow every day!",
      icon: "💰",
      color: "hiw-step-gold"
    },
    {
      stepNumber: "04",
      title: "Redeem Rewards",
      description: "Cash out your earnings via PayPal, Easypaisa, or gift cards. Minimum withdrawal is just 1000 coins.",
      icon: "🎁",
      color: "hiw-step-purple"
    }
  ];

  const taskTypes = [
    {
      icon: "📺",
      title: "Watch Video Ads",
      description: "Watch short 15-30 second advertisements and earn coins instantly.",
      reward: "10-20",
      time: "30 seconds"
    },
    {
      icon: "📊",
      title: "Take Surveys",
      description: "Share your opinions on products and services through simple questionnaires.",
      reward: "50-200",
      time: "5-15 mins"
    },
    {
      icon: "🌐",
      title: "Visit Websites",
      description: "Browse partner websites for a specified time and earn passive income.",
      reward: "5-15",
      time: "1-3 mins"
    },
    {
      icon: "🎯",
      title: "Daily Bonuses",
      description: "Complete daily check-ins and special tasks for bonus rewards.",
      reward: "25-100",
      time: "1 min"
    }
  ];

  const faqs = [
    {
      question: "How much can I earn per day?",
      answer: "You can earn $5-15 per day depending on how many tasks you complete. Active users typically earn 1000-3000 coins daily."
    },
    {
      question: "When do I get paid?",
      answer: "Coins are added to your account instantly after task completion. Withdrawals are processed within 24-48 hours."
    },
    {
      question: "What's the minimum withdrawal amount?",
      answer: "The minimum withdrawal is 1000 coins (≈$2-3) for most payment methods including PayPal and Easypaisa."
    },
    {
      question: "Is Earnify available worldwide?",
      answer: "Yes! Earnify is available globally, with special focus on Pakistan, India, and other developing markets."
    },
    {
      question: "Are there any fees for withdrawals?",
      answer: "No! We don't charge any fees for withdrawals. You get 100% of your earned amount."
    },
    {
      question: "How do I increase my earnings?",
      answer: "Complete more tasks daily, refer friends (earn 10% of their earnings), and participate in special bonus events."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="hiw-page">
      <Header />
      
      {/* Hero Section */}
      <section className="hiw-hero-section">
        <div className="hiw-hero-overlay"></div>
        <div className="hiw-hero-container">
          <div className={`hiw-hero-content ${heroVisible ? 'animate-fade-in-up' : ''}`}>
            <h1 className="hiw-hero-title">
              How <span className="hiw-highlight">Earnify</span> Works
            </h1>
            <p className="hiw-hero-subtitle">
              Learn how to start earning money online with simple tasks. 
              It's easier than you think!
            </p>
          </div>
          <div className={`hiw-hero-stats ${heroVisible ? 'animate-fade-in-up' : ''}`}>
            <div className="hiw-stat-item">
              <div className="hiw-stat-number">50K+</div>
              <div className="hiw-stat-label">Active Users</div>
            </div>
            <div className="hiw-stat-item">
              <div className="hiw-stat-number">$500K+</div>
              <div className="hiw-stat-label">Paid Out</div>
            </div>
            <div className="hiw-stat-item">
              <div className="hiw-stat-number">1M+</div>
              <div className="hiw-stat-label">Tasks Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="hiw-steps-section">
        <div className="hiw-container">
          <div className="hiw-section-header">
            <h2 className="hiw-section-title">Simple 4-Step Process</h2>
            <p className="hiw-section-subtitle">Start earning in minutes with our easy process</p>
          </div>
          <div className="hiw-steps-grid">
            {steps.map((step, index) => (
              <HiwStepCard key={index} {...step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Task Types Section */}
      <section className="hiw-task-types-section">
        <div className="hiw-container">
          <div className="hiw-section-header">
            <h2 className="hiw-section-title">Types of Tasks Available</h2>
            <p className="hiw-section-subtitle">Choose from various earning opportunities</p>
          </div>
          <div className="hiw-task-types-grid">
            {taskTypes.map((task, index) => (
              <HiwTaskTypeCard 
                key={index} 
                {...task} 
                index={index} 
                onStartEarning={handleStartEarning}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Earning Calculator Section */}
      <section className="hiw-calculator-section">
        <div className="hiw-container">
          <div className="hiw-section-header">

          </div>
          <HiwEarningCalculator />
        </div>
      </section>

      {/* Requirements Section */}
      <HiwRequirementsSection />

      {/* FAQ Section */}
      <section className="hiw-faq-section">
        <div className="hiw-container">
          <div className="hiw-section-header">
            <h2 className="hiw-section-title">Frequently Asked Questions</h2>
            <p className="hiw-section-subtitle">Get answers to common questions</p>
          </div>
          <div className="hiw-faq-container">
            {faqs.map((faq, index) => (
              <HiwFAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onToggle={() => toggleFAQ(index)}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="hiw-cta-section">
        <div className="hiw-cta-overlay"></div>
        <div className="hiw-container">
          <div className="hiw-cta-content">
            <h2 className="hiw-cta-title">Ready to Start Earning?</h2>
            <p className="hiw-cta-subtitle">Join thousands of users already making money with Earnify</p>
            <div className="hiw-cta-buttons">
              <button className="hiw-btn-primary" onClick={handleStartEarning}>
                Start Earning Now
              </button>
              <button className="hiw-btn-secondary">Download App</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Login Popup */}
      {showLoginPopup && (
        <LoginSignupPopup onClose={() => setShowLoginPopup(false)} />
      )}
    </div>
  );
};

export default HowItWorks;