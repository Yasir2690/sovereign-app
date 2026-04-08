import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layers, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      <nav className="border-b border-neutral-900/50 bg-neutral-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
              <Layers className="w-6 h-6 text-indigo-500" />
              <span className="text-xl font-bold">SOVEREIGN</span>
            </div>
            <div className="flex gap-6">
              <button onClick={() => navigate('/')} className="text-neutral-400 hover:text-white">Home</button>
              <button onClick={() => navigate('/about')} className="text-neutral-400 hover:text-white">About</button>
              <button onClick={() => navigate('/pricing')} className="text-neutral-400 hover:text-white">Pricing</button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-neutral-400 mb-8">
              Have questions? We'd love to hear from you. Send us a message and we'll respond within 24 hours.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-indigo-500" />
                <span>hello@sovereign.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-indigo-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-indigo-500" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-indigo-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-indigo-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800 focus:border-indigo-500 focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;