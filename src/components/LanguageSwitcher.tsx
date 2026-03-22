import { useLanguage } from '../i18n/useLanguage';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-5 h-5 text-primary-600" />
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          language === 'en'
            ? 'bg-primary-600 text-white'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
      >
        {t('common.english')}
      </button>
      <button
        onClick={() => changeLanguage('ar')}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          language === 'ar'
            ? 'bg-primary-600 text-white'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
      >
        {t('common.arabic')}
      </button>
    </div>
  );
};
