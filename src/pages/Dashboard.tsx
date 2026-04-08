import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layers, LogOut, Settings, Users, BarChart3 } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const email = localStorage.getItem('userEmail');
    
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      setUserEmail(email || 'User');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    alert('Logged out successfully!');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      <div className="fixed left-0 top-0 h-full w-64 bg-neutral-900 border-r border-neutral-800 p-6">
        <div className="flex items-center gap-2 mb-8 cursor-pointer" onClick={() => navigate('/')}>
          <Layers className="w-6 h-6 text-indigo-500" />
          <span className="text-xl font-bold">SOVEREIGN</span>
        </div>
        
        <div className="mb-8 p-4 bg-neutral-800/50 rounded-lg">
          <p className="text-sm text-neutral-400">Logged in as</p>
          <p className="font-semibold truncate">{userEmail}</p>
        </div>
        
        <nav className="space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg bg-indigo-600 text-left">
            <BarChart3 className="w-5 h-5" />
            Dashboard
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-neutral-800 transition-colors text-left">
            <Users className="w-5 h-5" />
            Users
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-neutral-800 transition-colors text-left">
            <Settings className="w-5 h-5" />
            Settings
          </button>
        </nav>

        <button
          onClick={handleLogout}
          className="absolute bottom-6 left-6 right-6 flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-neutral-800 transition-colors text-red-400"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>

      <div className="ml-64 p-8">
        <h1 className="text-3xl font-bold mb-6">Welcome back, {userEmail?.split('@')[0] || 'User'}!</h1>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
            <p className="text-neutral-400 text-sm">Total Users</p>
            <p className="text-3xl font-bold mt-2">1,234</p>
          </div>
          <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
            <p className="text-neutral-400 text-sm">Active Sessions</p>
            <p className="text-3xl font-bold mt-2">567</p>
          </div>
          <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
            <p className="text-neutral-400 text-sm">Revenue</p>
            <p className="text-3xl font-bold mt-2">$12,345</p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex justify-between items-center py-2 border-b border-neutral-800">
                <span>User signed up</span>
                <span className="text-neutral-500 text-sm">2 minutes ago</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;