import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface FeaturedProductsProps {
  products: Product[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  const featuredProducts = products.filter(product => product.featured).slice(0, 3);
  
  if (products.length === 0) {
    return (
      <section className="py-16 bg-gradient-to-br from-gray-50 via-indigo-50 to-violet-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-indigo-900">Featured Products</h2>
            <Link 
              to="/products" 
              className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center transition-colors group"
            >
              View all products
              <ChevronRight className="ml-1 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-indigo-50 to-violet-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-indigo-900 mb-2">Featured Products</h2>
            <p className="text-indigo-600 max-w-2xl">
              Discover our handpicked selection of premium tech products, chosen for their exceptional quality and innovation.
            </p>
          </div>
          <Link 
            to="/products" 
            className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center transition-colors group"
          >
            View all products
            <ChevronRight className="ml-1 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}