import { Award, Clock, Shield, Users, TrendingUp, Globe } from 'lucide-react';

export default function WhyChooseUs() {
  const advantages = [
    {
      icon: Clock,
      title: 'Same-Day Quotations',
      description: 'Rapid response times with detailed quotations delivered within 24 hours. WhatsApp-based communication for your convenience.',
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'Daily on-site inspections, 5% retention payment system, and comprehensive warranty coverage on all work.',
    },
    {
      icon: TrendingUp,
      title: 'Premium Pricing Model',
      description: '30-40% profit margins ensure we use only premium materials and skilled professionals for every project.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Hybrid subcontracting model with vetted specialists and in-house technical experts for quality control.',
    },
    {
      icon: Globe,
      title: 'Bilingual Support',
      description: 'Fluent English and Arabic communication to serve both expatriate and local Emirati communities.',
    },
    {
      icon: Award,
      title: 'Transparent Process',
      description: 'Clear invoicing, digital payment options, no hidden costs, and before/after project documentation.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose EliteFix?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our competitive advantages set us apart in Abu Dhabi's home remodeling market
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            To deliver exceptional home remodeling and maintenance services that exceed
            customer expectations through quality craftsmanship, professional conduct,
            and innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
}