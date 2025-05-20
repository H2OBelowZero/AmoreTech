
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  variant?: 'primary' | 'secondary';
}

const CallToAction: React.FC<CTAProps> = ({ 
  title, 
  description, 
  buttonText, 
  buttonLink,
  variant = 'primary'
}) => {
  return (
    <div className={`
      ${variant === 'primary' 
        ? 'bg-saas-800 text-white' 
        : 'bg-gray-50 text-gray-800'} 
      py-16 px-4 rounded-lg
    `}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className={`mb-8 text-lg ${variant === 'primary' ? 'text-gray-200' : 'text-gray-600'}`}>
          {description}
        </p>
        <Button 
          asChild
          className={variant === 'primary' 
            ? 'bg-white text-saas-800 hover:bg-gray-100' 
            : 'bg-saas-600 hover:bg-saas-700 text-white'
          }
          size="lg"
        >
          <Link to={buttonLink}>{buttonText}</Link>
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
