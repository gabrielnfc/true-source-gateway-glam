
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-truesource-orange opacity-[0.03] blur-[80px] animate-pulse-soft"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[350px] h-[350px] rounded-full bg-truesource-red opacity-[0.03] blur-[80px] animate-pulse-soft"></div>
      <div className="absolute top-[60%] left-[25%] w-[250px] h-[250px] rounded-full bg-truesource-orange opacity-[0.02] blur-[50px] animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default AnimatedBackground;
