
import React from 'react';
import ServicePage from '@/components/ServicePage';

const CustomSolutions = () => {
  return (
    <ServicePage
      title="Custom Tech Solutions"
      description="Bespoke technology solutions designed specifically for your unique business challenges."
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
      }
      benefits={[
        "Tailored solutions that address your specific business challenges",
        "Seamless integration with your existing technology ecosystem",
        "Scalable architecture that grows with your business",
        "Collaborative development process with regular feedback and iteration",
        "Long-term technology partnership for continuous improvement"
      ]}
      caseStudy={{
        title: "Custom Healthcare Analytics Platform",
        client: "Regional Healthcare Network",
        challenge: "The client needed to better understand patient outcomes across multiple facilities but struggled with siloed data systems, inconsistent reporting, and manual analysis processes that delayed critical insights.",
        solution: "We developed a custom healthcare analytics platform that integrated data from multiple sources, standardized metrics across facilities, and provided real-time dashboards for clinical and administrative users. The solution included predictive analytics for patient risk assessment and resource planning.",
        result: "The client improved patient outcomes by 18% in key metrics, reduced average length of stay by 2.3 days, and identified $4.2M in operational efficiencies. The solution also improved compliance reporting accuracy and reduced preparation time by 85%."
      }}
      processSteps={[
        {
          number: 1,
          title: "Problem Discovery",
          description: "We collaborate closely with your team to deeply understand the unique challenges you're facing and define clear objectives."
        },
        {
          number: 2,
          title: "Solution Architecture",
          description: "Our architects design a comprehensive solution tailored to your specific needs, considering your current systems and future growth."
        },
        {
          number: 3,
          title: "Iterative Development",
          description: "We develop your custom solution using agile methodologies, with regular reviews and feedback to ensure alignment with your needs."
        },
        {
          number: 4,
          title: "Implementation and Support",
          description: "We implement the solution in your environment and provide ongoing support and enhancements to ensure continued value."
        }
      ]}
    />
  );
};

export default CustomSolutions;
