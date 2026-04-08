import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Zap, 
  Shield, 
  BarChart3,  
  ArrowRight, 
  Play, 
  Layers, 
  Menu, 
  X,
} from 'lucide-react';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  // Function to scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleGetStarted = () => {
    navigate('/signup');
  };

  const handleViewDemo = () => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleStartTrial = () => {
    navigate('/signup');
  };

  const handleFeatureClick = (featureName: string) => {
    alert(`${featureName} feature - Coming soon!`);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-neutral-900/50 bg-neutral-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">SOVEREIGN</span>
            </div>
            
            {/* Desktop Nav - NOW ALL WORKING */}
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-sm text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('solutions')} 
                className="text-sm text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection('enterprise')} 
                className="text-sm text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                Enterprise
              </button>
              <button 
                onClick={() => navigate('/pricing')} 
                className="text-sm text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                Pricing
              </button>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={handleLogin}
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors px-4 py-2"
              >
                Log in
              </button>
              <button 
                onClick={handleGetStarted}
                className="text-sm font-medium bg-white text-black hover:bg-neutral-200 transition-all px-4 py-2 rounded-full"
              >
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-neutral-400">
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu - NOW ALL WORKING */}
        {isMenuOpen && (
          <div className="md:hidden border-b border-neutral-900 bg-neutral-950 p-4 space-y-4">
            <button 
              onClick={() => scrollToSection('features')} 
              className="block text-neutral-400 hover:text-white w-full text-left"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('solutions')} 
              className="block text-neutral-400 hover:text-white w-full text-left"
            >
              Solutions
            </button>
            <button 
              onClick={() => scrollToSection('enterprise')} 
              className="block text-neutral-400 hover:text-white w-full text-left"
            >
              Enterprise
            </button>
            <button 
              onClick={() => { navigate('/pricing'); setIsMenuOpen(false); }} 
              className="block text-neutral-400 hover:text-white w-full text-left"
            >
              Pricing
            </button>
            <div className="pt-4 flex flex-col gap-2">
              <button 
                onClick={() => { handleLogin(); setIsMenuOpen(false); }} 
                className="w-full text-center py-2 text-neutral-400"
              >
                Log in
              </button>
              <button 
                onClick={() => { handleGetStarted(); setIsMenuOpen(false); }} 
                className="w-full text-center py-2 bg-white text-black rounded-lg font-medium"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            v2.0 Now in Early Access
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
            Intelligent Insights <br className="hidden md:block" /> at Scale
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Sovereign empowers teams to harness high-frequency data into actionable strategy. Built for the modern enterprise that demands speed, security, and precision.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={handleGetStarted}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-neutral-200 transition-all flex items-center justify-center gap-2"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={handleViewDemo}
              className="w-full sm:w-auto px-8 py-4 bg-neutral-900 text-white border border-neutral-800 rounded-full font-semibold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 fill-current" /> View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Section - ID added */}
      <section id="solutions" className="py-24 lg:py-32 bg-neutral-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Solutions for Every Team</h2>
            <p className="text-neutral-400 max-w-xl mx-auto">
              Whether you're a startup or enterprise, Sovereign adapts to your needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800">
              <h3 className="text-2xl font-bold mb-3">For Startups</h3>
              <p className="text-neutral-400">Launch faster with our flexible APIs and generous free tier.</p>
            </div>
            <div className="p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800">
              <h3 className="text-2xl font-bold mb-3">For Enterprises</h3>
              <p className="text-neutral-400">Scale with confidence using our enterprise-grade infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Section - ID added */}
      <section id="enterprise" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Ready</h2>
            <p className="text-neutral-400 max-w-xl mx-auto">
              SOC2 compliant, GDPR ready, and built for the most demanding organizations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 text-center">
              <Shield className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bank-level Security</h3>
              <p className="text-neutral-400 text-sm">256-bit encryption</p>
            </div>
            <div className="p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 text-center">
              <BarChart3 className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">99.99% Uptime SLA</h3>
              <p className="text-neutral-400 text-sm">Guaranteed reliability</p>
            </div>
            <div className="p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 text-center">
              <Zap className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-neutral-400 text-sm">Dedicated account manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - ID added */}
      <section id="features" className="py-24 lg:py-32 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Engineered for Excellence</h2>
            <p className="text-neutral-400 max-w-xl mx-auto">
              Everything you need to monitor, analyze, and optimize your operations in real-time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div onClick={() => handleFeatureClick('Real-time Processing')} className="cursor-pointer p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="text-indigo-500 w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Processing</h3>
              <p className="text-neutral-400 leading-relaxed text-sm">
                Low-latency data ingestion and processing at scale. Handle millions of events per second.
              </p>
            </div>
            <div onClick={() => handleFeatureClick('Military-grade Security')} className="cursor-pointer p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="text-indigo-500 w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Military-grade Security</h3>
              <p className="text-neutral-400 leading-relaxed text-sm">
                End-to-end encryption and SOC2 Type II compliance. Your data remains yours.
              </p>
            </div>
            <div onClick={() => handleFeatureClick('Advanced Analytics')} className="cursor-pointer p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="text-indigo-500 w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Analytics</h3>
              <p className="text-neutral-400 leading-relaxed text-sm">
                Deep-dive into your metrics with AI-powered forecasting and anomaly detection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 border-y border-neutral-900/50 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-10">
            Trusted by industry leaders
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[
              { name: 'ACME', url: 'https://www.acme.com' },
              { name: 'GLOBEX', url: 'https://www.globex.com' },
              { name: 'INITECH', url: 'https://www.initech.com' },
              { name: 'SOYLENT', url: 'https://www.soylent.com' },
              { name: 'UMBRELLA', url: 'https://www.umbrella.com' },
              { name: 'Hooli', url: 'https://www.hooli.com' }
            ].map((company) => (
              <a 
                key={company.name}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center cursor-pointer hover:scale-105 transition-transform"
              >
                <span className="text-xl font-black italic tracking-tighter text-neutral-200">{company.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-neutral-400 max-w-xl mx-auto">
              Choose the plan that fits your needs. All plans include a 14-day free trial.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Starter', price: '$49', description: 'Perfect for small teams', popular: false },
              { name: 'Professional', price: '$99', description: 'Best for growing companies', popular: true },
              { name: 'Enterprise', price: 'Custom', description: 'For large organizations', popular: false }
            ].map((plan) => (
              <div key={plan.name} className={`p-8 rounded-2xl ${plan.popular ? 'bg-indigo-600/10 border-2 border-indigo-500' : 'bg-neutral-900/50 border border-neutral-800'} text-center`}>
                {plan.popular && (
                  <span className="px-3 py-1 text-xs font-semibold bg-indigo-600 text-white rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
                <p className="text-neutral-400 mb-4 text-sm">{plan.description}</p>
                <p className="text-4xl font-bold mb-6">
                  {plan.price}
                  <span className="text-sm font-normal text-neutral-400">/month</span>
                </p>
                <button 
                  onClick={handleStartTrial}
                  className="w-full py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                >
                  Start Free Trial
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-indigo-600 px-8 py-16 md:px-16 md:py-20 text-center">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to scale your intelligence?</h2>
              <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
                Join 5,000+ teams already using Sovereign to redefine their decision-making process.
              </p>
              <button 
                onClick={handleStartTrial}
                className="px-8 py-4 bg-white text-indigo-600 rounded-full font-bold hover:bg-neutral-100 transition-all shadow-xl shadow-indigo-900/20"
              >
                Start Free Trial
              </button>
            </div>
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-indigo-500 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-700 rounded-full opacity-50 blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-900 py-12 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
              <Layers className="w-6 h-6 text-indigo-500" />
              <span className="text-lg font-bold tracking-tight">SOVEREIGN</span>
            </div>
            <div className="flex gap-8 text-sm">
              <button onClick={() => navigate('/about')} className="text-neutral-500 hover:text-white transition-colors">About</button>
              <button onClick={() => navigate('/pricing')} className="text-neutral-500 hover:text-white transition-colors">Pricing</button>
              <button onClick={() => navigate('/contact')} className="text-neutral-500 hover:text-white transition-colors">Contact</button>
            </div>
            <div className="text-sm text-neutral-600">
              © 2026 Sovereign Intelligence Corp.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;