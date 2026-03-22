import { MapPin, Home, TrendingUp } from 'lucide-react';

export default function ServiceAreas() {
  const areas = [
    {
      name: 'Khalifa City',
      description: 'Affordable housing with high renovation demand',
      type: 'High Demand',
    },
    {
      name: 'Mohamed Bin Zayed City',
      description: 'Affluent residential community with premium properties',
      type: 'Premium',
    },
    {
      name: 'Saadiyat Island',
      description: 'Luxury island development with high-income residents',
      type: 'Luxury',
    },
    {
      name: 'Al Reef Villas',
      description: 'Gated community with villa-style properties',
      type: 'Residential',
    },
    {
      name: 'Mohammed Bin Zayed City',
      description: 'Growing residential area with young families',
      type: 'Growing',
    },
    {
      name: 'Yas Island',
      description: 'Mixed-use development with diverse property types',
      type: 'Mixed-Use',
    },
    {
      name: 'Al Mushrif',
      description: 'Established residential area with aging properties',
      type: 'Established',
    },
  ];

  return (
    <section id="areas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Service Areas Across Abu Dhabi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We proudly serve 7 key areas across Abu Dhabi, covering 45% of the UAE's
            renovation market with same-day response times.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-amber-100 rounded-3xl opacity-30" />

          <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
            {areas.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all border-2 border-transparent hover:border-blue-900 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        {area.name}
                      </h3>
                      <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full font-medium">
                        {area.type}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Home className="w-6 h-6 text-amber-400" />
            </div>
            <div className="text-3xl font-bold text-blue-900 mb-2">45%</div>
            <div className="text-gray-700 font-medium">Abu Dhabi Market Coverage</div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-amber-800 mb-2">4.7%</div>
            <div className="text-gray-700 font-medium">Annual Market Growth</div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-green-800 mb-2">2-4hrs</div>
            <div className="text-gray-700 font-medium">Average Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
}