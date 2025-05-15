import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Check } from 'lucide-react';
import { Button } from '../components/Button';
import { useCart } from '../context/CartContext';
import { useState, useEffect } from 'react';
import { getProducts } from '../data/products';

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { addItem, items } = useCart();
  const [product, setProduct] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const loadProduct = async () => {
      const products = await getProducts();
      const foundProduct = products.find(p => p.id === id);
      setProduct(foundProduct);
      setIsLoading(false);
    };
    loadProduct();
  }, [id]);
  
  const isInCart = items.some(item => item.id === id && item.type === 'product');
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you are looking for does not exist.</p>
          <Button variant="primary">
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
      </div>
    );
  }
  
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
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link
            to="/products"
            className="text-gray-600 hover:text-gray-900 flex items-center transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Products
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 md:p-8">
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex flex-col h-full">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h1>
                  
                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.featured && (
                      <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <div className="prose prose-blue max-w-none mb-8">
                    <p className="text-gray-700">{product.description}</p>
                  </div>
                  
                  <div className="border-t border-gray-200 py-4 mb-6">
                    <h3 className="font-medium text-gray-900 mb-2">Product Details</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check size={20} className="mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Premium quality materials</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={20} className="mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">1-year manufacturer warranty</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={20} className="mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Free shipping over $100</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={20} className="mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">24/7 customer support</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <Button
                    variant={isInCart ? 'secondary' : 'primary'}
                    size="lg"
                    fullWidth
                    onClick={handleAddToCart}
                    className="flex items-center justify-center"
                  >
                    <ShoppingCart size={20} className="mr-2" />
                    {isInCart ? 'Add Again' : 'Add to Cart'}
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