import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/Home_remodel_04.png)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate/95 via-slate/80 to-transparent rtl:bg-gradient-to-l"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-start rtl:text-end">
            {t('hero.title')}
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-200 font-light leading-relaxed text-start rtl:text-end">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-teal hover:bg-slate transition-all duration-300 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
            >
              {t('hero.cta')}
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white hover:bg-white hover:text-slate transition-all duration-300 rounded-lg hover:scale-105 hover:shadow-xl"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}