
import React from 'react';
import ServicePage from '@/components/ServicePage';

const Automation = () => {
  return (
    <ServicePage
      title="Automation Services"
      description="Eliminate repetitive tasks and minimize human error with our tailored business process automation."
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      }
      benefits={[
        "Significant time savings by automating repetitive tasks",
        "Improved accuracy and elimination of human error",
        "Enhanced productivity and resource allocation",
        "Streamlined business processes and workflows",
        "Cost reduction through operational efficiency"
      ]}
      caseStudy={{
        title: "Accounts Payable Automation System",
        client: "Manufacturing Company",
        challenge: "The client's accounts payable department was processing over 5,000 invoices monthly, resulting in delays, errors, and high processing costs. They needed to streamline their AP process while improving accuracy and visibility.",
        solution: "We implemented an automated accounts payable system that used OCR technology to extract invoice data, automated three-way matching with purchase orders and receipts, and integrated with their ERP system for seamless payment processing. The solution included customized approval workflows and comprehensive reporting.",
        result: "Invoice processing time was reduced from 14 days to 3 days, processing costs decreased by 68%, and payment accuracy improved to 99.8%. The finance team was able to reallocate 4 full-time employees to more strategic initiatives."
      }}
      processSteps={[
        {
          number: 1,
          title: "Process Assessment",
          description: "We analyze your current processes to identify automation opportunities and potential efficiency gains."
        },
        {
          number: 2,
          title: "Solution Design",
          description: "Our automation specialists design a customized solution tailored to your specific business processes and requirements."
        },
        {
          number: 3,
          title: "Implementation",
          description: "We implement the automation solution, integrating it with your existing systems and training your team on its use."
        },
        {
          number: 4,
          title: "Monitoring and Optimization",
          description: "We continuously monitor the automated processes and make adjustments to optimize performance and results."
        }
      ]}
    />
  );
};

export default Automation;
