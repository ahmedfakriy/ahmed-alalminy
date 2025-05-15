import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Languages } from 'lucide-react';
import { Button } from './Button';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
      className="flex items-center text-white hover:text-blue-200"
    >
      <Languages size={20} className="mr-2" />
      <span className="text-white">{language === 'en' ? 'العربية' : 'English'}</span>
    </Button>
  );
}