import { Facebook, Instagram, Linkedin, Twitter, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate to-slate-light text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-teal to-teal-light rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">EF</span>
              </div>
              <div>
                <div className="font-display text-2xl font-bold">EliteFix</div>
                <div className="text-xs text-gray-400 font-light">Crafted Right. Done Fast. Guaranteed.</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Abu Dhabi's premier home remodeling and maintenance service.
              Excellence, integrity, and reliability in every project.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-teal transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-teal transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-teal transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/971569001888"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-amber transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-amber transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#packages" className="text-gray-300 hover:text-amber transition-colors">
                  Packages
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-amber transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-amber transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">Full Villa Renovation</li>
              <li className="text-gray-300">Kitchen Remodeling</li>
              <li className="text-gray-300">Bathroom Renovation</li>
              <li className="text-gray-300">Plumbing & Electrical</li>
              <li className="text-gray-300">AC Servicing</li>
              <li className="text-gray-300">Annual Maintenance</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Abu Dhabi, United Arab Emirates
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-amber flex-shrink-0 mt-1" />
                <a href="tel:+971569001888" className="text-gray-300 hover:text-white transition-colors">
                  +971 56 900 1888
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 text-amber flex-shrink-0 mt-1" />
                <a
                  href="https://wa.me/971569001888"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-amber flex-shrink-0 mt-1" />
                <a
                  href="mailto:info@elitefix.ae"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@elitefix.ae
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2026 EliteFix Home Remodeling & Maintenance. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}