import { useNavigate } from 'react-router-dom';
import { Layers, Check } from 'lucide-react';

const Pricing = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Starter',
      price: '$49',
      description: 'Perfect for small teams',
      features: ['Up to 10 users', 'Basic analytics', 'Email support', 'API access'],
      popular: false,
    },
    {
      name: 'Professional',
      price: '$99',
      description: 'Best for growing companies',
      features: ['Up to 50 users', 'Advanced analytics', 'Priority support', 'Custom reports', 'SLA guarantee'],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: ['Unlimited users', 'AI-powered insights', '24/7 phone support', 'Dedicated account manager', 'Custom integrations'],
      popular: false,
    },
  ];

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
              <button onClick={() => navigate('/contact')} className="text-neutral-400 hover:text-white">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-neutral-400">Choose the plan that works for you</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-8 rounded-2xl ${plan.popular ? 'bg-indigo-600/10 border-2 border-indigo-500' : 'bg-neutral-900/50 border border-neutral-800'}`}
            >
              {plan.popular && (
                <span className="px-3 py-1 text-xs font-semibold bg-indigo-600 text-white rounded-full">
                  Most Popular
                </span>
              )}
              <h2 className="text-2xl font-bold mt-4">{plan.name}</h2>
              <p className="text-neutral-400 mt-2">{plan.description}</p>
              <p className="text-4xl font-bold mt-6">
                {plan.price}
                {plan.price !== 'Custom' && <span className="text-sm font-normal text-neutral-400">/month</span>}
              </p>
              <button
                onClick={() => navigate('/signup')}
                className={`w-full py-3 rounded-lg font-semibold mt-8 transition-colors ${
                  plan.popular
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-neutral-800 text-white hover:bg-neutral-700'
                }`}
              >
                Get Started
              </button>
              <div className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-indigo-500" />
                    <span className="text-neutral-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;