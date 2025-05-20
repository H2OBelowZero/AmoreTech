
import React from 'react';

interface ClientLogoProps {
  name: string;
  logo: string;
  grayscale?: boolean;
}

const ClientLogo: React.FC<ClientLogoProps> = ({ name, logo, grayscale = true }) => {
  return (
    <div className="flex items-center justify-center p-4">
      <img 
        src={logo} 
        alt={`${name} logo`} 
        className={`max-h-10 ${grayscale ? 'grayscale opacity-70 hover:grayscale-0 hover:opacity-100' : ''} transition-all duration-300`}
      />
    </div>
  );
};

export default ClientLogo;
