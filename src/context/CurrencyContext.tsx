import React, { createContext, useContext, useState } from 'react';

type Currency = {
  code: string;
  symbol: string;
  rate: number;
};

const currencies: Record<string, Currency> = {
  USD: { code: 'USD', symbol: '$', rate: 1 },
  EGP: { code: 'EGP', symbol: 'E£', rate: 31.5 },
  SAR: { code: 'SAR', symbol: 'SR', rate: 3.75 },
  AED: { code: 'AED', symbol: 'د.إ', rate: 3.67 }
};

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currencyCode: string) => void;
  formatPrice: (price: number) => string;
  currencies: typeof currencies;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<Currency>(currencies.USD);

  const handleSetCurrency = (currencyCode: string) => {
    if (currencyCode in currencies) {
      setCurrency(currencies[currencyCode]);
    }
  };

  const formatPrice = (price: number) => {
    const convertedPrice = price * currency.rate;
    return `${currency.symbol}${convertedPrice.toFixed(2)}`;
  };

  return (
    <CurrencyContext.Provider value={{
      currency,
      setCurrency: handleSetCurrency,
      formatPrice,
      currencies
    }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}