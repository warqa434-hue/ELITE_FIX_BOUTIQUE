import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLng = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLng);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-teal-50 hover:bg-teal-100 text-teal-700 font-medium transition-colors duration-200"
      aria-label="Toggle language"
    >
      <Globe size={18} />
      <span className="text-sm">{i18n.language.toUpperCase()}</span>
    </button>
  );
}
