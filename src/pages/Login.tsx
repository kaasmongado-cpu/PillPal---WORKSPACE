import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import './AuthPages.css';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 1500);
  };

  return (
    <div className="page-container animate-slide-up">
      <Card className="auth-card">
        <div className="auth-header">
          <h1>Welcome Back</h1>
          <p>Please enter your details to sign in.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <Input 
            label="Email Address"
            id="email"
            type="email" 
            placeholder="name@example.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input 
            label="Password"
            id="password"
            type="password" 
            placeholder="Enter your password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          <div className="auth-actions">
            <Link to="/forgot-password" className="text-link">Forgot password?</Link>
          </div>
          
          <Button type="submit" fullWidth disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>
        
        <div className="auth-footer">
          <p>Don't have an account? <Link to="/register" className="text-link highlight">Sign up</Link></p>
        </div>
      </Card>
    </div>
  );
};
