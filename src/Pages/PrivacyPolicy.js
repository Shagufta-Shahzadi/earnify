import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import {  Eye, Lock, Database,  Globe, FileText, Home, ChevronRight, Shield } from 'lucide-react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      {/* Import Header Component */}
      <Header />

      {/* Breadcrumb Navigation */}
      <div className="breadcrumb-container">
        <div className="breadcrumb">
          <Home className="w-4 h-4" />
          <span className="breadcrumb-link">Home</span>
          <ChevronRight className="w-4 h-4" />
          <span>Privacy Policy</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-container">
          <div className="hero-line"></div>
          <div className="hero-content">
            
            <h1 className="hero-title">Privacy Policy</h1>
          </div>
        </div>
      </div>

      {/* Main Content - All in one section */}
      <div className="content-container">
        {/* All content in single card */}
        <div className="content-card">
          <p className="intro-text">
            This notice provides Earnify Technologies' (the Company) privacy policy regarding the nature, 
            purpose, use, and sharing of any Personally Identifiable Information (PII) collected via this website. Our 
            privacy policy explains our information practices when you provide PII to us, whether collected online or 
            offline, or when you visit us online to browse, obtain information, or conduct a transaction. PII may 
            include: your name, email, mailing and/or home address, phone numbers, or other information that 
            identifies you personally. We do not require you to register or provide personal information to visit our 
            website.
          </p>

          <p className="body-text">
            The PII you provide on an Earnify website will be used only for its intended purpose. We will protect 
            your information consistent with the principles of the <a href="https://www.justice.gov/opcl/privacy-act-1974" className="text-link">Privacy Act of 1974</a>, the <a href="https://www.nadra.gov.pk/personal-data-protection-bill-2023/" className="text-link">Personal Data Protection Act
            of 2023</a>, and the <a href="https://moitt.gov.pk/SiteImage/Misc/files/Personal%20Data%20Protection%20Bill%202023.pdf" className="text-link">Digital Rights Act</a>.
          </p>

          <h2 className="section-header">
            Personally Identifiable Information
          </h2>
          
          <p className="body-text">
            As a general rule, Earnify does not collect PII about you when you visit our website, unless you 
            choose to provide such information to us. Submitting PII through our website is voluntary. By doing so, 
            you are giving Earnify your permission to use the information for the intended purpose. If you do not 
            want to give Earnify permission to use your information, simply do not provide it. However, not 
            providing certain information may result in Earnify's inability to provide you with the information or 
            services you desire.
          </p>

          <p className="body-text">
            If you choose to provide us with PII on an Earnify website, through such methods as completing a web 
            form, task completion, or survey participation, we will use that information to help us provide you the information or 
            service you have requested or to respond to your message. The information we may collect includes: your name, email, mailing and/or home address, phone numbers, payment information for reward processing, demographic information such as age, gender, and location, device and usage information including IP address, browser type, and operating system, as well as task completion data and performance metrics.
          </p>

          <h3 className="section-header-with-icon">
            <Database className="section-icon blue" />
            How We Collect Information
          </h3>
          <p className="body-text">
            We collect information through various methods including account registration when you create an account to access our services, task completion where data is collected during survey participation and task execution, payment processing for reward distribution and verification, and website analytics through automatic collection using cookies and tracking technologies.
          </p>

          <h3 className="section-header-with-icon">
            <Eye className="section-icon green" />
            How We Use Your Information
          </h3>
          <p className="body-text">
            Your information is used for the following purposes: to provide and maintain our services, to process payments and distribute rewards, to communicate with you about your account and activities, to improve our platform and develop new features, and to comply with legal obligations and prevent fraud.
          </p>

          <h3 className="section-header-with-icon">
            <Lock className="section-icon red" />
            Data Security & Protection
          </h3>
          <p className="body-text">
            We implement appropriate technical and organizational security measures to protect your personal 
            information against unauthorized access, alteration, disclosure, or destruction. Our security measures include SSL encryption for data transmission, secure server infrastructure and regular security audits, access controls and employee training programs, and regular data backups and disaster recovery procedures.
          </p>

          <h3 className="section-header-with-icon">
            <Globe className="section-icon purple" />
            Information Sharing & Disclosure
          </h3>
          <p className="body-text">
            Earnify does not sell, rent, or lease your personal information to third parties. We may share 
            your information only in the following circumstances: with trusted service providers who assist in providing our services such as payment processors and analytics providers, when required by law or to protect our rights and the safety of our users, and in the event of a merger, acquisition, or sale of assets.
          </p>

          <h3 className="section-header-with-icon">
            <FileText className="section-icon indigo" />
            Your Rights & Choices
          </h3>
          <p className="body-text">
            You have the following rights regarding your personal information: Access to request a copy of your personal data, Correction to update or correct inaccurate information, Deletion to request removal of your data, Portability to export your data in a portable format, the ability to Opt-out and withdraw consent for marketing communications, and Restriction to limit how we process your information.
          </p>

          <h3 className="section-header-with-icon">
            <Shield className="section-icon blue" />
            Contact Information
          </h3>
          <p className="body-text">
            If you have questions about this privacy policy or our data practices, please contact us at privacy@earnify.pk. Our office is located at Office # 123, IT Tower, Gulberg III, Lahore, Punjab, Pakistan. This privacy policy was last updated on August 17, 2025.
          </p>

          <p className="body-text">
            These terms and conditions are governed by Pakistani law and are subject to the exclusive jurisdiction of Pakistani courts. Earnify Technologies (Pvt) Ltd. is registered under company registration number 0123456-7.
          </p>
        </div>
      </div>

      {/* Import Footer Component */}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;