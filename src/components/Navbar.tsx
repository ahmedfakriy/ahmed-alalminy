import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { CurrencySwitcher } from './CurrencySwitcher';
import { useLanguage } from '../context/LanguageContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems } = useCart();
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = {
    en: ['Home', 'Products', 'Services', 'About', 'Contact'],
    ar: ['الرئيسية', 'المنتجات', 'الخدمات', 'عن الشركة', 'اتصل بنا']
  };

  const getPath = (item: string) => {
    const paths = {
      'Home': '/',
      'Products': '/products',
      'Services': '/services',
      'About': '/about',
      'Contact': '/contact',
      'الرئيسية': '/',
      'المنتجات': '/products',
      'الخدمات': '/services',
      'عن الشركة': '/about',
      'اتصل بنا': '/contact'
    };
    return paths[item as keyof typeof paths];
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className={`text-xl md:text-2xl font-bold ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              TechElite
            </Link>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems[language].map((item) => (
                <li key={item}>
                  <Link 
                    to={getPath(item)}
                    className={`font-medium transition-colors ${
                      isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="flex items-center space-x-4">
            <CurrencySwitcher />
            <LanguageSwitcher />
            
            <Link
              to="/cart"
              className={`relative p-2 rounded-full transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
              }`}
            >
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-md focus:outline-none ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems[language].map((item) => (
              <Link
                key={item}
                to={getPath(item)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}