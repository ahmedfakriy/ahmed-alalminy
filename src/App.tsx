import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CartPage } from './pages/CartPage';
import { AdminPage } from './pages/AdminPage';
import { CartProvider } from './context/CartContext';
import { LanguageProvider } from './context/LanguageContext';
import { CurrencyProvider } from './context/CurrencyContext';
import { useLanguage } from './context/LanguageContext';
import './index.css';

function AppContent() {
  const { language } = useLanguage();

  return (
    <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Router>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/service/:id" element={<ServiceDetailPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/admin" element={<AdminPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </Router>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <CurrencyProvider>
        <AppContent />
      </CurrencyProvider>
    </LanguageProvider>
  );
}

export default App