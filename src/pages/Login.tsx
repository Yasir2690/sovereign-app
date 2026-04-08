import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Layers } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
      alert('Login successful!');
      navigate('/dashboard');
    } else {
      alert('Please enter email and password');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 flex flex-col">
      <nav className="border-b border-neutral-900/50 bg-neutral-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">SOVEREIGN</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Welcome back</h2>
            <p className="text-neutral-400 mt-2">Sign in to your account</p>
          </div>
          
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-indigo-500 focus:outline-none"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-indigo-500 focus:outline-none"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Sign In
            </button>

            <p className="text-center text-neutral-400">
              Don't have an account?{' '}
              <Link to="/signup" className="text-indigo-400 hover:text-indigo-300">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;