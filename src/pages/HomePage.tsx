import React, { useState, useEffect } from 'react';
import { Hero } from '../components/Hero';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { FeaturedServices } from '../components/FeaturedServices';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { CTASection } from '../components/CTASection';
import { getProducts } from '../data/products';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';
import { Product } from '../types';

export function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  return (
    <div>
      <Hero />
      <FeaturedProducts products={products} />
      <FeaturedServices services={services} />
      <TestimonialsSection testimonials={testimonials} />
      <CTASection />
    </div>
  );
}