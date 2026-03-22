import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-primary-400 mb-4">Elite Fix</h3>
            <p className="text-gray-400">
              {t('hero.subtitle')}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('footer.privacy')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@elitefix.com</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            {t('footer.copyright')} © 2024 Elite Fix Boutique
          </p>
        </div>
      </div>
    </footer>
  );
};
