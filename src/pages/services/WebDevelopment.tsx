
import React from 'react';
import ServicePage from '@/components/ServicePage';

const WebDevelopment = () => {
  return (
    <ServicePage
      title="Data Entry Automation"
      description="Eliminate manual data entry tasks and reduce errors with our intelligent automation solutions that save time and increase accuracy."
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      }
      benefits={[
        "Reduce manual data entry by up to 90%",
        "Eliminate costly errors and improve data accuracy",
        "Save valuable employee time for higher-value tasks",
        "Seamless integration with existing systems and databases",
        "Custom workflows tailored to your specific business processes"
      ]}
      caseStudy={{
        title: "Healthcare Claims Processing Automation",
        client: "Regional Medical Center",
        challenge: "The client's staff was spending over 20 hours per week manually entering patient data and insurance claims information across multiple systems. This process was slow, error-prone, and taking valuable time away from patient care.",
        solution: "We implemented a data entry automation system that captured information from paper forms using OCR technology, validated the data against business rules, and automatically populated their practice management system and electronic health records.",
        result: "Data entry time was reduced by 85%, accuracy improved to 99.8%, and staff was able to redirect 18 hours per week to patient care activities. The system paid for itself within 4 months through time savings and reduced claim rejections."
      }}
      processSteps={[
        {
          number: 1,
          title: "Process Analysis",
          description: "We analyze your current data entry workflows, identifying bottlenecks and opportunities for automation."
        },
        {
          number: 2,
          title: "Solution Design",
          description: "Our engineers design a custom automation solution tailored to your specific requirements and existing systems."
        },
        {
          number: 3,
          title: "Implementation",
          description: "We build and deploy your automation solution with minimal disruption to your ongoing operations."
        },
        {
          number: 4,
          title: "Training and Support",
          description: "We provide comprehensive training and ongoing support to ensure your team maximizes the benefits of your new automation system."
        }
      ]}
    />
  );
};

export default WebDevelopment;
