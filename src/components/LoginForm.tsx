
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    // This would typically connect to your authentication API
    setTimeout(() => {
      toast({
        title: "Login Successful!",
        description: "Welcome to TrueSource.",
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-2 text-truesource-dark">Welcome back</h2>
      <p className="text-truesource-gray mb-8">Login to manage your influencer storefront</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <div className="relative">
            <Mail 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-truesource-gray"
              size={18} 
            />
            <Input
              type="email"
              placeholder="Email"
              className="pl-10 py-6 border-truesource-light-gray focus:border-truesource-orange input-glow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="relative">
            <Lock 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-truesource-gray" 
              size={18} 
            />
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="pl-10 py-6 border-truesource-light-gray focus:border-truesource-orange input-glow"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)} 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-truesource-gray hover:text-truesource-dark"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>
        
        <div className="flex justify-end">
          <a 
            href="#" 
            className="text-sm text-truesource-gray hover:text-truesource-orange transition-colors"
          >
            Forgot your password?
          </a>
        </div>
        
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full py-6 font-semibold text-white truesource-button-gradient hover:shadow-lg"
        >
          {isLoading ? "Logging in..." : "Login"}
        </Button>
        
        <div className="text-center mt-6">
          <p className="text-sm text-truesource-gray">
            Don't have an account?{" "}
            <a href="#" className="text-truesource-orange hover:text-truesource-red font-medium">
              Register now
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
