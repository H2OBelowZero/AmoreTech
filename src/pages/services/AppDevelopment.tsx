
import React from 'react';
import ServicePage from '@/components/ServicePage';

const AppDevelopment = () => {
  return (
    <ServicePage
      title="App Development"
      description="Custom mobile and desktop applications that elevate your business operations and customer experience."
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      }
      benefits={[
        "Custom-built applications tailored to your specific business requirements",
        "Cross-platform compatibility for iOS, Android, and web platforms",
        "Intuitive user interfaces designed for optimal user experience",
        "Secure data handling and robust backend infrastructure",
        "Ongoing support and maintenance to ensure optimal performance"
      ]}
      caseStudy={{
        title: "Enterprise Inventory Management System",
        client: "National Retail Chain",
        challenge: "The client was struggling with an outdated inventory management system that couldn't scale with their growing business. They needed a mobile solution that would work across multiple locations and integrate with their existing ERP system.",
        solution: "We developed a custom mobile application that synchronized inventory data in real-time across all store locations. The app included barcode scanning, predictive inventory alerts, and comprehensive reporting features. We implemented a secure API layer to integrate with their existing systems.",
        result: "The new application reduced inventory discrepancies by 87%, lowered manual data entry by 95%, and improved fulfillment rates by 23%. Store managers reported significant time savings and improved accuracy in inventory management."
      }}
      processSteps={[
        {
          number: 1,
          title: "Discovery and Planning",
          description: "We analyze your business requirements, user needs, and technical constraints to develop a comprehensive project plan."
        },
        {
          number: 2,
          title: "Design and Architecture",
          description: "Our designers and architects create intuitive user interfaces and robust technical architectures that form the foundation of your application."
        },
        {
          number: 3,
          title: "Development",
          description: "Our development team builds your application using agile methodologies, ensuring regular updates and alignment with your expectations."
        },
        {
          number: 4,
          title: "Testing and Deployment",
          description: "We rigorously test your application and deploy it to your specified environments, ensuring a smooth launch."
        }
      ]}
    />
  );
};

export default AppDevelopment;
