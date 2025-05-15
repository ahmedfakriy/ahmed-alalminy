import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-800 to-violet-800 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: "radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)",
          backgroundSize: "100px 100px" 
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 md:py-24 lg:py-32">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
              Premium Tech Products & Expert Services
            </h1>
            <p className="text-lg md:text-xl text-indigo-100 mb-8 max-w-xl">
              Discover cutting-edge technology and professional services that elevate your digital experience. Quality products, expert solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                size="lg" 
                className="bg-gradient-to-r from-amber-400 to-amber-500 text-indigo-900 hover:from-amber-500 hover:to-amber-600 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all border-0"
              >
                <Link to="/products" className="flex items-center">
                  Shop Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-indigo-900 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all"
              >
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="group overflow-hidden rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <img 
                    src="https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Premium Headphones" 
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="group overflow-hidden rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <img 
                    src="https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Professional Camera" 
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="group overflow-hidden rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <img 
                    src="https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Smart Watch" 
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="group overflow-hidden rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <img 
                    src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Gaming Laptop" 
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 right-4 bg-gradient-to-r from-amber-400 to-amber-500 text-indigo-900 font-bold py-3 px-6 rounded-full shadow-xl transform rotate-2 animate-bounce">
              New Arrivals!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}