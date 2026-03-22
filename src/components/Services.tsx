import {
  Wind,
  Droplet,
  Zap,
  Paintbrush,
  ChefHat,
  Bath,
  Square,
  Hammer,
  Layers,
  Sparkles,
  Building2,
  CalendarCheck,
} from 'lucide-react';

const services = [
  {
    icon: Wind,
    title: 'AC Servicing & Repair',
    description: 'Complete AC maintenance, repair, and installation services for homes and villas.',
  },
  {
    icon: Droplet,
    title: 'Plumbing Works',
    description: 'Expert plumbing solutions including leak repairs, pipe installation, and fixture replacements.',
  },
  {
    icon: Zap,
    title: 'Electrical Works',
    description: 'Professional electrical services from wiring to lighting installation and panel upgrades.',
  },
  {
    icon: Paintbrush,
    title: 'Interior & Exterior Painting',
    description: 'High-quality painting services using premium paints for lasting beauty and protection.',
  },
  {
    icon: ChefHat,
    title: 'Kitchen Remodeling',
    description: 'Transform your kitchen with custom cabinetry, countertops, and modern appliances.',
  },
  {
    icon: Bath,
    title: 'Bathroom Renovation',
    description: 'Complete bathroom makeovers with elegant fixtures, tiling, and waterproofing.',
  },
  {
    icon: Square,
    title: 'Flooring Installation',
    description: 'Expert installation of tiles, marble, hardwood, and luxury vinyl flooring.',
  },
  {
    icon: Hammer,
    title: 'Carpentry & Joinery',
    description: 'Custom woodwork including built-in wardrobes, shelving, and furniture.',
  },
  {
    icon: Layers,
    title: 'False Ceilings and Decoration',
    description: 'Expert installation of gypsum false ceilings, decorative elements, and elegant finishing touches.',
  },
  {
    icon: Sparkles,
    title: 'Outdoor Glass Cleaning',
    description: 'Professional exterior window and glass facade cleaning for sparkling, streak-free results.',
  },
  {
    icon: Building2,
    title: 'Full Villa Renovation',
    description: 'Complete villa transformation from design to finishing with project management.',
  },
  {
    icon: CalendarCheck,
    title: 'Annual Maintenance Packages',
    description: 'Comprehensive yearly maintenance plans to keep your home in perfect condition.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate mb-4">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive home remodeling and maintenance services delivered by skilled professionals
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-teal transition-all duration-300 hover:shadow-2xl group cursor-pointer hover:bg-teal/5"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-teal to-teal-light rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-slate mb-3 group-hover:text-teal transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-teal hover:bg-slate transition-all duration-300 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105"
          >
            Get a Free Quote for Any Service
          </a>
        </div>
      </div>
    </section>
  );
}