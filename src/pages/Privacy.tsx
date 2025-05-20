
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <>
      <Navbar />
      <div className="container-custom py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p>Last updated: May 20, 2025</p>
          
          <h2>Introduction</h2>
          <p>
            TechSaas ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains 
            how we collect, use, and safeguard your information when you visit our website or use our services.
          </p>
          
          <h2>Information We Collect</h2>
          <p>
            We may collect personal information that you provide directly to us, such as your name, email address, 
            phone number, company name, and any other information you choose to provide when you:
          </p>
          <ul>
            <li>Fill out forms on our website</li>
            <li>Contact us or request information about our services</li>
            <li>Subscribe to our newsletters or marketing communications</li>
            <li>Participate in surveys, contests, or promotions</li>
          </ul>
          
          <h2>How We Use Your Information</h2>
          <p>We may use the information we collect for various purposes, including to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Send you technical notices, updates, security alerts, and support messages</li>
            <li>Communicate with you about products, services, offers, and events</li>
            <li>Provide customer service and technical support</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
          </ul>
          
          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information against unauthorized 
            access, alteration, disclosure, or destruction. However, no method of transmission over the Internet 
            or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
          
          <h2>Third-Party Services</h2>
          <p>
            Our website may contain links to third-party websites or services that are not owned or controlled 
            by TechSaas. We have no control over and assume no responsibility for the content, privacy policies, 
            or practices of any third-party websites or services.
          </p>
          
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the 
            new Privacy Policy on this page and updating the "last updated" date.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at info@techsaas.com.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
