
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <>
      <Navbar />
      <div className="container-custom py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p>Last updated: May 20, 2025</p>
          
          <h2>Introduction</h2>
          <p>
            These Terms of Service ("Terms") govern your access to and use of the TechSaas website and services. 
            By accessing or using our services, you agree to be bound by these Terms.
          </p>
          
          <h2>Use of Our Services</h2>
          <p>
            You may use our services only as permitted by law and according to these Terms. We may suspend or 
            stop providing our services to you if you do not comply with our terms or policies or if we are 
            investigating suspected misconduct.
          </p>
          
          <h2>Intellectual Property Rights</h2>
          <p>
            The content, features, and functionality of our website, including but not limited to text, graphics, 
            logos, icons, images, and software, are the property of TechSaas and are protected by copyright, 
            trademark, and other intellectual property laws.
          </p>
          
          <h2>User Content</h2>
          <p>
            When you submit content to our website or services, you grant us a worldwide, royalty-free license 
            to use, reproduce, modify, adapt, publish, and distribute such content for the purpose of providing 
            and promoting our services.
          </p>
          
          <h2>Privacy</h2>
          <p>
            Our Privacy Policy explains how we treat your personal data and protect your privacy when you use our 
            services. By using our services, you agree that we can use such data in accordance with our privacy policy.
          </p>
          
          <h2>Limitation of Liability</h2>
          <p>
            To the extent permitted by law, TechSaas will not be liable for any indirect, incidental, special, 
            consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly 
            or indirectly, or any loss of data, use, goodwill, or other intangible losses.
          </p>
          
          <h2>Changes to These Terms</h2>
          <p>
            We may revise these Terms from time to time. The most current version will always be posted on our 
            website. If the revision, in our discretion, is material, we will notify you via email or through 
            our services.
          </p>
          
          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the United States, without 
            regard to its conflict of law provisions.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at info@techsaas.com.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Terms;
