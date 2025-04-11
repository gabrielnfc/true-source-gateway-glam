
import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const TrueSourceLogo: React.FC<LogoProps> = ({ className = "", size = 60 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`brand-logo-shadow ${className}`}
    >
      <g>
        {/* Orange Cross */}
        <rect x="11" y="2" width="2" height="20" fill="#f2540d" />
        <rect x="2" y="11" width="20" height="2" fill="#f2540d" />
        
        {/* Magenta/Red X */}
        <g transform="rotate(45 12 12)">
          <rect x="11" y="2" width="2" height="20" fill="#e1004b" />
          <rect x="2" y="11" width="20" height="2" fill="#e1004b" />
        </g>
      </g>
    </svg>
  );
};

export default TrueSourceLogo;
