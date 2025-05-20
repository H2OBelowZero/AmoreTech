
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <header className="bg-saas-800 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl mb-0 text-gray-100">
              Reach out to discuss your project or technology needs
            </p>
          </div>
        </div>
      </header>

      {/* Contact Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about our services or ready to start your next project? 
                Our team is here to help you find the right technology solution for your business needs.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-700">amoretech6@gmail.com</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-700">+27 66 232 3227</p>
                  <p className="text-gray-700">+27 64 751 9576</p>
                  <p className="text-sm text-gray-500 mt-1">Monday - Friday: 9:00 AM - 6:00 PM SAST</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                  <p className="text-gray-700">
                    18 Menton Rd, Richmond<br />
                    Johannesburg, 2092
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-4">Our Response Commitment</h3>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-gray-700">
                    We respond to all inquiries within 24 hours during business days. 
                    For urgent matters, please call us directly.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
