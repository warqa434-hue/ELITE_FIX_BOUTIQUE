import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Ahmed',
    location: 'Khalifa City',
    rating: 5,
    text: 'EliteFix transformed our villa beautifully. The team was professional, punctual, and the quality exceeded our expectations. Highly recommended!',
  },
  {
    name: 'Sarah',
    location: 'Mohamed Bin Zayed City',
    rating: 5,
    text: 'Outstanding service from start to finish. They delivered exactly what they promised, on time and within budget. The craftsmanship is exceptional.',
  },
  {
    name: 'Mohammed',
    location: 'Saadiyat Island',
    rating: 5,
    text: 'We had our kitchen completely remodeled and the results are stunning. Very responsive team and transparent pricing throughout the project.',
  },
  {
    name: 'Fatima',
    location: 'Yas Island',
    rating: 5,
    text: 'Excellent attention to detail and customer service. They kept us updated every step of the way. Our bathroom renovation turned out perfect!',
  },
  {
    name: 'John',
    location: 'Al Reef Villas',
    rating: 5,
    text: 'Professional team that truly cares about quality. They fixed issues immediately and made sure we were 100% satisfied before final handover.',
  },
  {
    name: 'Layla',
    location: 'Mohammed Bin Zayed City',
    rating: 5,
    text: 'Best maintenance service in Abu Dhabi! Quick response, fair pricing, and quality work. We signed up for their annual package.',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it — see what our satisfied clients have to say
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-teal-light/10 to-amber/10 rounded-2xl p-8 lg:p-12 shadow-lg">
                  <div className="flex items-center justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-8 h-8 fill-amber text-amber" />
                    ))}
                  </div>
                  <p className="text-xl lg:text-2xl text-slate text-center mb-8 leading-relaxed font-light italic">
                    "{testimonial.text}"
                  </p>
                  <div className="text-center">
                    <div className="font-display text-2xl font-bold text-teal mb-1">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-teal w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}