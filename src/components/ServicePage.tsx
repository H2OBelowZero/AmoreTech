
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface ServicePageProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  caseStudy: {
    title: string;
    client: string;
    challenge: string;
    solution: string;
    result: string;
  };
  processSteps: ProcessStep[];
}

const ServicePage: React.FC<ServicePageProps> = ({
  title,
  description,
  icon,
  benefits,
  caseStudy,
  processSteps
}) => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <header className="bg-saas-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 text-white">
                {icon}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl mb-0 text-gray-100">
              {description}
            </p>
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Key Benefits</h2>
            <div className="max-w-3xl mx-auto">
              <ul className="space-y-4 text-left">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-saas-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Case Study</h2>
              <p className="text-xl text-saas-600 font-medium">{caseStudy.title}</p>
            </div>
            
            <div className="bg-white shadow-md rounded-lg p-8">
              <p className="text-lg font-medium text-gray-900 mb-2">Client: {caseStudy.client}</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Challenge</h3>
                <p className="text-gray-700">{caseStudy.challenge}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Our Solution</h3>
                <p className="text-gray-700">{caseStudy.solution}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Results</h3>
                <p className="text-gray-700">{caseStudy.result}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures efficient delivery and exceptional results.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-start mb-12">
                <div className="flex-shrink-0 mr-6">
                  <div className="h-12 w-12 rounded-full bg-saas-600 text-white flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <CallToAction
            title="Discuss Your Project"
            description="Ready to explore how our solutions can solve your business challenges? Let's talk about your specific needs."
            buttonText="Contact Us"
            buttonLink="/contact"
            variant="primary"
          />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServicePage;
