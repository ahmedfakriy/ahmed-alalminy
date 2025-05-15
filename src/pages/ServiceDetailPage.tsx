import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Check } from 'lucide-react';
import { services } from '../data/services';
import { Button } from '../components/Button';
import { useCart } from '../context/CartContext';

export function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { addItem, items } = useCart();
  
  const service = services.find(s => s.id === id);
  const isInCart = items.some(item => item.id === id && item.type === 'service');
  
  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h2>
          <p className="text-gray-600 mb-6">The service you are looking for does not exist.</p>
          <Button variant="primary">
            <Link to="/services">Back to Services</Link>
          </Button>
        </div>
      </div>
    );
  }
  
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
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link
            to="/services"
            className="text-gray-600 hover:text-gray-900 flex items-center transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Services
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 md:p-8">
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex flex-col h-full">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {service.name}
                  </h1>
                  
                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold text-gray-900">
                      ${service.price.toFixed(2)}
                    </span>
                    {service.featured && (
                      <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <div className="prose prose-blue max-w-none mb-8">
                    <p className="text-gray-700">{service.description}</p>
                  </div>
                  
                  <div className="border-t border-gray-200 py-4 mb-6">
                    <h3 className="font-medium text-gray-900 mb-2">Service Benefits</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check size={20} className="mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Expert professional team</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={20} className="mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Satisfaction guaranteed</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={20} className="mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Flexible scheduling options</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={20} className="mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Ongoing support available</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <Button
                    variant={isInCart ? 'outline' : 'secondary'}
                    size="lg"
                    fullWidth
                    onClick={handleAddToCart}
                    className="flex items-center justify-center"
                  >
                    <Calendar size={20} className="mr-2" />
                    {isInCart ? 'Already in Cart' : 'Purchase Service'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}