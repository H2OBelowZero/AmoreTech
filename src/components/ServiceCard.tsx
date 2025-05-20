
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 card-hover">
      <div className="h-12 w-12 text-saas-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Button variant="outline" className="border-saas-600 text-saas-700 hover:bg-saas-50" asChild>
        <Link to={link}>Learn More</Link>
      </Button>
    </div>
  );
};

export default ServiceCard;
