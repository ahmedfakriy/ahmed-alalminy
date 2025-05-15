import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { Button } from './Button';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  isAdmin?: boolean;
  onEdit?: (product: Product) => void;
  onDelete?: (id: string) => void;
}

export function ProductCard({ product, isAdmin = false, onEdit, onDelete }: ProductCardProps) {
  const { addItem } = useCart();
  
  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      type: 'product'
    });
  };
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${product.id}`} className="block overflow-hidden">
        <div className="h-48 sm:h-56 lg:h-64 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <Link to={`/product/${product.id}`} className="block">
            <h3 className="font-medium text-lg text-gray-900 hover:text-blue-600 transition-colors">
              {product.name}
            </h3>
          </Link>
          {product.featured && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
              Featured
            </span>
          )}
        </div>
        
        <p className="mt-1 text-gray-600 line-clamp-2 text-sm">
          {product.description}
        </p>
        
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-medium text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          
          {isAdmin ? (
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onEdit && onEdit(product)}
              >
                Edit
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="text-red-600 hover:bg-red-50"
                onClick={() => onDelete && onDelete(product.id)}
              >
                Delete
              </Button>
            </div>
          ) : (
            <Button 
              variant="primary" 
              size="sm"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}