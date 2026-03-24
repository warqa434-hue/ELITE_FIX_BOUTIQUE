import { useState } from 'react';
import { Send, MessageCircle, Phone, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    area: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      if (!supabase) {
        throw new Error('Supabase is not configured');
      }

      const { error } = await supabase.from('quote_requests').insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service_type: formData.serviceType,
        area: formData.area,
        budget: formData.budget || null,
        message: formData.message || null,
        status: 'pending',
      });

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        area: '',
        budget: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting quote request:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceTypes = [
    'Full Villa Renovation',
    'Kitchen Remodeling',
    'Bathroom Renovation',
    'Apartment Remodeling',
    'Maintenance Service',
    'Other',
  ];

  const areas = [
    'Khalifa City',
    'Mohamed Bin Zayed City',
    'Saadiyat Island',
    'Al Reef Villas',
    'Mohammed Bin Zayed City',
    'Yas Island',
    'Al Mushrif',
    'Other',
  ];

  const budgetRanges = [
    'Under AED 25,000',
    'AED 25,000 - 50,000',
    'AED 50,000 - 100,000',
    'AED 100,000 - 200,000',
    'AED 200,000+',
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate mb-6">
              Get Your Free Quote
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ready to transform your space? Request a same-day quotation and
              experience the EliteFix difference. Our team responds within 2-4 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    WhatsApp (Fastest)
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Instant communication via WhatsApp
                  </p>
                  <a
                    href="https://wa.me/971569001888"
                    className="text-green-600 font-semibold hover:underline"
                  >
                    +971 56 900 1888
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Phone Support
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Bilingual support (English & Arabic)
                  </p>
                  <a
                    href="tel:+971569001888"
                    className="text-teal font-semibold hover:underline"
                  >
                    +971 56 900 1888
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Email Us
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Detailed inquiries welcome
                  </p>
                  <a
                    href="mailto:info@elitefix.ae"
                    className="text-amber-600 font-semibold hover:underline"
                  >
                    info@elitefix.ae
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-teal/10 to-amber/10 rounded-xl border-2 border-teal/20">
              <h3 className="font-display text-xl font-bold text-slate mb-4">
                What Happens Next?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="w-7 h-7 bg-gradient-to-br from-teal to-teal-light text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    1
                  </span>
                  <span className="text-gray-700 font-medium">
                    We respond within 2-4 hours
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-7 h-7 bg-gradient-to-br from-teal to-teal-light text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    2
                  </span>
                  <span className="text-gray-700 font-medium">
                    Free consultation & site visit
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-7 h-7 bg-gradient-to-br from-teal to-teal-light text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    3
                  </span>
                  <span className="text-gray-700 font-medium">
                    Detailed quotation within 24 hours
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-7 h-7 bg-gradient-to-br from-teal to-teal-light text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    4
                  </span>
                  <span className="text-gray-700 font-medium">
                    Project starts as per your schedule
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate to-slate-light rounded-2xl p-8 text-white">
            <h3 className="font-display text-3xl font-bold mb-6">Request Quote Form</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="+971 XX XXX XXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Service Type *
                </label>
                <select
                  required
                  value={formData.serviceType}
                  onChange={(e) =>
                    setFormData({ ...formData, serviceType: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  <option value="">Select service</option>
                  {serviceTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Location *
                </label>
                <select
                  required
                  value={formData.area}
                  onChange={(e) =>
                    setFormData({ ...formData, area: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  <option value="">Select area</option>
                  {areas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Budget Range
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  <option value="">Select budget</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Project Details
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber text-white py-4 rounded-lg hover:bg-amber-light transition-all duration-300 font-bold flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Request'}</span>
                <Send className="w-5 h-5" />
              </button>

              {submitStatus === 'success' && (
                <div className="flex items-center space-x-2 bg-green-500 text-white px-4 py-3 rounded-lg">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">Quote request submitted successfully! We'll contact you within 2-4 hours.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center space-x-2 bg-red-500 text-white px-4 py-3 rounded-lg">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">Failed to submit request. Please try WhatsApp or call us directly.</span>
                </div>
              )}

              <p className="text-sm text-blue-100 text-center">
                We'll respond within 2-4 hours during business hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}