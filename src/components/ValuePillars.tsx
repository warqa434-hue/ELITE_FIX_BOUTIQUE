import { Award, Clock, DollarSign, Shield } from 'lucide-react';

const pillars = [
  {
    icon: Award,
    title: 'Quality Workmanship & Materials',
    description:
      'We use only certified, premium-grade materials and employ skilled, vetted craftsmen. Every finish is inspected before handover.',
  },
  {
    icon: Clock,
    title: 'Speed & Reliability',
    description:
      'We respect your time. Projects are delivered on schedule with daily progress updates and zero surprise delays.',
  },
  {
    icon: DollarSign,
    title: 'Cost Efficiency',
    description:
      'Transparent, itemized quotations with no hidden fees. Competitive pricing that reflects real market value — not inflated margins.',
  },
  {
    icon: Shield,
    title: 'Work Guarantee',
    description:
      "Every job comes with a written workmanship guarantee. If something isn't right, we fix it — no questions asked.",
  },
];

export default function ValuePillars() {
  return (
    <section className="py-20 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal to-teal-light rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-slate mb-4">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}