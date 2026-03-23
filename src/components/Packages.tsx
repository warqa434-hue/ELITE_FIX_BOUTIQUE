import { Check } from 'lucide-react';

const packages = [
  {
    name: 'Silver',
    price: '2,500',
    popular: false,
    features: [
      '2 AC servicing visits per year',
      'Basic plumbing & electrical checks',
      'Priority scheduling',
      '10% discount on repairs',
      'Phone & WhatsApp support',
    ],
  },
  {
    name: 'Gold',
    price: '4,500',
    popular: true,
    features: [
      '4 AC servicing visits per year',
      'Quarterly home inspections',
      'Priority emergency response',
      '15% discount on all repairs',
      'Minor repairs included (up to AED 500)',
      '24/7 phone & WhatsApp support',
      'Annual painting touch-ups',
    ],
  },
  {
    name: 'Platinum',
    price: '8,000',
    popular: false,
    features: [
      'Unlimited AC servicing',
      'Monthly home inspections',
      'Immediate emergency response',
      '20% discount on major projects',
      'All minor repairs included (up to AED 1,500)',
      'Dedicated account manager',
      'Annual deep cleaning',
      'Smart home system monitoring',
    ],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-20 bg-gradient-to-br from-slate to-slate-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            Protect Your Home Year-Round
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose an annual maintenance package and enjoy peace of mind with regular inspections and priority service
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 transition-all duration-300 hover:scale-110 ${
                pkg.popular
                  ? 'bg-gradient-to-br from-teal to-teal-light text-white transform scale-105 shadow-2xl hover:shadow-3xl'
                  : 'bg-white text-slate hover:shadow-2xl hover:border-2 hover:border-teal'
              }`}
            >
              {pkg.popular && (
                <div className="inline-block bg-amber text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
                  Most Popular
                </div>
              )}

              <h3 className="font-display text-3xl font-bold mb-2">{pkg.name}</h3>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold">AED {pkg.price}</span>
                  <span className={`ml-2 ${pkg.popular ? 'text-white/80' : 'text-gray-600'}`}>
                    /year
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Check
                      className={`w-6 h-6 flex-shrink-0 mt-0.5 ${
                        pkg.popular ? 'text-amber' : 'text-teal'
                      }`}
                    />
                    <span className={pkg.popular ? 'text-white/90' : 'text-gray-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full py-4 rounded-lg text-center font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  pkg.popular
                    ? 'bg-white text-teal hover:bg-slate hover:text-white'
                    : 'bg-teal text-white hover:bg-slate'
                }`}
              >
                Choose {pkg.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}