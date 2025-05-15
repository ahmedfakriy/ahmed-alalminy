import React from 'react';
import { Link } from 'react-router-dom';
import { Service } from '../types';
import { Button } from './Button';
import { useCart } from '../context/CartContext';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { addItem } = useCart();
  
  const handleAddToCart = () => {
    addItem({
      id: service.id,
      name: service.name,
      price: service.price,
      image: service.image,
      type: 'service'
    });
  };
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link to={`/service/${service.id}`} className="block overflow-hidden">
        <div className="h-48 sm:h-56 lg:h-64 overflow-hidden">
          <img 
            src={service.image} 
            alt={service.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <Link to={`/service/${service.id}`} className="block">
            <h3 className="font-medium text-lg text-gray-900 hover:text-blue-600 transition-colors">
              {service.name}
            </h3>
          </Link>
          {service.featured && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
              Featured
            </span>
          )}
        </div>
        
        <p className="mt-1 text-gray-600 line-clamp-2 text-sm">
          {service.description}
        </p>
        
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-medium text-gray-900">
            ${service.price.toFixed(2)}
          </span>
          
          <Button 
            variant="secondary" 
            size="sm"
            onClick={handleAddToCart}
          >
            Purchase
          </Button>
        </div>
      </div>
    </div>
  );
}