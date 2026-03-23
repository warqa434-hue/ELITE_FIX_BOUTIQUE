import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.packages'), href: '#packages' },
    { label: t('nav.portfolio'), href: '#portfolio' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-teal to-teal-light rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">EF</span>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-teal">{t('brand')}</div>
                <div className="text-xs text-gray-600 font-light">Crafted Right. Done Fast.</div>
              </div>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate hover:text-teal font-semibold transition-all duration-300 hover:scale-105"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <a
              href="tel:+971569001888"
              className="flex items-center gap-2 text-slate hover:text-teal transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">Call Now</span>
            </a>
            <a
              href="https://wa.me/971569001888"
              className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold">WhatsApp</span>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate hover:text-teal"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-slate hover:text-teal hover:bg-teal/5 font-semibold py-2 px-2 rounded transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t space-y-3">
              <div className="px-2 py-2">
                <LanguageSwitcher />
              </div>
              <a
                href="tel:+971569001888"
                className="flex items-center gap-2 text-slate hover:text-teal hover:bg-teal/5 px-2 py-2 rounded transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">Call Now</span>
              </a>
              <a
                href="https://wa.me/971569001888"
                className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold">WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}