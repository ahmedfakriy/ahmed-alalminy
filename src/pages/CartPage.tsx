import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowLeft, ShoppingBag, Smartphone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/Button';

export function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();
  
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="flex justify-center mb-4">
              <ShoppingBag size={64} className="text-gray-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h1>
            <p className="text-gray-600 mb-6">
              Looks like you haven't added any products or services to your cart yet.
            </p>
            <Button variant="primary">
              <Link to="/products" className="flex items-center">
                <ArrowLeft size={20} className="mr-2" />
                Browse Products
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <ul className="divide-y divide-gray-200">
                {items.map(item => (
                  <li key={item.id} className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row items-center">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 mb-4 sm:mb-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      
                      <div className="sm:ml-6 flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                            <p className="mt-1 text-sm text-gray-500 capitalize">{item.type}</p>
                          </div>
                          <p className="text-lg font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button
                              className="px-3 py-1 text-gray-600 hover:text-gray-800 focus:outline-none"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              -
                            </button>
                            <span className="px-3 py-1 text-gray-800">{item.quantity}</span>
                            <button
                              className="px-3 py-1 text-gray-600 hover:text-gray-800 focus:outline-none"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                          
                          <button
                            className="text-red-500 hover:text-red-700 focus:outline-none"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="border-t border-gray-200 pt-4 space-y-4">
                <div className="flex justify-between">
                  <p className="text-gray-600">Subtotal</p>
                  <p className="font-medium text-gray-900">${totalPrice.toFixed(2)}</p>
                </div>
                
                <div className="flex justify-between">
                  <p className="text-gray-600">Shipping</p>
                  <p className="font-medium text-gray-900">$0.00</p>
                </div>
                
                <div className="flex justify-between">
                  <p className="text-gray-600">Tax</p>
                  <p className="font-medium text-gray-900">${(totalPrice * 0.08).toFixed(2)}</p>
                </div>
                
                <div className="flex justify-between border-t border-gray-200 pt-4">
                  <p className="text-lg font-semibold text-gray-900">Total</p>
                  <p className="text-lg font-semibold text-gray-900">
                    ${(totalPrice + (totalPrice * 0.08)).toFixed(2)}
                  </p>
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <Button
                  variant="primary"
                  fullWidth
                  size="lg"
                  className="flex items-center justify-center"
                >
                  <Smartphone className="mr-2 h-5 w-5" />
                  Pay with Vodafone Cash
                </Button>
                <p className="text-sm text-gray-600 text-center">
                  Send payment to: 01023099469
                </p>
              </div>
              
              <div className="mt-4 text-center">
                <Link
                  to="/products"
                  className="text-blue-600 hover:text-blue-800 text-sm flex items-center justify-center"
                >
                  <ArrowLeft size={16} className="mr-1" />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}