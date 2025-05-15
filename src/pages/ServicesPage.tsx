import React from 'react';
import { services } from '../data/services';
import { ServiceCard } from '../components/ServiceCard';

export function ServicesPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-16">
      <div className="bg-white py-8 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Our Services</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            Expert solutions tailored to your needs. Our professional services help you get the most out of your technology.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}