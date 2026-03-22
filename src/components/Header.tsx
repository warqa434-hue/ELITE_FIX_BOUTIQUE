import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: t('header.home'), href: '#' },
    { label: t('header.about'), href: '#' },
    { label: t('header.services'), href: '#' },
    { label: t('header.pricing'), href: '#' },
    { label: t('header.contact'), href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary-600">Elite Fix</h1>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <LanguageSwitcher />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};
