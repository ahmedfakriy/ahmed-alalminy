import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Service } from '../types';
import { ServiceCard } from './ServiceCard';

interface FeaturedServicesProps {
  services: Service[];
}

export function FeaturedServices({ services }: FeaturedServicesProps) {
  const featuredServices = services.filter(service => service.featured).slice(0, 3);
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Featured Services</h2>
          <Link 
            to="/services" 
            className="text-teal-600 hover:text-teal-800 font-medium flex items-center transition-colors"
          >
            View all services
            <ChevronRight className="ml-1 h-5 w-5" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}