import React from 'react';
import { DollarSign } from 'lucide-react';
import { Button } from './Button';
import { useCurrency } from '../context/CurrencyContext';
import { useLanguage } from '../context/LanguageContext';

export function CurrencySwitcher() {
  const { currency, setCurrency, currencies } = useCurrency();
  const { language } = useLanguage();

  return (
    <div className="relative inline-block">
      <select
        value={currency.code}
        onChange={(e) => setCurrency(e.target.value)}
        className={`appearance-none pl-8 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          language === 'ar' ? 'text-right' : 'text-left'
        } bg-transparent border border-current`}
      >
        {Object.entries(currencies).map(([code, curr]) => (
          <option key={code} value={code} className="bg-gray-800 text-white">
            {code} ({curr.symbol})
          </option>
        ))}
      </select>
      <DollarSign size={16} className="absolute left-2 top-1/2 transform -translate-y-1/2" />
    </div>
  );
}