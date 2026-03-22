import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export const useLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: 'en' | 'ar') => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);

    // Update HTML dir attribute for RTL
    const htmlElement = document.documentElement;
    htmlElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    htmlElement.lang = language;
  };

  // Apply RTL on mount
  useEffect(() => {
    const language = (i18n.language as 'en' | 'ar') || 'en';
    const htmlElement = document.documentElement;
    htmlElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    htmlElement.lang = language;
  }, [i18n]);

  return {
    language: i18n.language as 'en' | 'ar',
    changeLanguage,
    isRTL: i18n.language === 'ar',
  };
};
