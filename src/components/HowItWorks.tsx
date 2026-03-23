import { MessageCircle, ClipboardCheck, Hammer, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: 'Contact Us',
    description: 'WhatsApp, call, or online form',
  },
  {
    icon: ClipboardCheck,
    title: 'Free Site Visit & Quote',
    description: 'Detailed, itemized quotation within 24 hours',
  },
  {
    icon: Hammer,
    title: 'We Get to Work',
    description: 'Vetted team, premium materials, on-schedule execution',
  },
  {
    icon: CheckCircle,
    title: 'Handover & Guarantee',
    description: 'Final inspection, client sign-off, written guarantee issued',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our simple 4-step process ensures your project is delivered on time and to the highest standards
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-teal via-amber to-teal"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-teal to-teal-light rounded-full flex items-center justify-center mx-auto shadow-xl">
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-amber rounded-full flex items-center justify-center text-white font-bold text-lg border-4 border-offwhite">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}