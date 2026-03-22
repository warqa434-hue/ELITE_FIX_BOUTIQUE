import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          {t('hero.title')}
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
          {t('hero.subtitle')}
        </p>
        <button className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl">
          {t('hero.cta')}
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
