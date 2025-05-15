import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900 to-violet-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Elevate Your Tech Experience?</h2>
            <p className="text-indigo-100 max-w-xl">
              Whether you're looking for premium products or expert services, we're here to help you find the perfect solution for your needs.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="primary" 
              size="lg" 
              className="bg-gradient-to-r from-amber-400 to-amber-500 text-indigo-900 hover:from-amber-500 hover:to-amber-600 shadow-lg transform transition-all duration-200 hover:scale-105 border-0"
            >
              <Link to="/products" className="flex items-center">
                Browse Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-indigo-900 shadow-lg transform transition-all duration-200 hover:scale-105"
            >
              <Link to="/services" className="flex items-center">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}