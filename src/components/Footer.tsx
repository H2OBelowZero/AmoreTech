
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Amore Tech</h4>
            <p className="mb-4 text-sm">
              Professional technology solutions for businesses. We specialize in app development, AI workflow, automation, data entry automation, and custom tech solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/app-development" className="hover:text-white transition-colors">App Development</Link></li>
              <li><Link to="/services/ai-workflow" className="hover:text-white transition-colors">AI Workflow Solutions</Link></li>
              <li><Link to="/services/automation" className="hover:text-white transition-colors">Automation Services</Link></li>
              <li><Link to="/services/web-development" className="hover:text-white transition-colors">Data Entry Automation</Link></li>
              <li><Link to="/services/custom-solutions" className="hover:text-white transition-colors">Custom Tech Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p>Email: amoretech6@gmail.com</p>
              <p>Phone: +27 66 232 3227</p>
              <p>Phone: +27 64 751 9576</p>
              <p>18 Menton Rd, Richmond<br />Johannesburg, 2092</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {currentYear} Amore Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
