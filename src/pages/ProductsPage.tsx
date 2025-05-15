import React, { useState, useEffect } from 'react';
import { getProducts } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Filter, PackageSearch } from 'lucide-react';
import { Button } from '../components/Button';
import { Product } from '../types';

export function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setIsLoading(true);
    const data = await getProducts();
    setProducts(data);
    setFilteredProducts(data);
    setIsLoading(false);
  };
  
  // Get unique categories
  const categories = Array.from(new Set(products.map(product => product.category)));
  
  useEffect(() => {
    if (selectedCategory) {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory, products]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="bg-white py-8 shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-96 bg-gray-200 rounded animate-pulse mt-2"></div>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md p-4">
                <div className="h-48 bg-gray-200 rounded-lg animate-pulse"></div>
                <div className="mt-4 h-6 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                <div className="mt-2 h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <PackageSearch className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">No Products Available</h2>
            <p className="text-gray-600 mb-4">
              There are currently no products in our inventory. Please check back later.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 min-h-screen pt-16">
      <div className="bg-white py-8 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Our Products</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            Discover our premium selection of tech products designed to enhance your digital lifestyle.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:flex">
          {/* Mobile filter button */}
          <div className="lg:hidden mb-4">
            <Button
              variant="outline"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full flex justify-between items-center"
            >
              <span>Filters {selectedCategory && `(1)`}</span>
              <Filter size={20} />
            </Button>
          </div>
          
          {/* Sidebar filters */}
          <div className={`lg:w-1/4 lg:pr-8 ${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
            <div className="bg-white rounded-lg shadow-md p-4 mb-6 sticky top-20">
              <h2 className="font-semibold text-lg mb-4">Categories</h2>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                    selectedCategory === null
                      ? 'bg-blue-100 text-blue-800 font-medium'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  All Products
                </button>
                
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left px-3 py-2 rounded-md capitalize transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-100 text-blue-800 font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Products grid */}
          <div className="lg:w-3/4">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </p>
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <PackageSearch className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">
                  {selectedCategory 
                    ? `No products available in the "${selectedCategory}" category.`
                    : 'No products match your current filters.'}
                </p>
                {selectedCategory && (
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => setSelectedCategory(null)}
                  >
                    Show all products
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}