import React from 'react';
import { Shield, CheckCircle, Users, X, Clock, Star } from 'lucide-react';
import './TestimonialsAndTrust.css';

const TestimonialsAndTrust = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ali Khan",
      location: "Lahore, Pakistan",
      review: "Earnify helped me earn my first $50 online in just a week! The tasks are simple and payments are always on time.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Sara Ahmed",
      location: "Karachi, Pakistan",
      review: "Simple tasks, real rewards. Love it! I can work whenever I have free time and earn extra income.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c3ed?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Muhammad Hassan",
      location: "Islamabad, Pakistan",
      review: "Amazing platform! I've earned over $200 in just one month. Highly recommended for students like me.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Fatima Sheikh",
      location: "Faisalabad, Pakistan",
      review: "Best decision I made! Earnify provides genuine opportunities to earn money from home. Very trustworthy!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const trustBadges = [
    {
      icon: Shield,
      title: "Secure Payment",
      description: "SSL Encrypted & Safe",
      color: "text-green-500"
    },
    {
      icon: CheckCircle,
      title: "Verified Rewards",
      description: "100% Guaranteed Payouts",
      color: "text-blue-500"
    },
    {
      icon: Users,
      title: "100K+ Users",
      description: "Trusted Community",
      color: "text-purple-500"
    },
    {
      icon: X,
      title: "No Hidden Fees",
      description: "Complete Transparency",
      color: "text-red-500"
    },
    {
      icon: Clock,
      title: "Fast Withdrawals",
      description: "Same Day Processing",
      color: "text-orange-500"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            What Our Users Say About <span className="brand-highlight">Earnify</span>
          </h2>
          <p className="section-description">
            Join thousands of satisfied users who are already earning money with Earnify
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              {/* User Info */}
              <div className="user-info">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="user-avatar"
                />
                <div className="user-details">
                  <h4 className="user-name">{testimonial.name}</h4>
                  <p className="user-location">{testimonial.location}</p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="star-rating">
                {renderStars(testimonial.rating)}
              </div>

              {/* Review Text */}
              <p className="review-text">
                "{testimonial.review}"
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="trust-badges-container">
          <div className="trust-header">
            <h3 className="trust-title">
              Why Trust Earnify?
            </h3>
            <p className="trust-description">
              Your security and satisfaction are our top priorities
            </p>
          </div>

          <div className="trust-badges-grid">
            {trustBadges.map((badge, index) => {
              const IconComponent = badge.icon;
              return (
                <div key={index} className="trust-badge">
                  <div className="badge-icon-container">
                    <div className="badge-icon-wrapper">
                      <IconComponent className={`badge-icon ${badge.color}`} />
                    </div>
                  </div>
                  <h4 className="badge-title">{badge.title}</h4>
                  <p className="badge-description">{badge.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <div className="cta-badge">
            <CheckCircle className="cta-badge-icon" />
            Join 100,000+ Happy Users
          </div>
          <div className="cta-buttons">
            <button className="btn-primary">
              Start Earning Now
            </button>
            <button className="btn-secondary">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAndTrust;