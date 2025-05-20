
import React from 'react';
import ServicePage from '@/components/ServicePage';

const AIWorkflow = () => {
  return (
    <ServicePage
      title="AI Workflow Solutions"
      description="Intelligent automation systems that streamline decision-making processes and enhance productivity."
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.611L5 14.5" />
        </svg>
      }
      benefits={[
        "AI-powered data analysis to uncover valuable business insights",
        "Automated decision-making processes that reduce human error",
        "Intelligent document processing and data extraction",
        "Predictive analytics for proactive business planning",
        "Streamlined workflows that increase operational efficiency"
      ]}
      caseStudy={{
        title: "AI-Powered Customer Service Optimization",
        client: "Financial Services Provider",
        challenge: "The client was experiencing a high volume of customer service inquiries, leading to long wait times and customer dissatisfaction. They needed a solution to improve efficiency without sacrificing service quality.",
        solution: "We implemented an AI workflow solution that automatically categorized and prioritized incoming inquiries, routed them to the appropriate specialists, and provided real-time recommendations to service representatives based on customer history and issue patterns.",
        result: "Customer wait times decreased by 64%, first-call resolution rates improved by 42%, and customer satisfaction scores increased by 28%. The system also provided valuable insights into common issue patterns, allowing the client to proactively address recurring problems."
      }}
      processSteps={[
        {
          number: 1,
          title: "Workflow Analysis",
          description: "We analyze your existing processes to identify opportunities for AI enhancement and automation."
        },
        {
          number: 2,
          title: "Solution Design",
          description: "Our AI specialists design a tailored solution that addresses your specific business challenges and integrates with your existing systems."
        },
        {
          number: 3,
          title: "AI Model Development",
          description: "We develop and train AI models using your business data, ensuring accuracy and relevance to your specific needs."
        },
        {
          number: 4,
          title: "Implementation and Optimization",
          description: "We implement the solution and continuously optimize its performance based on real-world feedback and results."
        }
      ]}
    />
  );
};

export default AIWorkflow;
