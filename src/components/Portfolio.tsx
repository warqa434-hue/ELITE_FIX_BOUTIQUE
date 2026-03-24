import { Eye } from 'lucide-react';

export default function Portfolio() {
  const withBase = (assetPath: string) =>
    `${import.meta.env.BASE_URL}${assetPath.replace(/^\/+/, '')}`;

  const projects = [
    {
      title: 'Luxury Villa Renovation',
      location: 'Saadiyat Island',
      value: 'AED 280,000',
      category: 'Full Renovation',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Modern Kitchen Remodel',
      location: 'Mohamed Bin Zayed City',
      value: 'AED 85,000',
      category: 'Kitchen',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Master Bathroom Suite',
      location: 'Zayed City',
      value: 'AED 55,000',
      category: 'Bathroom',
      image: withBase('/MBR.png'),
    },
    {
      title: 'Apartment Modernization',
      location: 'Yas Island',
      value: 'AED 65,000',
      category: 'Apartment',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Outdoor Glass Cleaning',
      location: 'Khalifa City',
      value: 'AED 2,000',
      category: 'Cleaning',
      image: 'https://images.pexels.com/photos/31435403/pexels-photo-31435403.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Modern Villa Porch & Outdoor Space',
      location: 'Al Mushrif',
      value: 'AED 120,000',
      category: 'Exterior',
      image: withBase(
        '/A_realistic,_sun-drenched_outdoor_family_sitting_area,_featuring_rustic_Spanish_terracotta_tiles_underfoot._Warm,_inviting_LED_lights_softly_illuminate_the_steps._A_sleek,_modern_BBQ_grill_stands_ready_for_use._Th.jpg'
      ),
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-offwhite to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful renovations across Abu Dhabi,
            showcasing our commitment to quality and client satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate/90 via-slate/40 to-transparent"></div>
                </div>
                <div className="absolute top-4 right-4 bg-teal text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                  {project.category}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full">
                    <Eye className="w-8 h-8 text-teal" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-slate mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 flex items-center space-x-2">
                  <span className="w-2 h-2 bg-amber rounded-full" />
                  <span>{project.location}</span>
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Project Value</div>
                    <div className="text-lg font-bold text-teal">
                      {project.value}
                    </div>
                  </div>
                  <button className="flex items-center space-x-2 text-teal hover:text-teal-light font-semibold transition-colors">
                    <span>View</span>
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-teal to-teal-light hover:from-teal-light hover:to-teal transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
}