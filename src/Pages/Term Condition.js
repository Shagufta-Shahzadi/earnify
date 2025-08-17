import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Scale, Users, CreditCard, AlertTriangle, FileText, Home, ChevronRight, Shield, Lock } from 'lucide-react';
import './Term Condition.css';

const TermsConditions = () => {
  return (
    <div className="terms-conditions">
      {/* Import Header Component */}
      <Header />

      {/* Breadcrumb Navigation */}
      <div className="breadcrumb-container">
        <div className="breadcrumb">
          <Home className="w-4 h-4" />
          <span className="breadcrumb-link">Home</span>
          <ChevronRight className="w-4 h-4" />
          <span>Terms & Conditions</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-container">
          <div className="hero-line"></div>
          <div className="hero-content">
            <h1 className="hero-title">Terms & Conditions</h1>
          </div>
        </div>
      </div>

      {/* Main Content - All in one section */}
      <div className="content-container">
        {/* All content in single card */}
        <div className="content-card">
          <p className="intro-text">
            Welcome to Earnify Technologies' platform. These Terms and Conditions ("Terms") govern your use of our 
            website, services, and platform (collectively, the "Service") operated by Earnify Technologies (Pvt) Ltd. 
            ("Company," "we," "our," or "us"). By accessing or using our Service, you agree to be bound by these Terms. 
            If you disagree with any part of these terms, then you may not access the Service.
          </p>

          <p className="body-text">
            These Terms are governed by Pakistani law and comply with the <a href="https://www.secp.gov.pk/document/companies-act-2017/" className="text-link">Companies Act 2017</a>, 
            the <a href="https://moitt.gov.pk/SiteImage/Misc/files/Personal%20Data%20Protection%20Bill%202023.pdf" className="text-link">Digital Rights Act</a>, and other applicable Pakistani legislation. 
            By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
          </p>

          <h2 className="section-header">
            Acceptance of Terms
          </h2>
          
          <p className="body-text">
            By creating an account, accessing, or using any part of our Service, you acknowledge that you have read, 
            understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these 
            Terms, you must not use our Service. We reserve the right to modify these Terms at any time, and such 
            modifications will be effective immediately upon posting on our website.
          </p>

          <p className="body-text">
            You must be at least 18 years old to use our Service. By using our Service, you represent and warrant 
            that you are at least 18 years old and have the legal capacity to enter into these Terms. If you are 
            using our Service on behalf of an organization, you represent that you have the authority to bind that 
            organization to these Terms.
          </p>

          <h3 className="section-header-with-icon">
            <Users className="section-icon blue" />
            User Accounts and Registration
          </h3>
          <p className="body-text">
            To access certain features of our Service, you must register for an account. You agree to provide accurate, 
            current, and complete information during registration and to update such information to keep it accurate, 
            current, and complete. You are responsible for safeguarding your account credentials and for all activities 
            that occur under your account. You must immediately notify us of any unauthorized use of your account.
          </p>

          <h3 className="section-header-with-icon">
            <Scale className="section-icon green" />
            User Responsibilities and Conduct
          </h3>
          <p className="body-text">
            You agree to use our Service only for lawful purposes and in accordance with these Terms. You are prohibited 
            from using our Service to violate any applicable laws, regulations, or third-party rights, engage in fraudulent 
            activities or misrepresent information, attempt to gain unauthorized access to our systems or other users' accounts, 
            interfere with or disrupt our Service or servers, and upload or transmit viruses, malware, or other harmful code.
          </p>

          <h3 className="section-header-with-icon">
            <CreditCard className="section-icon red" />
            Payment Terms and Rewards
          </h3>
          <p className="body-text">
            Our platform operates on a reward-based system where users earn rewards for completing tasks and surveys. 
            Rewards are subject to verification and approval processes. We reserve the right to withhold or revoke rewards 
            if we determine that tasks were not completed properly or if there is evidence of fraudulent activity. Payment 
            processing may take 7-14 business days after approval, and minimum withdrawal thresholds may apply.
          </p>

          <h3 className="section-header-with-icon">
            <FileText className="section-icon purple" />
            Intellectual Property Rights
          </h3>
          <p className="body-text">
            The Service and its original content, features, and functionality are and will remain the exclusive property 
            of Earnify Technologies and its licensors. The Service is protected by copyright, trademark, and other laws. 
            You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, 
            republish, download, store, or transmit any of the material on our Service without our prior written consent.
          </p>

          <h3 className="section-header-with-icon">
            <AlertTriangle className="section-icon red" />
            Prohibited Activities
          </h3>
          <p className="body-text">
            Users are strictly prohibited from engaging in the following activities: creating multiple accounts to 
            circumvent reward limitations, using automated tools, bots, or scripts to complete tasks, providing false 
            or misleading information in surveys or tasks, attempting to manipulate or game the reward system, sharing 
            account credentials with other users, and engaging in any activity that may harm the integrity of our platform.
          </p>

          <h3 className="section-header-with-icon">
            <Lock className="section-icon indigo" />
            Limitation of Liability
          </h3>
          <p className="body-text">
            To the maximum extent permitted by law, Earnify Technologies shall not be liable for any indirect, incidental, 
            special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
            or other intangible losses, resulting from your use of the Service. Our total liability to you for any claim 
            arising out of or relating to these Terms or the Service shall not exceed the amount you paid to us in the 
            twelve months preceding the claim.
          </p>

          <h3 className="section-header-with-icon">
            <Shield className="section-icon blue" />
            Termination and Account Suspension
          </h3>
          <p className="body-text">
            We reserve the right to terminate or suspend your account and access to the Service immediately, without 
            prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. 
            Upon termination, your right to use the Service will cease immediately. If you wish to terminate your account, 
            you may contact us at support@earnify.pk. All provisions of the Terms which by their nature should survive 
            termination shall survive termination.
          </p>

          <h3 className="section-header-with-icon">
            <FileText className="section-icon green" />
            Changes to Terms and Service
          </h3>
          <p className="body-text">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision 
            is material, we will try to provide at least 30 days notice prior to any new terms taking effect. What 
            constitutes a material change will be determined at our sole discretion. By continuing to access or use 
            our Service after those revisions become effective, you agree to be bound by the revised terms.
          </p>

          <h3 className="section-header-with-icon">
            <Scale className="section-icon purple" />
            Governing Law and Dispute Resolution
          </h3>
          <p className="body-text">
            These Terms shall be interpreted and governed by the laws of Pakistan, without regard to its conflict of 
            law provisions. Any disputes arising from these Terms or your use of the Service shall be subject to the 
            exclusive jurisdiction of the courts of Lahore, Punjab, Pakistan. Both parties agree to attempt to resolve 
            any dispute through good faith negotiations before resorting to formal legal proceedings.
          </p>

          <h3 className="section-header-with-icon">
            <Shield className="section-icon blue" />
            Contact Information
          </h3>
          <p className="body-text">
            If you have any questions about these Terms and Conditions, please contact us at legal@earnify.pk. 
            Our office is located at Office # 123, IT Tower, Gulberg III, Lahore, Punjab, Pakistan. 
            These Terms and Conditions were last updated on August 17, 2025.
          </p>

          <p className="body-text">
            Earnify Technologies (Pvt) Ltd. is registered under company registration number 0123456-7 and is subject 
            to Pakistani corporate law and regulations. By using our Service, you acknowledge that you understand and 
            agree to be bound by Pakistani law and the exclusive jurisdiction of Pakistani courts.
          </p>
        </div>
      </div>

      {/* Import Footer Component */}
      <Footer />
    </div>
  );
};

export default TermsConditions;