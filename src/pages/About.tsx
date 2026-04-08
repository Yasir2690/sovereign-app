import { useNavigate } from 'react-router-dom';
import { Layers, Zap, Shield, BarChart3 } from 'lucide-react';

const About = () => {
  const navigate = useNavigate();

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
              <button onClick={() => navigate('/pricing')} className="text-neutral-400 hover:text-white">Pricing</button>
              <button onClick={() => navigate('/contact')} className="text-neutral-400 hover:text-white">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-center mb-6">About Sovereign</h1>
        <p className="text-xl text-neutral-400 text-center mb-12">
          We're on a mission to revolutionize how enterprises harness data intelligence.
        </p>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-neutral-400 leading-relaxed">
              Founded in 2024, Sovereign emerged from a simple observation: enterprise teams were drowning in data but starving for insights. We built Sovereign to bridge that gap.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-neutral-900/50 border border-neutral-800">
                <Zap className="w-8 h-8 text-indigo-500 mb-3" />
                <h3 className="font-semibold mb-2">Speed</h3>
                <p className="text-neutral-500 text-sm">Real-time processing at scale</p>
              </div>
              <div className="p-6 rounded-xl bg-neutral-900/50 border border-neutral-800">
                <Shield className="w-8 h-8 text-indigo-500 mb-3" />
                <h3 className="font-semibold mb-2">Security</h3>
                <p className="text-neutral-500 text-sm">Enterprise-grade protection</p>
              </div>
              <div className="p-6 rounded-xl bg-neutral-900/50 border border-neutral-800">
                <BarChart3 className="w-8 h-8 text-indigo-500 mb-3" />
                <h3 className="font-semibold mb-2">Precision</h3>
                <p className="text-neutral-500 text-sm">Actionable intelligence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;