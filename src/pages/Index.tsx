
import { useState } from 'react';
import TrueSourceLogo from '../components/TrueSourceLogo';
import LoginForm from '../components/LoginForm';
import AnimatedBackground from '../components/AnimatedBackground';
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen w-full flex items-center justify-center login-gradient-bg ${darkMode ? 'dark' : ''}`}>
      <Toaster />
      <AnimatedBackground />
      
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-6 right-6 text-truesource-gray hover:text-truesource-dark"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
      
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row login-card rounded-2xl overflow-hidden bg-white dark:bg-gray-900">
          {/* Branding Column */}
          <div className="lg:w-1/2 bg-truesource-gradient p-8 lg:p-12 flex flex-col justify-between">
            <div className="flex items-center space-x-3">
              <TrueSourceLogo className="animate-glow" />
              <h1 className="text-white text-2xl font-bold">TrueSource</h1>
            </div>
            
            <div className="mt-12 lg:mt-0">
              <h2 className="text-white text-4xl lg:text-5xl font-bold leading-tight">
                Empower your influence
              </h2>
              <p className="text-white/90 mt-4 text-lg">
                The ultimate platform for creators to build their digital storefront and connect with their audience.
              </p>
              
              <div className="mt-12">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-white">⭐</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Join 10,000+ influencers</h3>
                    <p className="text-white/70 text-sm">Growing their business with TrueSource</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block text-white/70 text-sm mt-12">
              © {new Date().getFullYear()} TrueSource. All rights reserved.
            </div>
          </div>
          
          {/* Login Form Column */}
          <div className="lg:w-1/2 p-8 lg:p-12 flex items-center">
            <LoginForm />
          </div>
        </div>
        
        <div className="lg:hidden text-center mt-6 text-truesource-gray text-sm">
          © {new Date().getFullYear()} TrueSource. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Index;
