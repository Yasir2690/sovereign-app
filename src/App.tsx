import React from 'react';
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

const SovereignLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-neutral-900/50 bg-neutral-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">SOVEREIGN</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-neutral-400 hover:text-white transition-colors">Features</a>
              <a href="#solutions" className="text-sm text-neutral-400 hover:text-white transition-colors">Solutions</a>
              <a href="#enterprise" className="text-sm text-neutral-400 hover:text-white transition-colors">Enterprise</a>
              <a href="#pricing" className="text-sm text-neutral-400 hover:text-white transition-colors">Pricing</a>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <button className="text-sm font-medium text-neutral-400 hover:text-white transition-colors px-4 py-2">
                Log in
              </button>
              <button className="text-sm font-medium bg-white text-black hover:bg-neutral-200 transition-all px-4 py-2 rounded-full">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-neutral-400">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-b border-neutral-900 bg-neutral-950 p-4 space-y-4">
            <a href="#features" className="block text-neutral-400 hover:text-white">Features</a>
            <a href="#solutions" className="block text-neutral-400 hover:text-white">Solutions</a>
            <a href="#enterprise" className="block text-neutral-400 hover:text-white">Enterprise</a>
            <a href="#pricing" className="block text-neutral-400 hover:text-white">Pricing</a>
            <div className="pt-4 flex flex-col gap-2">
              <button className="w-full text-center py-2 text-neutral-400">Log in</button>
              <button className="w-full text-center py-2 bg-white text-black rounded-lg font-medium">Get Started</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs font-medium mb-8 animate-fade-in">
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
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-neutral-200 transition-all flex items-center justify-center gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-neutral-900 text-white border border-neutral-800 rounded-full font-semibold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2">
              <Play className="w-4 h-4 fill-current" /> View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 border-y border-neutral-900/50 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-10">
            Trusted by industry leaders
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-40 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
            {['ACME', 'GLOBEX', 'INITECH', 'SOYLENT', 'UMBRELLA', 'Hooli'].map((company) => (
              <div key={company} className="flex justify-center">
                <span className="text-xl font-black italic tracking-tighter text-neutral-200">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Engineered for Excellence</h2>
            <p className="text-neutral-400 max-w-xl mx-auto">
              Everything you need to monitor, analyze, and optimize your operations in real-time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="text-indigo-500" />}
              title="Real-time Processing"
              description="Low-latency data ingestion and processing at scale. Handle millions of events per second without breaking a sweat."
            />
            <FeatureCard 
              icon={<Shield className="text-indigo-500" />}
              title="Military-grade Security"
              description="End-to-end encryption and SOC2 Type II compliance. Your data remains yours, protected by sovereign-level protocols."
            />
            <FeatureCard 
              icon={<BarChart3 className="text-indigo-500" />}
              title="Advanced Analytics"
              description="Deep-dive into your metrics with AI-powered forecasting and anomaly detection tools built for speed."
            />
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
              <button className="px-8 py-4 bg-white text-indigo-600 rounded-full font-bold hover:bg-neutral-100 transition-all shadow-xl shadow-indigo-900/20">
                Start Free Trial
              </button>
            </div>
            {/* Abstract background elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-indigo-500 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-700 rounded-full opacity-50 blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-900 py-12 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <Layers className="w-6 h-6 text-indigo-500" />
              <span className="text-lg font-bold tracking-tight">SOVEREIGN</span>
            </div>
            <div className="flex gap-8 text-sm text-neutral-500">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
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

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-all group">
    <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-neutral-400 leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

export default SovereignLanding;
